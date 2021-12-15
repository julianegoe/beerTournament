<template>
 <section id="bracket">
  <div class="container">
   <div class="split split-one">
    <div class="round round-one current">
     <div class="round-details">
      Runde 1<br /><span class="date"></span>
     </div>
     <ul
      class="matchup"
      v-for="(n, index) in 8"
      :key="index"
     >
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
     <div class="round-details">
      Runde 2<br /><span class="date"></span>
     </div>
     <ul class="matchup">
      <li @click="declareWinnerRoundTwoWest(roundOneWinnersTopWest[0], 0)" class="team team-top">{{roundOneWinnersTopWest[0]}}</li>
      <li @click="declareWinnerRoundTwoWest(roundOneWinnersBottomWest[1], 0)" class="team team-bottom">{{roundOneWinnersBottomWest[1]}}</li>
     </ul>
     <ul class="matchup">
      <li @click="declareWinnerRoundTwoWest(roundOneWinnersTopWest[2], 1)" class="team team-top">{{roundOneWinnersTopWest[2]}}</li>
      <li @click="declareWinnerRoundTwoWest(roundOneWinnersBottomWest[3], 1)" class="team team-bottom">{{roundOneWinnersBottomWest[3]}}</li>
     </ul>
     <ul class="matchup">
      <li @click="declareWinnerRoundTwoWest(roundOneWinnersTopWest[4], 2)" class="team team-top">{{roundOneWinnersTopWest[4]}}</li>
      <li @click="declareWinnerRoundTwoWest(roundOneWinnersBottomWest[5], 2)" class="team team-bottom">{{roundOneWinnersBottomWest[5]}}</li>
     </ul>
     <ul class="matchup">
      <li @click="declareWinnerRoundTwoWest(roundOneWinnersTopWest[6], 3)" class="team team-top">{{roundOneWinnersTopWest[6]}}</li>
      <li @click="declareWinnerRoundTwoWest(roundOneWinnersBottomWest[7], 3)" class="team team-bottom">{{roundOneWinnersBottomWest[7]}}</li>
     </ul>
    </div>
    <!-- END ROUND TWO -->

    <div class="round round-three">
     <div class="round-details">
      Runde 3<br /><span class="date"></span>
     </div>
     <ul class="matchup">
      <li @click="declareSemiFinalsWest(roundTwoWinnersTopWest[0], 0)"  class="team team-top">{{roundTwoWinnersTopWest[0]}}</li> <!-- west semifinals top -->
      <li @click="declareSemiFinalsWest(roundTwoWinnersBottomWest[1], 0)" class="team team-bottom">{{roundTwoWinnersBottomWest[1]}}</li> <!-- west semifinals top -->
     </ul>
     <ul class="matchup">
      <li @click="declareSemiFinalsEast(roundTwoWinnersTopWest[2], 2)"  class="team team-top">{{roundTwoWinnersTopWest[2]}}</li> <!-- east semifinals top -->
      <li @click="declareSemiFinalsEast(roundTwoWinnersBottomWest[3], 2)" class="team team-bottom">{{roundTwoWinnersBottomWest[3]}}</li> <!-- east semifinals top -->
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
      <li @click="declareFinalists(semiFinalsWestTop[0], 0)" class="team team-top">
       {{semiFinalsWestTop[0]}}
      </li>
      <li @click="declareFinalists(semiFinalsWestBottom[1], 0)" class="team team-bottom">
       {{semiFinalsWestBottom[1]}}
      </li>
     </ul>
    </div>
    <div class="final">
     <i class="fa fa-trophy"></i>
     <div class="round-details">
      Finale <br /><span class="date"></span>
     </div>
     <ul class="matchup championship">
      <li @click="declareChampion(finalistTop[0], 0)" class="team team-top">
       {{finalistTop[0]}}
      </li>
      <li @click="declareChampion(finalistBottom[1], 1)" class="team team-bottom">
      {{finalistBottom[1]}}
      </li>
     </ul>
    </div>
    <div class="semis-r">
     <div class="round-details">
      2. Halbfinale <br /><span class="date"></span>
     </div>
     <ul class="matchup championship">
      <li @click="declareFinalists(semiFinalsEastTop[2], 1)" class="team team-top">{{semiFinalsEastTop[2]}}
      </li>
      <li @click="declareFinalists(semiFinalsEastBottom[3], 1)" class="team team-bottom">{{semiFinalsEastBottom[3]}}
      </li>
     </ul>
    </div>
   </div>

   <div class="split split-two">
    <div class="round round-three">
     <div class="round-details">
      Runde 3<br /><span class="date"></span>
     </div>
     <ul class="matchup">
      <li @click="declareSemiFinalsWest(roundTwoWinnersTopEast[0], 1)" class="team team-top">{{roundTwoWinnersTopEast[0]}}</li> <!-- west semifinals bottom -->
      <li @click="declareSemiFinalsWest(roundTwoWinnersBottomEast[1], 1)" class="team team-bottom">{{roundTwoWinnersBottomEast[1]}}</li> <!-- west semifinals bottom -->
     </ul>
     <ul class="matchup">
      <li @click="declareSemiFinalsEast(roundTwoWinnersTopEast[2], 3)" class="team team-top">{{roundTwoWinnersTopEast[2]}}</li> <!-- east semifinals bottom -->
      <li @click="declareSemiFinalsEast(roundTwoWinnersBottomEast[3], 3)" class="team team-bottom">{{roundTwoWinnersBottomEast[3]}}</li> <!-- east semifinals bottom -->
     </ul>
    </div>
    <!-- END ROUND THREE -->

    <div class="round round-two">
     <div class="round-details">
      Runde 2<br /><span class="date"></span>
     </div>
     <ul class="matchup">
      <li @click="declareWinnerRoundTwoEast(roundOneWinnersTopEast[0], 0)" class="team team-top">{{roundOneWinnersTopEast[0]}}</li>
      <li @click="declareWinnerRoundTwoEast(roundOneWinnersBottomEast[1], 0)" class="team team-bottom">{{roundOneWinnersBottomEast[1]}}</li>
     </ul>
     <ul class="matchup">
      <li @click="declareWinnerRoundTwoEast(roundOneWinnersTopEast[2], 1)" class="team team-top">{{roundOneWinnersTopEast[2]}}</li>
      <li @click="declareWinnerRoundTwoEast(roundOneWinnersBottomEast[3], 1)" class="team team-bottom">{{roundOneWinnersBottomEast[3]}}</li>
     </ul>
     <ul class="matchup">
      <li @click="declareWinnerRoundTwoEast(roundOneWinnersTopEast[4], 2)" class="team team-top">{{roundOneWinnersTopEast[4]}}</li>
      <li @click="declareWinnerRoundTwoEast(roundOneWinnersBottomEast[5], 2)" class="team team-bottom">{{roundOneWinnersBottomEast[5]}}</li>
     </ul>
     <ul class="matchup">
      <li @click="declareWinnerRoundTwoEast(roundOneWinnersTopEast[6], 3)" class="team team-top">{{roundOneWinnersTopEast[6]}}</li>
      <li @click="declareWinnerRoundTwoEast(roundOneWinnersBottomEast[7], 3)" class="team team-bottom">{{roundOneWinnersBottomEast[7]}}</li>
     </ul>
    </div>
    <!-- END ROUND TWO -->
    <div class="round round-one current">
     <div class="round-details">
      Runde 1<br /><span class="date"></span>
     </div>
     <ul class="matchup" v-for="(n, index) in 8" :key="index">
      <li  @click="declareWinnerRoundOneEast(selectionBottomEast[index], index)" class="team team-top">{{ selectionBottomEast[index].name }}</li>
      <li  @click="declareWinnerRoundOneEast(selectionTopEast[index], index)" class="team team-bottom">{{ selectionTopEast[index].name }}</li>
     </ul>
    </div>
    <!-- END ROUND ONE -->
   </div>
  </div>
 </section>
 <section class="share">
  <div class="share-wrap">
   <a class="share-icon" href="https://twitter.com/_joebeason"
    ><i class="fa fa-twitter"></i
   ></a>
   <a class="share-icon" href="#"><i class="fa fa-facebook"></i></a>
   <a class="share-icon" href="#"><i class="fa fa-envelope"></i></a>
  </div>
  <button type="button" @click="addDatatoDatabase">Speichern</button>
  <button type="button" @click="resetDatabase">Zurücksetzen</button>
 </section>
</template>

<script>
import beers from "../assets/beers.json";
import { setDoc, doc, getDocs, collection } from "firebase/firestore";
import { db } from '@/firebase';

export default {
 name: "Tree",
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
  };
 },
 async beforeMount() {
    let querySnapshot = await getDocs(collection(db, "roundOneWinnersTopWest"));
    querySnapshot.forEach((doc) => {
      this.roundOneWinnersTopWest = doc.data();
    });
    querySnapshot = await getDocs(collection(db, "roundOneWinnersBottomWest"));
    querySnapshot.forEach((doc) => {
      this.roundOneWinnersBottomWest = doc.data();
    });
    querySnapshot = await getDocs(collection(db, "roundOneWinnersTopEast"));
    querySnapshot.forEach((doc) => {
      this.roundOneWinnersTopEast = doc.data();
    });
    querySnapshot = await getDocs(collection(db, "roundOneWinnersBottomEast"));
    querySnapshot.forEach((doc) => {
      this.roundOneWinnersBottomEast = doc.data();
    });
    querySnapshot = await getDocs(collection(db, "roundTwoWinnersTopWest"));
    querySnapshot.forEach((doc) => {
      this.roundTwoWinnersTopWest = doc.data();
    });
    querySnapshot = await getDocs(collection(db, "roundTwoWinnersBottomWest"));
    querySnapshot.forEach((doc) => {
      this.roundTwoWinnersBottomWest = doc.data();
    });
    querySnapshot = await getDocs(collection(db, "roundTwoWinnersTopEast"));
    querySnapshot.forEach((doc) => {
      this.roundTwoWinnersTopEast = doc.data();
    });
    querySnapshot = await getDocs(collection(db, "roundTwoWinnersBottomEast"));
    querySnapshot.forEach((doc) => {
      this.roundTwoWinnersBottomEast = doc.data();
    });
    querySnapshot = await getDocs(collection(db, "semiFinalsWestTop"));
    querySnapshot.forEach((doc) => {
      this.semiFinalsWestTop = doc.data();
    });
    querySnapshot = await getDocs(collection(db, "semiFinalsWestBottom"));
    querySnapshot.forEach((doc) => {
      this.semiFinalsWestBottom = doc.data();
    });
    querySnapshot = await getDocs(collection(db, "semiFinalsEastTop"));
    querySnapshot.forEach((doc) => {
      this.semiFinalsEastTop = doc.data();
    });
    querySnapshot = await getDocs(collection(db, "semiFinalsEastBottom"));
    querySnapshot.forEach((doc) => {
      this.semiFinalsEastBottom = doc.data();
    });
    querySnapshot = await getDocs(collection(db, "finalistTop"));
    querySnapshot.forEach((doc) => {
      this.finalistTop = doc.data();
    });
    querySnapshot = await getDocs(collection(db, "finalistBottom"));
    querySnapshot.forEach((doc) => {
      this.finalistBottom = doc.data();
    });
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
   async addDatatoDatabase() {
   console.log('saving...')
   await setDoc(doc(db, "roundOneWinnersTopWest", "0"), this.roundOneWinnersTopWest);
   await setDoc(doc(db, "roundOneWinnersBottomWest", "0"), this.roundOneWinnersBottomWest);
   await setDoc(doc(db, "roundOneWinnersTopEast", "0"), this.roundOneWinnersTopEast);
   await setDoc(doc(db, "roundOneWinnersBottomEast", "0"), this.roundOneWinnersBottomEast);
   await setDoc(doc(db, "roundTwoWinnersTopWest", "0"), this.roundTwoWinnersTopWest);
   await setDoc(doc(db, "roundTwoWinnersBottomWest", "0"), this.roundTwoWinnersBottomWest);
   await setDoc(doc(db, "roundTwoWinnersTopEast", "0"), this.roundTwoWinnersTopEast);
   await setDoc(doc(db, "roundTwoWinnersBottomEast", "0"), this.roundTwoWinnersBottomEast);
   await setDoc(doc(db, "semiFinalsWestTop", "0"), this.semiFinalsWestTop);
   await setDoc(doc(db, "semiFinalsWestBottom", "0"), this.semiFinalsWestBottom);
   await setDoc(doc(db, "semiFinalsEastTop", "0"), this.semiFinalsEastTop);
   await setDoc(doc(db, "semiFinalsEastBottom", "0"), this.semiFinalsEastBottom);
   await setDoc(doc(db, "finalistTop", "0"), this.finalistTop);
   await setDoc(doc(db, "finalistBottom", "0"), this.finalistBottom);
 },
 async resetDatabase() {
   console.log('resetting...')
   await setDoc(doc(db, "roundOneWinnersTopWest", "0"), {});
   await setDoc(doc(db, "roundOneWinnersBottomWest", "0"), {});
   await setDoc(doc(db, "roundOneWinnersTopEast", "0"),{} );
   await setDoc(doc(db, "roundOneWinnersBottomEast", "0"), {});
   await setDoc(doc(db, "roundTwoWinnersTopWest", "0"), {});
   await setDoc(doc(db, "roundTwoWinnersBottomWest", "0"), {});
   await setDoc(doc(db, "roundTwoWinnersTopEast", "0"), {});
   await setDoc(doc(db, "roundTwoWinnersBottomEast", "0"), {});
   await setDoc(doc(db, "semiFinalsWestTop", "0"), {});
   await setDoc(doc(db, "semiFinalsWestBottom", "0"), {});
   await setDoc(doc(db, "semiFinalsEastTop", "0"), {});
   await setDoc(doc(db, "semiFinalsEastBottom", "0"), {});
   await setDoc(doc(db, "finalistTop", "0"), {});
   await setDoc(doc(db, "finalistBottom", "0"),{});
   location.reload()
 },
  declareWinnerRoundOneWest(beer, index) {
    if (index % 2 === 0) {
    this.roundOneWinnersTopWest = {...this.roundOneWinnersTopWest, [index]: beer.name}
    } else {
    this.roundOneWinnersBottomWest = {...this.roundOneWinnersBottomWest, [index]: beer.name}
    }
  },
  async declareWinnerRoundOneEast(beer, index) {
    if (index % 2 === 0) {
    this.roundOneWinnersTopEast = {...this.roundOneWinnersTopEast, [index]: beer.name}
    } else {
    this.roundOneWinnersBottomEast = {...this.roundOneWinnersBottomEast, [index]: beer.name}
    }
  },
  declareWinnerRoundTwoEast(beer, index) {
    if (index % 2 === 0) {
    this.roundTwoWinnersTopEast = {...this.roundTwoWinnersTopEast, [index]: beer}
    } else {
    this.roundTwoWinnersBottomEast = {...this.roundTwoWinnersBottomEast, [index]: beer}
    }
  },
  declareWinnerRoundTwoWest(beer, index) {
    if (index % 2 === 0) {
    this.roundTwoWinnersTopWest = {...this.roundTwoWinnersTopWest, [index]: beer}
    } else {
    this.roundTwoWinnersBottomWest = {...this.roundTwoWinnersBottomWest, [index]: beer}
    }
  },
  declareSemiFinalsWest(beer, index) {
    if (index % 2 === 0) {
    this.semiFinalsWestTop = {...this.semiFinalsWestTop, [index]: beer}
    } else {
    this.semiFinalsWestBottom = {...this.semiFinalsWestBottom, [index]: beer}
    }
  },
  declareSemiFinalsEast(beer, index) {
    if (index % 2 === 0) {
    this.semiFinalsEastTop = {...this.semiFinalsEastTop, [index]: beer}
    } else {
    this.semiFinalsEastBottom = {...this.semiFinalsEastBottom, [index]: beer}
    }
  },
  declareFinalists(beer, index) {
    if (index % 2 === 0) {
    this.finalistTop = {...this.finalistTop, [index]: beer}
    } else {
    this.finalistBottom = {...this.finalistBottom, [index]: beer}
    }
  },
  declareChampion(beer) {
    window.alert(beer + ' hat gewonnen!');
  }
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
 display: block;
 display: -webkit-box;
 display: -moz-box;
 display: -ms-flexbox;
 display: -webkit-flex;
 display: -webkit-flex;
 display: flex;
 -webkit-flex-direction: row;
 flex-direction: row;
}
.split {
 display: block;
 float: left;
 display: -webkit-box;
 display: -moz-box;
 display: -ms-flexbox;
 display: -webkit-flex;
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
 -webkit-flex-direction: row;
 flex-direction: row;
 -webkit-align-self: center;
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
 display: block;
 float: left;
 display: -webkit-box;
 display: -moz-box;
 display: -ms-flexbox;
 display: -webkit-flex;
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
 -webkit-transition: all 0.2s;
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
.vote-options {
 display: block;
 height: 52px;
}
.share .container {
 margin: 0 auto;
 text-align: center;
}
.share-icon {
 font-size: 24px;
 color: #fff;
 padding: 25px;
}
.share-wrap {
 max-width: 1100px;
 text-align: center;
 margin: 60px auto;
}
.final {
 margin: 4.5em 0;
}

@-webkit-keyframes pulse {
 0% {
  -webkit-transform: scale(1);
  transform: scale(1);
 }

 50% {
  -webkit-transform: scale(1.3);
  transform: scale(1.3);
 }

 100% {
  -webkit-transform: scale(1);
  transform: scale(1);
 }
}

@keyframes pulse {
 0% {
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
 }

 50% {
  -webkit-transform: scale(1.3);
  -ms-transform: scale(1.3);
  transform: scale(1.3);
 }

 100% {
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
 }
}

.share-icon {
 color: #fff;
 opacity: 0.35;
}
.share-icon:hover {
 opacity: 1;
 -webkit-animation: pulse 0.5s;
 animation: pulse 0.5s;
}
.date {
 font-size: 10px;
 letter-spacing: 2px;
 font-family: "Istok Web", sans-serif;
 color: #3f915f;
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
  -webkit-flex-direction: column;
  -moz-flex-direction: column;
  flex-direction: column;
 }
 .split,
 .champion {
  width: 90%;
  margin: 35px 5%;
 }
 .champion {
  -webkit-box-ordinal-group: 3;
  -moz-box-ordinal-group: 3;
  -ms-flex-order: 3;
  -webkit-order: 3;
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
  -webkit-flex-grow: 1;
  -moz-flex-grow: 1;
  flex-grow: 1;
 }
 .hero h1 {
  font-size: 2.15em;
  letter-spacing: 0;
  margin: 0;
 }
 .hero p.intro {
  font-size: 1.15em;
  margin-bottom: -10px;
 }
 .round-details {
  font-size: 90%;
 }
 .hero-wrap {
  padding: 2.5em;
 }
 .hero p.year {
  margin: 5px 0 10px;
  font-size: 18px;
 }
}
</style>
