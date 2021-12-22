<template>
    <div class="round round-two">
        <div class="round-details">Runde 2<br /></div>
        <template v-for="(n, index) in 4" :key="index">
            <ul class="matchup">
            <li
            class="team team-top"
            :title="roundOneWinners[index].top || '?'"
            >
            <div @click="declareWinnerRoundTwo(roundOneWinners[index].top || '', index)" class="beername">{{ roundOneWinners[index].top || '?' }}</div>
            <CloseButton v-if="roundOneWinners[index].top" @close="deleteSingleBeer(roundOneWinners[index].top || '', `roundOneWinnersTop${this.hemisphere}`)" />
            </li>
            <li
            class="team team-bottom"
            :title="roundOneWinners[index].bottom || '?'"
            >
            <div @click="declareWinnerRoundTwo(roundOneWinners[index].bottom || '', index)" class="beername">{{ roundOneWinners[index].bottom || '?' }}</div>
            <CloseButton v-if="roundOneWinners[index].bottom " @close="deleteSingleBeer(roundOneWinners[index].bottom || '' , `roundOneWinners${this.hemisphere}`)" />
            </li>
        </ul>
        </template>
    </div>
</template>

<script>
import { updateDoc, doc, getDoc, setDoc, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase";
import CloseButton from '@/components/globals/CloseButton.vue';

    export default {
        name: 'SecondRound',
        components: {
            CloseButton
        },
        props: {
            hemisphere: {
                required: true
            },
            isOwned: {
                required: true,
                default: false
            }
        },
        data() {
            return {
                roundOneWinners: [
                    {
                        top: '',
                        bottom: '',
                    },
                    {
                        top: '',
                        bottom: '',
                    },
                    {
                        top: '',
                        bottom: '',
                    },
                    {
                        top: '',
                        bottom: '',
                    }
                ]
            }
        },
        mounted(){
            const ref = doc(db, "Users", this.$route.params.id);
            this.unsubscribe = onSnapshot(ref, (doc) => {
            if (doc.exists()) {
                const data = doc.data();
                this.roundOneWinners = data[`roundOneWinners${this.hemisphere}`]
            }
        });
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
            declareWinnerRoundTwo(beer, position, index) {
                if (this.isOwned && beer) {
                        const entry = 
                        {...this.roundTwoWinners[index], [position]: beer}
                        this.roundTwoWinners.splice(index, 1, entry)
                        this.setDocument(
                        this.$route.params.id,
                        `roundTwoWinnersTop${this.hemisphere}`,
                        this.roundTwoWinners
                        );
                } else {
                    this.$emit('open-modal')
                }
            },
            async deleteSingleBeer(beer, documentId) {
                if (this.isOwned && beer) {
                    await updateDoc(doc(db, "Users", this.$route.params.id), { [documentId]: {} });
                }
            },
        }
    }
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
 justify-content: space-between;
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