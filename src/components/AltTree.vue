<template>
    <div class="parent">

        <!-- Round one -->
        <template  v-for="(n, index) in 4" :key="index">
            <div :class="`div${n} wrapper`">
                <div @click="sendToNextRound(beers[index].top, index, 'roundTwo')">{{beers[index].top.name || ''}}</div>
                <div @click="sendToNextRound(beers[index].bottom, index, 'roundTwo')">{{beers[index].bottom.name || ''}}</div>
            </div>
        </template>

        <!-- Round two -->
        <template v-for="(n, index) in 2" :key="index">
            <div :class="`div${n + 4} wrapper`">
                <div @click="sendToNextRound(roundTwo[index].top, index, 'finale')">{{roundTwo[index]?.top.name ? roundTwo[index]?.top.name  : ''}}</div>
                <div @click="sendToNextRound(roundTwo[index].bottom, index, 'finale')">{{roundTwo[index]?.bottom.name ? roundTwo[index]?.bottom.name  : ''}}</div>
            </div>
        </template>

        <!-- Round three -->
        <template v-for="(n, index) in 1" :key="index">
            <div :class="`div${n + 6} wrapper`">
                <div @click="declareWinner(finale[index].top.name || '')">{{finale[index]?.top.name ? finale[index]?.top.name : ''}}</div>
                <div @click="declareWinner(finale[index].bottom.name || '')">{{finale[index]?.bottom.name ? finale[index]?.bottom.name : ''}}</div>
            </div>
        </template>

        <!-- Round four -->
        <!-- <template v-for="(n, index) in 2" :key="index">
            <div :class="`div${n + 12} wrapper`">
                <div >{{index}}</div>
                <div >{{index}}</div>
            </div>
        </template> -->

        <!-- Round five -->
        <!-- <template v-for="(n, index) in 1" :key="index">
            <div :class="`div${n + 14} wrapper`">
            <div >{{index}}</div>
            <div >{{index}}</div>
            </div>
        </template> -->
</div>
</template>

<script>
import beers from "../assets/altBeers.json";
import { database} from "@/firebase";
import {ref, update, onValue} from "firebase/database";

    export default {
        name: 'AltTree',
        computed: {
            beers() { return JSON.parse(JSON.stringify(beers));},
        },
        data() {
            return {
                roundTwo: [],
                finale: [],
                roundFour: [],
            }
        },
        mounted() {
            const roundTwoRef = ref(database, `Users/${this.$route.params.id}`);
            onValue(roundTwoRef, (snapshot) => {
                const data = snapshot.val();
                this.roundTwo = data.roundTwo;
                this.finale = data.finale;
                console.log('rountwo: ', this.roundTwo)
                console.log('finale: ', this.finale)
            });
        },
        methods: {
            async sendToNextRound(beer, index, round) {
                if (index % 2 === 0 && index < 2) {
                    const path = `Users/${this.$route.params.id}/${round}/0/top`
                    update(ref(database, path), beer);
                } else if (index % 2 !== 0 && index < 2) {
                    const path = `Users/${this.$route.params.id}/${round}/0/bottom`
                    update(ref(database, path), beer);
                }

                if (index % 2 === 0 && index >= 2 && index < 4) {
                    const path = `Users/${this.$route.params.id}/${round}/1/top`
                    update(ref(database, path), beer);
                } else if (index % 2 !== 0 && index >= 2 && index < 4) {
                    const path = `Users/${this.$route.params.id}/${round}/1/bottom`
                    update(ref(database, path), beer);
                }
            },
            getTree() {
                const roundTwoRef = ref(database, `Users/${this.$route.params.id}`);
                onValue(roundTwoRef, (snapshot) => {
                const data = snapshot.val();
                this.roundTwo = data.roundTwo;
                this.finale = data.finale;
                console.log('rountwo: ', this.roundTwo)
                console.log('finale: ', this.finale)
                });
            },
            declareWinner(beer) {
                window.alert(beer);
            }
        }
    }
</script>

<style scoped>

.parent {
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(10, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
margin-top: 4rem;
}

.div1 { grid-area: 1 / 1 / 2 / 2; }
.div2 { grid-area: 3 / 1 / 4 / 2; }
.div3 { grid-area: 5 / 1 / 6 / 2; }
.div4 { grid-area: 7 / 1 / 8 / 2; }
.div5 { grid-area: 2 / 2 / 3 / 3; }
.div6 { grid-area: 6 / 2 / 7 / 3; }
.div7 { grid-area: 4 / 3 / 5 / 4; }
</style>