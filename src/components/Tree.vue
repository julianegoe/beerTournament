<template>
 <section id="bracket">
  <div class="container">
   <div class="split split-one">
    <div class="round round-one current">
     <div class="round-details">Runde 1<br /><span class="date"></span></div>
     <ul class="matchup" v-for="(n, index) in 8" :key="index">
      <li
       @click="declareWinnerRoundOneWest(selectionTopWest[index], index)"
       class="team team-top"
      >
       {{ selectionTopWest[index].name }}
      </li>
      <li
       @click="declareWinnerRoundOneWest(selectionBottomWest[index], index)"
       class="team team-bottom"
      >
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
      >
       {{ roundOneWinnersTopWest[0] }}
      </li>
      <li
       @click="declareWinnerRoundTwoWest(roundOneWinnersBottomWest[1], 0)"
       class="team team-bottom"
      >
       {{ roundOneWinnersBottomWest[1] }}
      </li>
     </ul>
     <ul class="matchup">
      <li
       @click="declareWinnerRoundTwoWest(roundOneWinnersTopWest[2], 1)"
       class="team team-top"
      >
       {{ roundOneWinnersTopWest[2] }}
      </li>
      <li
       @click="declareWinnerRoundTwoWest(roundOneWinnersBottomWest[3], 1)"
       class="team team-bottom"
      >
       {{ roundOneWinnersBottomWest[3] }}
      </li>
     </ul>
     <ul class="matchup">
      <li
       @click="declareWinnerRoundTwoWest(roundOneWinnersTopWest[4], 2)"
       class="team team-top"
      >
       {{ roundOneWinnersTopWest[4] }}
      </li>
      <li
       @click="declareWinnerRoundTwoWest(roundOneWinnersBottomWest[5], 2)"
       class="team team-bottom"
      >
       {{ roundOneWinnersBottomWest[5] }}
      </li>
     </ul>
     <ul class="matchup">
      <li
       @click="declareWinnerRoundTwoWest(roundOneWinnersTopWest[6], 3)"
       class="team team-top"
      >
       {{ roundOneWinnersTopWest[6] }}
      </li>
      <li
       @click="declareWinnerRoundTwoWest(roundOneWinnersBottomWest[7], 3)"
       class="team team-bottom"
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
      >
       {{ roundTwoWinnersTopWest[0] }}
      </li>
      <!-- west semifinals top -->
      <li
       @click="declareSemiFinalsWest(roundTwoWinnersBottomWest[1], 0)"
       class="team team-bottom"
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
      >
       {{ semiFinalsWestTop[0] }}
      </li>
      <li
       @click="declareFinalists(semiFinalsWestBottom[1], 0)"
       class="team team-bottom"
      >
       {{ semiFinalsWestBottom[1] }}
      </li>
     </ul>
    </div>
    <div class="final">
     <i class="fa fa-trophy"></i>
     <div class="round-details">Finale <br /><span class="date"></span></div>
     <ul class="matchup championship">
      <li @click="declareChampion(finalistTop[0], 0)" class="team team-top">
       {{ finalistTop[0] }}
      </li>
      <li
       @click="declareChampion(finalistBottom[1], 1)"
       class="team team-bottom"
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
      >
       {{ semiFinalsEastTop[2] }}
      </li>
      <li
       @click="declareFinalists(semiFinalsEastBottom[3], 1)"
       class="team team-bottom"
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
      >
       {{ roundTwoWinnersTopEast[0] }}
      </li>
      <!-- west semifinals bottom -->
      <li
       @click="declareSemiFinalsWest(roundTwoWinnersBottomEast[1], 1)"
       class="team team-bottom"
      >
       {{ roundTwoWinnersBottomEast[1] }}
      </li>
      <!-- west semifinals bottom -->
     </ul>
     <ul class="matchup">
      <li
       @click="declareSemiFinalsEast(roundTwoWinnersTopEast[2], 3)"
       class="team team-top"
      >
       {{ roundTwoWinnersTopEast[2] }}
      </li>
      <!-- east semifinals bottom -->
      <li
       @click="declareSemiFinalsEast(roundTwoWinnersBottomEast[3], 3)"
       class="team team-bottom"
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
      >
       {{ roundOneWinnersTopEast[0] }}
      </li>
      <li
       @click="declareWinnerRoundTwoEast(roundOneWinnersBottomEast[1], 0)"
       class="team team-bottom"
      >
       {{ roundOneWinnersBottomEast[1] }}
      </li>
     </ul>
     <ul class="matchup">
      <li
       @click="declareWinnerRoundTwoEast(roundOneWinnersTopEast[2], 1)"
       class="team team-top"
      >
       {{ roundOneWinnersTopEast[2] }}
      </li>
      <li
       @click="declareWinnerRoundTwoEast(roundOneWinnersBottomEast[3], 1)"
       class="team team-bottom"
      >
       {{ roundOneWinnersBottomEast[3] }}
      </li>
     </ul>
     <ul class="matchup">
      <li
       @click="declareWinnerRoundTwoEast(roundOneWinnersTopEast[4], 2)"
       class="team team-top"
      >
       {{ roundOneWinnersTopEast[4] }}
      </li>
      <li
       @click="declareWinnerRoundTwoEast(roundOneWinnersBottomEast[5], 2)"
       class="team team-bottom"
      >
       {{ roundOneWinnersBottomEast[5] }}
      </li>
     </ul>
     <ul class="matchup">
      <li
       @click="declareWinnerRoundTwoEast(roundOneWinnersTopEast[6], 3)"
       class="team team-top"
      >
       {{ roundOneWinnersTopEast[6] }}
      </li>
      <li
       @click="declareWinnerRoundTwoEast(roundOneWinnersBottomEast[7], 3)"
       class="team team-bottom"
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
       class="team team-top"
      >
       {{ selectionBottomEast[index].name }}
      </li>
      <li
       @click="declareWinnerRoundOneEast(selectionTopEast[index], index)"
       class="team team-bottom"
      >
       {{ selectionTopEast[index].name }}
      </li>
     </ul>
    </div>
    <!-- END ROUND ONE -->
   </div>
  </div>
  <button class="base-btn" type="button" @click="resetDatabase">
   Zurücksetzen
  </button>
 </section>
</template>

<script>
import beers from "../assets/beers.json";
import {
 setDoc,
 doc,
 getDocs,
 collection,
 deleteDoc,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "@/firebase";

export default {
 name: "Tree",
 props: {
  owned: {
   default: true,
  },
  owner: {
   required: false,
  },
 },
 data() {
  return {
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
   displayName: "",
  };
 },
 beforeMount() {
  if (this.owned) {
   onAuthStateChanged(auth, async (user) => {
    if (user) {
     this.displayName = user.displayName;
     let querySnapshot = await getDocs(collection(db, this.displayName));
     querySnapshot.forEach((doc) => {
      this[doc.id] = doc.data();
     });
    } else {
     this.$router.replace({ name: "Login" });
    }
   });
  } else {
   this.displayName = this.owner;
  }
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
 },
 methods: {
  async setDocument(username, documentId, document) {
   const data = await setDoc(doc(db, username, documentId), document);
   console.log(data);
  },
  async resetDatabase() {
   console.log("resetting...");
   await deleteDoc(doc(db, this.displayName, "roundOneWinnersTopWest"));
   await deleteDoc(doc(db, this.displayName, "roundOneWinnersBottomWest"));
   await deleteDoc(doc(db, this.displayName, "roundOneWinnersTopEast"));
   await deleteDoc(doc(db, this.displayName, "roundOneWinnersBottomEast"));
   await deleteDoc(doc(db, this.displayName, "roundTwoWinnersTopWest"));
   await deleteDoc(doc(db, this.displayName, "roundTwoWinnersBottomWest"));
   await deleteDoc(doc(db, this.displayName, "roundTwoWinnersTopEast"));
   await deleteDoc(doc(db, this.displayName, "roundTwoWinnersBottomEast"));
   await deleteDoc(doc(db, this.displayName, "semiFinalsWestTop"));
   await deleteDoc(doc(db, this.displayName, "semiFinalsWestBottom"));
   await deleteDoc(doc(db, this.displayName, "semiFinalsEastTop"));
   await deleteDoc(doc(db, this.displayName, "semiFinalsEastBottom"));
   await deleteDoc(doc(db, this.displayName, "finalistTop"));
   await deleteDoc(doc(db, this.displayName, "finalistBottom"));
   location.reload();
  },
  async declareWinnerRoundOneWest(beer, index) {
    if(this.owned) {
      if (index % 2 === 0) {
    this.roundOneWinnersTopWest = {
     ...this.roundOneWinnersTopWest,
     [index]: beer.name,
    };
    this.setDocument(
     this.displayName,
     "roundOneWinnersTopWest",
     this.roundOneWinnersTopWest
    );
   } else {
    this.roundOneWinnersBottomWest = {
     ...this.roundOneWinnersBottomWest,
     [index]: beer.name,
    };
    this.setDocument(
     this.displayName,
     "roundOneWinnersBottomWest",
     this.roundOneWinnersBottomWest
    );
   }
    } else {
      window.alert("you're not allowed to edit this")
    }
  },
  async declareWinnerRoundOneEast(beer, index) {
    if (this.owned) {
      if (index % 2 === 0) {
    this.roundOneWinnersTopEast = {
     ...this.roundOneWinnersTopEast,
     [index]: beer.name,
    };
    this.setDocument(
     this.displayName,
     "roundOneWinnersTopEast",
     this.roundOneWinnersTopEast
    );
   } else {
    this.roundOneWinnersBottomEast = {
     ...this.roundOneWinnersBottomEast,
     [index]: beer.name,
    };
    this.setDocument(
     this.displayName,
     "roundOneWinnersBottomEast",
     this.roundOneWinnersBottomEast
    );
   }
    } else {
      window.alert("you're not allowed to edit this")
    }
  },
  async declareWinnerRoundTwoEast(beer, index) {
   if (index % 2 === 0) {
    this.roundTwoWinnersTopEast = {
     ...this.roundTwoWinnersTopEast,
     [index]: beer,
    };
    this.setDocument(
     this.displayName,
     "roundTwoWinnersTopEast",
     this.roundTwoWinnersTopEast
    );
   } else {
    this.roundTwoWinnersBottomEast = {
     ...this.roundTwoWinnersBottomEast,
     [index]: beer,
    };
    this.setDocument(
     this.displayName,
     "roundTwoWinnersBottomEast",
     this.roundTwoWinnersBottomEast
    );
   }
  },
  async declareWinnerRoundTwoWest(beer, index) {
   if (index % 2 === 0) {
    this.roundTwoWinnersTopWest = {
     ...this.roundTwoWinnersTopWest,
     [index]: beer,
    };
    this.setDocument(
     this.displayName,
     "roundTwoWinnersTopWest",
     this.roundTwoWinnersTopWest
    );
   } else {
    this.roundTwoWinnersBottomWest = {
     ...this.roundTwoWinnersBottomWest,
     [index]: beer,
    };
    this.setDocument(
     this.displayName,
     "roundTwoWinnersBottomWest",
     this.roundTwoWinnersBottomWest
    );
   }
  },
  async declareSemiFinalsWest(beer, index) {
   if (index % 2 === 0) {
    this.semiFinalsWestTop = { ...this.semiFinalsWestTop, [index]: beer };
    this.setDocument(
     this.displayName,
     "semiFinalsWestTop",
     this.semiFinalsWestTop
    );
   } else {
    this.semiFinalsWestBottom = { ...this.semiFinalsWestBottom, [index]: beer };
    this.setDocument(
     this.displayName,
     "semiFinalsWestBottom",
     this.semiFinalsWestBottom
    );
   }
  },
  async declareSemiFinalsEast(beer, index) {
   if (index % 2 === 0) {
    this.semiFinalsEastTop = { ...this.semiFinalsEastTop, [index]: beer };
    this.setDocument(
     this.displayName,
     "semiFinalsEastTop",
     this.semiFinalsEastTop
    );
   } else {
    this.semiFinalsEastBottom = { ...this.semiFinalsEastBottom, [index]: beer };
    this.setDocument(
     this.displayName,
     "semiFinalsEastBottom",
     this.semiFinalsEastBottom
    );
   }
  },
  async declareFinalists(beer, index) {
   if (index % 2 === 0) {
    this.finalistTop = { ...this.finalistTop, [index]: beer };
    this.setDocument(this.displayName, "finalistTop", this.finalistTop);
   } else {
    this.finalistBottom = { ...this.finalistBottom, [index]: beer };
    this.setDocument(this.displayName, "finalistBottom", this.finalistBottom);
   }
  },
  declareChampion(beer) {
   window.alert(beer + " hat gewonnen!");
  },
 },
};
</script>

<style scoped>
body {
 font-family: "Istok Web", sans-serif;
 background: url("http://picjumbo.com/wp-content/uploads/HNCK2189-1300x866.jpg")
  no-repeat #000;
 background-size: cover;
 min-height: 100%;
 margin: 0;
}
.hero {
 position: relative;
 text-align: center;
 overflow: hidden;
 color: #fcfcfc;
}
.hero h1 {
 font-family: "Holtwood One SC", serif;
 font-weight: normal;
 font-size: 5.4em;
 margin: 0 0 20px;
 text-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
 text-transform: uppercase;
 letter-spacing: -1px;
}
.hero p {
 font-family: "Abel", sans-serif;
 text-transform: uppercase;
 color: #5cca87;
 letter-spacing: 6px;
 text-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
 font-size: 1.2em;
}
.hero-wrap {
 padding: 3.5em 10px;
}
.hero p.intro {
 font-family: "Holtwood One SC", serif;
 text-transform: uppercase;
 letter-spacing: 1px;
 font-size: 3em;
 margin-bottom: -40px;
}
.hero p.year {
 color: #fff;
 letter-spacing: 20px;
 font-size: 34px;
 margin: -25px 0 25px;
}
.hero p.year i {
 font-size: 14px;
 vertical-align: middle;
}
#bracket {
 overflow: hidden;
 background-color: #e1e1e1;
 background-color: rgba(225, 225, 225, 0.9);
 padding-top: 20px;
 font-size: 12px;
 padding: 40px 0;
}
.container {
 max-width: 1100px;
 margin: 0 auto;
 display: flex;
 -webkit-flex-direction: row;
 flex-direction: row;
}
.split {
 float: left;
 display: flex;
 width: 42%;
 -webkit-flex-direction: row;
 -moz-flex-direction: row;
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
.champion i {
 color: #a0a6a8;
 font-size: 45px;
 padding: 10px 0;
}
.round {
 float: left;
 display: flex;
 -webkit-flex-direction: column;
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
.score {
 font-size: 11px;
 text-transform: uppercase;
 float: right;
 color: #2c7399;
 font-weight: bold;
 font-family: "Roboto Condensed", sans-serif;
 position: absolute;
 right: 5px;
}
.team {
 padding: 0 5px;
 margin: 3px 0;
 height: 25px;
 line-height: 25px;
 white-space: nowrap;
 overflow: hidden;
 position: relative;
 cursor: pointer;
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
 font-size: 13px;
 color: #2c7399;
 text-transform: uppercase;
 text-align: center;
 height: 40px;
}
.champion li,
.round li {
 background-color: #fff;
 box-shadow: none;
 opacity: 0.45;
}
.current li {
 opacity: 1;
}
.current li.team {
 background-color: #fff;
 box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
 opacity: 1;
}
.final {
 margin: 4.5em 0;
}
.date {
 font-size: 10px;
 letter-spacing: 2px;
 font-family: "Istok Web", sans-serif;
 color: #3f915f;
}
.base-btn {
 color: white;
 padding: 1rem;
 margin: 0.5rem;
 border: none;
 background: #3f915f;
 font-size: 1.5rem;
 cursor: pointer;
}
.base-btn:hover {
 background: #225535;
}
.base-btn:active {
 background: #225535;
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
 .hero p.intro {
  font-size: 28px;
 }
 .hero p.year {
  margin: 5px 0 10px;
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
 .hero p.intro {
  font-size: 24px;
 }
 .hero h1 {
  font-size: 3em;
  margin: 15px 0;
 }
 .hero p {
  font-size: 1em;
 }
}

@media screen and (max-width: 400px) {
 .split {
  width: 95%;
  margin: 25px 2.5%;
 }
 .round {
  width: 21%;
 }
 .current {
  flex-grow: 1;
 }
}
</style>
