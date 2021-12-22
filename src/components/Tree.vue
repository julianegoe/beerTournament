<template>
 <section id="bracket">
  <PermissionDeniedModal v-if="isInfoModalOpen" @close-modal="closeInfoModal" />
  <ConfirmResetModal
   v-if="isResetModalOpen"
   @confirm-reset="resetDatabase($route.params.id)"
   @close-modal="closeResetInfoModal"
  />
  <div class="container">
   <div class="split split-one">
    <div class="round round-one current">
     <div class="round-details">Runde 1<br /><span class="date"></span></div>
     <ul class="matchup" v-for="(n, index) in 8" :key="index">
      <li
       @click="declareWinnerRoundOneWest(selectionTopWest[index], index)"
       class="team-origin team team-top"
      >
       <img
        class="beer-logo"
        :src="require(`../assets/beerImages/${selectionTopWest[index].iconFilename}`)"
        alt="beer logo"
       />
       {{ selectionTopWest[index].name }}
      </li>
      <li
       @click="declareWinnerRoundOneWest(selectionBottomWest[index], index)"
       class="team-origin team team-bottom"
      >
      <img
        class="beer-logo"
        :src="require(`../assets/beerImages/${selectionBottomWest[index].iconFilename}`)"
        alt="beer logo"
       />
       {{ selectionBottomWest[index].name }}
      </li>
     </ul>
    </div>
    <!-- END ROUND ONE -->

    <div class="round round-two">
     <div class="round-details">Runde 2<br /><span class="date"></span></div>
     <ul class="matchup">
      <li
       @click="declareWinnerRoundTwoWest(roundOneWinnersTopWest[0], 0)"
       class="team team-top"
       :title="roundOneWinnersTopWest[0]"
      >
       <div class="beername">{{ roundOneWinnersTopWest[0] }}</div>
       <CloseButton v-if="roundOneWinnersTopWest[0]" @close="deleteSingleBeer(roundOneWinnersTopWest[0], 'roundOneWinnersTopWest')" />
      </li>
      <li
       @click="declareWinnerRoundTwoWest(roundOneWinnersBottomWest[1], 0)"
       class="team team-bottom"
       :title="roundOneWinnersBottomWest[1]"
      >
       {{ roundOneWinnersBottomWest[1] }}
      </li>
     </ul>
     <ul class="matchup">
      <li
       @click="declareWinnerRoundTwoWest(roundOneWinnersTopWest[2], 1)"
       class="team team-top"
       :title="roundOneWinnersTopWest[2] "
      >
       {{ roundOneWinnersTopWest[2] }}
      </li>
      <li
       @click="declareWinnerRoundTwoWest(roundOneWinnersBottomWest[3], 1)"
       class="team team-bottom"
       :title="roundOneWinnersBottomWest[3]"
      >
       {{ roundOneWinnersBottomWest[3] }}
      </li>
     </ul>
     <ul class="matchup">
      <li
       @click="declareWinnerRoundTwoWest(roundOneWinnersTopWest[4], 2)"
       class="team team-top"
       :title="roundOneWinnersTopWest[4]"
      >
       {{ roundOneWinnersTopWest[4] }}
      </li>
      <li
       @click="declareWinnerRoundTwoWest(roundOneWinnersBottomWest[5], 2)"
       class="team team-bottom"
       :title="roundOneWinnersBottomWest[5]"
      >
       {{ roundOneWinnersBottomWest[5] }}
      </li>
     </ul>
     <ul class="matchup">
      <li
       @click="declareWinnerRoundTwoWest(roundOneWinnersTopWest[6], 3)"
       class="team team-top"
       :title="roundOneWinnersTopWest[6]"
      >
       {{ roundOneWinnersTopWest[6] }}
      </li>
      <li
       @click="declareWinnerRoundTwoWest(roundOneWinnersBottomWest[7], 3)"
       class="team team-bottom"
       :title="roundOneWinnersBottomWest[7]"
      >
       {{ roundOneWinnersBottomWest[7] }}
      </li>
     </ul>
    </div>
    <!-- END ROUND TWO -->

    <div class="round round-three">
     <div class="round-details">Runde 3<br /><span class="date"></span></div>
     <ul class="matchup">
      <li
       @click="declareSemiFinalsWest(roundTwoWinnersTopWest[0], 0)"
       class="team team-top"
       :title="roundTwoWinnersTopWest[0]"
      >
       {{ roundTwoWinnersTopWest[0] }}
      </li>
      <!-- west semifinals top -->
      <li
       @click="declareSemiFinalsWest(roundTwoWinnersBottomWest[1], 0)"
       class="team team-bottom"
       :title="roundTwoWinnersBottomWest[1]"
      >
       {{ roundTwoWinnersBottomWest[1] }}
      </li>
      <!-- west semifinals top -->
     </ul>
     <ul class="matchup">
      <li
       @click="declareSemiFinalsEast(roundTwoWinnersTopWest[2], 2)"
       class="team team-top"
      >
       {{ roundTwoWinnersTopWest[2] }}
      </li>
      <!-- east semifinals top -->
      <li
       @click="declareSemiFinalsEast(roundTwoWinnersBottomWest[3], 2)"
       class="team team-bottom"
       :title="roundTwoWinnersBottomWest[3]"
      >
       {{ roundTwoWinnersBottomWest[3] }}
      </li>
      <!-- east semifinals top -->
     </ul>
    </div>
    <!-- END ROUND THREE -->
   </div>

   <div class="champion">
    <div class="semis-l">
     <div class="round-details">
      1. Halbfinale <br /><span class="date"></span>
     </div>
     <ul class="matchup championship">
      <li
       @click="declareFinalists(semiFinalsWestTop[0], 0)"
       class="team team-top"
       :title="semiFinalsWestTop[0]"
      >
       {{ semiFinalsWestTop[0] }}
      </li>
      <li
       @click="declareFinalists(semiFinalsWestBottom[1], 0)"
       class="team team-bottom"
       :title="semiFinalsWestBottom[1] "
      >
       {{ semiFinalsWestBottom[1] }}
      </li>
     </ul>
    </div>
    <div class="final">
     <i class="fa fa-trophy"></i>
     <div class="round-details">Finale <br /><span class="date"></span></div>
     <ul class="matchup championship">
      <li @click="declareChampion(finalistTop[0], 0)" class="team team-top" :title="finalistTop[0]">
       {{ finalistTop[0] }}
      </li>
      <li
       @click="declareChampion(finalistBottom[1], 1)"
       class="team team-bottom"
       :title="finalistBottom[1]"
      >
       {{ finalistBottom[1] }}
      </li>
     </ul>
    </div>
    <div class="semis-r">
     <div class="round-details">
      2. Halbfinale <br /><span class="date"></span>
     </div>
     <ul class="matchup championship">
      <li
       @click="declareFinalists(semiFinalsEastTop[2], 1)"
       class="team team-top"
       :title="semiFinalsEastTop[2]"
      >
       {{ semiFinalsEastTop[2] }}
      </li>
      <li
       @click="declareFinalists(semiFinalsEastBottom[3], 1)"
       class="team team-bottom"
       :title="semiFinalsEastBottom[3]"
      >
       {{ semiFinalsEastBottom[3] }}
      </li>
     </ul>
    </div>
   </div>

   <div class="split split-two">
    <div class="round round-three">
     <div class="round-details">Runde 3<br /><span class="date"></span></div>
     <ul class="matchup">
      <li
       @click="declareSemiFinalsWest(roundTwoWinnersTopEast[0], 1)"
       class="team team-top"
       :title="roundTwoWinnersTopEast[0] "
      >
       {{ roundTwoWinnersTopEast[0] }}
      </li>
      <!-- west semifinals bottom -->
      <li
       @click="declareSemiFinalsWest(roundTwoWinnersBottomEast[1], 1)"
       class="team team-bottom"
       :title="roundTwoWinnersBottomEast[1]"
      >
       {{ roundTwoWinnersBottomEast[1] }}
      </li>
      <!-- west semifinals bottom -->
     </ul>
     <ul class="matchup">
      <li
       @click="declareSemiFinalsEast(roundTwoWinnersTopEast[2], 3)"
       class="team team-top"
       :title="roundTwoWinnersTopEast[2]"
      >
       {{ roundTwoWinnersTopEast[2] }}
      </li>
      <!-- east semifinals bottom -->
      <li
       @click="declareSemiFinalsEast(roundTwoWinnersBottomEast[3], 3)"
       class="team team-bottom"
       :title="roundTwoWinnersBottomEast[3]"
      >
       {{ roundTwoWinnersBottomEast[3] }}
      </li>
      <!-- east semifinals bottom -->
     </ul>
    </div>
    <!-- END ROUND THREE -->

    <div class="round round-two">
     <div class="round-details">Runde 2<br /><span class="date"></span></div>
     <ul class="matchup">
      <li
       @click="declareWinnerRoundTwoEast(roundOneWinnersTopEast[0], 0)"
       class="team team-top"
       :title="roundOneWinnersTopEast[0]"
      >
       {{ roundOneWinnersTopEast[0] }}
      </li>
      <li
       @click="declareWinnerRoundTwoEast(roundOneWinnersBottomEast[1], 0)"
       class="team team-bottom"
       :title="roundOneWinnersBottomEast[1] "
      >
       {{ roundOneWinnersBottomEast[1] }}
      </li>
     </ul>
     <ul class="matchup">
      <li
       @click="declareWinnerRoundTwoEast(roundOneWinnersTopEast[2], 1)"
       class="team team-top"
       :title="roundOneWinnersTopEast[2]"
      >
       {{ roundOneWinnersTopEast[2] }}
      </li>
      <li
       @click="declareWinnerRoundTwoEast(roundOneWinnersBottomEast[3], 1)"
       class="team team-bottom"
       :title="roundOneWinnersBottomEast[3] "
      >
       {{ roundOneWinnersBottomEast[3] }}
      </li>
     </ul>
     <ul class="matchup">
      <li
       @click="declareWinnerRoundTwoEast(roundOneWinnersTopEast[4], 2)"
       class="team team-top"
       :title="roundOneWinnersTopEast[4]"
      >
       {{ roundOneWinnersTopEast[4] }}
      </li>
      <li
       @click="declareWinnerRoundTwoEast(roundOneWinnersBottomEast[5], 2)"
       class="team team-bottom"
       :title="roundOneWinnersBottomEast[5] "
      >
       {{ roundOneWinnersBottomEast[5] }}
      </li>
     </ul>
     <ul class="matchup">
      <li
       @click="declareWinnerRoundTwoEast(roundOneWinnersTopEast[6], 3)"
       class="team team-top"
       :title="roundOneWinnersTopEast[6]"
      >
       {{ roundOneWinnersTopEast[6] }}
      </li>
      <li
       @click="declareWinnerRoundTwoEast(roundOneWinnersBottomEast[7], 3)"
       class="team team-bottom"
       :title="roundOneWinnersBottomEast[7]"
      >
       {{ roundOneWinnersBottomEast[7] }}
      </li>
     </ul>
    </div>
    <!-- END ROUND TWO -->
    <div class="round round-one current">
     <div class="round-details">Runde 1<br /><span class="date"></span></div>
     <ul class="matchup" v-for="(n, index) in 8" :key="index">
      <li
       @click="declareWinnerRoundOneEast(selectionBottomEast[index], index)"
       class="team-origin team team-top"
      >
      <img
        class="beer-logo"
        :src="require(`../assets/beerImages/${selectionBottomEast[index].iconFilename}`)"
        alt="beer logo"
       />
       {{ selectionBottomEast[index].name }}
      </li>
      <li
       @click="declareWinnerRoundOneEast(selectionTopEast[index], index)"
       class="team-origin team team-bottom"
      >
      <img
        class="beer-logo"
        :src="require(`../assets/beerImages/${selectionTopEast[index].iconFilename}`)"
        alt="beer logo"
       />
       {{ selectionTopEast[index].name }}
      </li>
     </ul>
    </div>
    <!-- END ROUND ONE -->
   </div>
  </div>
  <button
   v-if="isOwned"
   class="base-btn"
   type="button"
   @click="isResetModalOpen = true"
  >
   Zurücksetzen
  </button>
 </section>
</template>

<script>
import beers from "../assets/beers.json";
import { updateDoc, doc, getDoc, setDoc, onSnapshot } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
/* import { ref, getDownloadURL } from "firebase/storage"; */
import { db, auth } from "@/firebase";
import PermissionDeniedModal from "@/components/Modal/PermissionDeniedModal.vue";
import ConfirmResetModal from "@/components/Modal/ConfirmResetModal.vue";
import CloseButton from '@/components/globals/CloseButton.vue';


export default {
 name: "Tree",
 components: {
  PermissionDeniedModal,
  ConfirmResetModal,
  CloseButton,
 },
 data() {
  return {
   isInfoModalOpen: false,
   isResetModalOpen: false,
   roundOneWinnersTopWest: {},
   roundOneWinnersBottomWest: {},
   roundOneWinnersTopEast: {},
   roundOneWinnersBottomEast: {},

   roundTwoWinnersTopWest: {},
   roundTwoWinnersBottomWest: {},
   roundTwoWinnersTopEast: {},
   roundTwoWinnersBottomEast: {},

   semiFinalsWestTop: {},
   semiFinalsWestBottom: {},

   semiFinalsEastTop: {},
   semiFinalsEastBottom: {},

   finalistTop: {},
   finalistBottom: {},
   unsubscribe: null,
   userID: "",
   beerImages: {},
  };
 },
 beforeMount() {
  onAuthStateChanged(auth, (user) => {
   if (user) {
    this.userID = user.displayName;
   } else {
    this.$router.replace({ name: "Login" });
   }
  });
 },
 mounted() {
  const ref = doc(db, "Users", this.$route.params.id);
  this.unsubscribe = onSnapshot(ref, (doc) => {
   if (doc.exists()) {
    const keys = Object.keys(doc.data());
    for (let key of keys) {
     this[key] = doc.data()[key];
    }
   }
  });
 },
 beforeUnmount() {
  this.unsubscribe();
 },
 computed: {
  // All available beer brands
  competitors() {
   return JSON.parse(JSON.stringify(beers));
  },
  // a filtered list of all beer brands that are displayed in the top tier of the west bracket
  selectionTopWest() {
   return this.competitors.filter(
    (beer, index) => index % 2 !== 0 && index < 16
   );
  },
  // a filtered list of all beer brands that are displayed in the bottom tier of the west bracket
  selectionBottomWest() {
   return this.competitors.filter(
    (beer, index) => index % 2 === 0 && index < 16
   );
  },
  // a filtered list of all beer brands that are displayed in the top tier of the east bracket
  selectionTopEast() {
   return this.competitors.filter(
    (beer, index) => index % 2 !== 0 && index > 16
   );
  },
  // a filtered list of all beer brands that are displayed in the top tier of the east bracket
  selectionBottomEast() {
   return this.competitors.filter(
    (beer, index) => index % 2 === 0 && index >= 16
   );
  },
  isOwned() {
   return this.userID === this.$route.params.id;
  },
 },
 methods: {
  async setDocument(username, documentId, document) {
   const docRef = doc(db, "Users", username);
   const docSnap = await getDoc(docRef);
   if (docSnap.exists()) {
    try {
     await updateDoc(docRef, { [documentId]: document });
    } catch (error) {
     console.log(error);
    }
   } else {
    await setDoc(docRef, { [documentId]: document });
   }
  },
  async resetDatabase(username) {
   this.isResetModalOpen = false;
   console.log("resetting...");
   const data = await getDoc(doc(db, "Users", username));
   const keys = Object.keys(data.data());
   for (let key of keys) {
    await updateDoc(doc(db, "Users", username), { [key]: {} });
   }
  },
  async declareWinnerRoundOneWest(beer, index) {
   if (this.isOwned && beer) {
    if (index % 2 === 0) {
     this.roundOneWinnersTopWest = {
      ...this.roundOneWinnersTopWest,
      [index]: beer.name,
     };
     this.setDocument(
      this.$route.params.id,
      "roundOneWinnersTopWest",
      this.roundOneWinnersTopWest
     );
    } else {
     this.roundOneWinnersBottomWest = {
      ...this.roundOneWinnersBottomWest,
      [index]: beer.name,
     };
     this.setDocument(
      this.$route.params.id,
      "roundOneWinnersBottomWest",
      this.roundOneWinnersBottomWest
     );
    }
   } else {
    this.isInfoModalOpen = true;
   }
  },
  async declareWinnerRoundOneEast(beer, index) {
   if (this.isOwned && beer) {
    if (index % 2 === 0) {
     this.roundOneWinnersTopEast = {
      ...this.roundOneWinnersTopEast,
      [index]: beer.name,
     };
     this.setDocument(
      this.$route.params.id,
      "roundOneWinnersTopEast",
      this.roundOneWinnersTopEast
     );
    } else {
     this.roundOneWinnersBottomEast = {
      ...this.roundOneWinnersBottomEast,
      [index]: beer.name,
     };
     this.setDocument(
      this.$route.params.id,
      "roundOneWinnersBottomEast",
      this.roundOneWinnersBottomEast
     );
    }
   } else {
    this.isInfoModalOpen = true;
   }
  },
  async declareWinnerRoundTwoEast(beer, index) {
   if (this.isOwned && beer) {
    if (index % 2 === 0) {
     this.roundTwoWinnersTopEast = {
      ...this.roundTwoWinnersTopEast,
      [index]: beer,
     };
     this.setDocument(
      this.$route.params.id,
      "roundTwoWinnersTopEast",
      this.roundTwoWinnersTopEast
     );
    } else {
     this.roundTwoWinnersBottomEast = {
      ...this.roundTwoWinnersBottomEast,
      [index]: beer,
     };
     this.setDocument(
      this.$route.params.id,
      "roundTwoWinnersBottomEast",
      this.roundTwoWinnersBottomEast
     );
    }
   } else {
    this.isInfoModalOpen = true;
   }
  },
  async declareWinnerRoundTwoWest(beer, index) {
   if (this.isOwned && beer) {
    if (index % 2 === 0) {
     this.roundTwoWinnersTopWest = {
      ...this.roundTwoWinnersTopWest,
      [index]: beer,
     };
     this.setDocument(
      this.$route.params.id,
      "roundTwoWinnersTopWest",
      this.roundTwoWinnersTopWest
     );
    } else {
     this.roundTwoWinnersBottomWest = {
      ...this.roundTwoWinnersBottomWest,
      [index]: beer,
     };
     this.setDocument(
      this.$route.params.id,
      "roundTwoWinnersBottomWest",
      this.roundTwoWinnersBottomWest
     );
    }
   } else {
    this.isInfoModalOpen = true;
   }
  },
  async declareSemiFinalsWest(beer, index) {
   if (this.isOwned && beer) {
    if (index % 2 === 0) {
     this.semiFinalsWestTop = { ...this.semiFinalsWestTop, [index]: beer };
     this.setDocument(
      this.$route.params.id,
      "semiFinalsWestTop",
      this.semiFinalsWestTop
     );
    } else {
     this.semiFinalsWestBottom = {
      ...this.semiFinalsWestBottom,
      [index]: beer,
     };
     this.setDocument(
      this.$route.params.id,
      "semiFinalsWestBottom",
      this.semiFinalsWestBottom
     );
    }
   } else {
    this.isInfoModalOpen = true;
   }
  },
  async declareSemiFinalsEast(beer, index) {
   if (this.isOwned && beer) {
    if (index % 2 === 0) {
     this.semiFinalsEastTop = { ...this.semiFinalsEastTop, [index]: beer };
     this.setDocument(
      this.$route.params.id,
      "semiFinalsEastTop",
      this.semiFinalsEastTop
     );
    } else {
     this.semiFinalsEastBottom = {
      ...this.semiFinalsEastBottom,
      [index]: beer,
     };
     this.setDocument(
      this.$route.params.id,
      "semiFinalsEastBottom",
      this.semiFinalsEastBottom
     );
    }
   } else {
    this.isInfoModalOpen = true;
   }
  },
  async declareFinalists(beer, index) {
   if (this.isOwned && beer) {
    if (index % 2 === 0) {
     this.finalistTop = { ...this.finalistTop, [index]: beer };
     this.setDocument(this.$route.params.id, "finalistTop", this.finalistTop);
    } else {
     this.finalistBottom = { ...this.finalistBottom, [index]: beer };
     this.setDocument(
      this.$route.params.id,
      "finalistBottom",
      this.finalistBottom
     );
    }
   } else {
    this.isInfoModalOpen = true;
   }
  },
  declareChampion(beer) {
   if (this.isOwned && beer) {
    window.alert(beer + " hat gewonnen!");
   } else {
    this.isInfoModalOpen = true;
   }
  },
  closeInfoModal() {
   this.isInfoModalOpen = false;
  },
  closeResetInfoModal() {
   this.isResetModalOpen = false;
  },
  async deleteSingleBeer(beer, documentId) {
    if (this.isOwned && beer) {
      await updateDoc(doc(db, "Users", this.$route.params.id), { [documentId]: {} });
    }
  },
 },
};
</script>

<style scoped>
#bracket {
 overflow: hidden;
 font-size: 0.75rem;
 padding: 4rem 0;
}
.container {
 max-width: 95%;
 margin: 0 auto;
 display: flex;
 flex-direction: row;
}
.split {
 float: left;
 display: flex;
 width: 42%;
 flex-direction: row;
}
.champion {
 float: left;
 display: block;
 width: 16%;
 flex-direction: row;
 align-self: center;
 margin-top: -15px;
 text-align: center;
 padding: 230px 0\9;
}
.round {
 float: left;
 display: flex;
 flex-direction: column;
 width: 95%;
 width: 30.8333%\9;
}
.split-one .round {
 margin: 0 2.5% 0 0;
}
.split-two .round {
 margin: 0 0 0 2.5%;
}
.matchup {
 margin: 0;
 width: 100%;
 padding: 10px 0;
 height: 60px;
 transition: all 0.2s;
}
.team-origin {
 display: flex;
 flex-direction: row;
 align-items: center;
}
.team {
 display: flex;
 align-content: center;
 padding: 0 5px;
 margin: 3px 0;
 height: 25px;
 line-height: 25px;
 position: relative;
 cursor: pointer;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
}

.beername {
  white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
}

.round-two, .round-three {
 min-width: 0;
}

.round-two .matchup {
 margin: 0;
 height: 60px;
 padding: 50px 0;
}

.round-three .matchup {
 margin: 0;
 height: 60px;
 padding: 130px 0;
}
.round-details {
 font-family: "Roboto Condensed", sans-serif;
 font-size: 1rem;
 color: #2c7399;
 text-transform: uppercase;
 text-align: center;
 height: 40px;
}

li.team {
 background-color: #fff;
 box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}
.final {
 margin: 4.5em 0;
}
.base-btn {
 padding: 0.5rem 1rem;
 border-radius: 5px;
 border: none;
 background: #fbba00;
 color: white;
 font-size: 1.5rem;
 cursor: pointer;
 box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
 transition: 0.2s ease-in-out;
}
.base-btn:hover {
 transform: scale(1.05);
}

.beer-logo {
 width: 25px;
 height: 25px;
 object-fit: contain;
 padding-right: 1rem;
}

@media screen and (min-width: 981px) and (max-width: 1099px) {
 .container {
  margin: 0 1%;
 }
 .champion {
  width: 14%;
 }
 .split {
  width: 43%;
 }
 .split-one .vote-box {
  margin-left: 138px;
 }
 .round {
  width: 95%;
  max-width: none;
 }

}

@media screen and (max-width: 980px) {
 .container {
  flex-direction: column;
 }
 .split,
 .champion {
  width: 90%;
  margin: 35px 5%;
 }
 .champion {
  order: 3;
 }
 .split {
  border-bottom: 1px solid #b6b6b6;
  padding-bottom: 20px;
 }
}

@media screen and (max-width: 400px) {
 .split {
  width: 95%;
  margin: 25px 2.5%;
 }
 .round {
  width: 21%;
  max-width: none;
 }
 .current {
  flex-grow: 1;
 }
}
</style>
