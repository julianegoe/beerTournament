<template>
  <div v-if="!loading" class="parent">

    <!-- West -->
    <AltTree :numberOfMatches="8" nextRound="roundTwoWest" :roundData="roundOneWest"/>

    <AltTree :numberOfMatches="4" nextRound="roundThreeWest" :roundData="roundTwoWest" />

    <AltTree :numberOfMatches="2" nextRound="semiFinalsWest" :roundData="roundThreeWest" />

    <!-- Semi Finals -->
    <AltTree :numberOfMatches="2" nextRound="finale" :roundData="semiFinals" />

    <!-- Finale -->
    <AltTree :numberOfMatches="1" nextRound="winner" :roundData="finale" />

    <!-- East -->
    <AltTree :numberOfMatches="2" nextRound="semiFinalsEast" :roundData="roundThreeEast" />

    <AltTree :numberOfMatches="4" nextRound="roundThreeEast" :roundData="roundTwoEast" />

    <AltTree :numberOfMatches="8" nextRound="roundTwoEast" :roundData="roundOneEast" />
  </div>
</template>

<script>
import AltTree from '@/components/AltTree.vue';
import { database} from "@/firebase";
import {ref, onValue} from "firebase/database";
import beers from "../assets/altBeers.json";

export default {
  name: 'Home',
  components: { AltTree },
  data() {
    return {
      loading: true,
      roundTwoWest: [],
      roundThreeWest: [],
      semiFinals: [],
      roundTwoEast: [],
      roundThreeEast: [],
      finale: [],
    }
  },
  computed: {
    beers() { return JSON.parse(JSON.stringify(beers))},
    roundOneWest() {
      return JSON.parse(JSON.stringify(beers)).slice(0,8)
    },
    roundOneEast() {
      return JSON.parse(JSON.stringify(beers)).slice(8,17)
    },
  },
  beforeMount() {
    this.loading = true;
    const roundTwoRef = ref(database, `Users/${this.$route.params.id}`);
    onValue(roundTwoRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        this.roundTwoWest = data.roundTwoWest;
        this.roundThreeWest = data.roundThreeWest;
        this.semiFinals = data.semiFinals;
        this.roundTwoEast = data.roundTwoEast;
        this.roundThreeEast = data.roundThreeEast;
        this.finale = data.finale;
      } else {
        console.log(data);
      }
      this.loading = false;
    });
  },
};
</script>
<style scoped>

.parent {
display: grid;
grid-template-columns: repeat(7, 1fr);
grid-template-rows: repeat(16, 1fr);
grid-column-gap: 00.5rem;
grid-row-gap: 0px;
margin: 4rem 2rem;
}

</style>
