<template>
        <!-- Round one -->
        <template  v-for="(n, index) in numberOfMatches" :key="index">
            <div :class="`div${index + modifier} wrapper`">
                <div :class="nextRound.includes('East') || nextRound.includes('Two') ? 'east' : ''" class="beer-box" @click="sendToNextRound(roundData[index].top, index, nextRound)">
                    <img v-if="nextRound.includes('roundTwo')"
                        class="beer-logo"
                        :src="require(`../assets/beerImages/${roundData[index].top.iconFilename}`)"
                        alt="beer logo"
                    />
                    <div class="beername">{{roundData[index].top.name || ''}}</div>
                    <CloseButton v-if="!nextRound.includes('roundTwo')"/>
                </div>
                <div :class="nextRound.includes('East') ? 'east' : ''" class="beer-box" @click="sendToNextRound(roundData[index].bottom, index, nextRound)">
                    <img v-if="nextRound.includes('roundTwo')"
                        class="beer-logo"
                        :src="require(`../assets/beerImages/${roundData[index].bottom.iconFilename}`)"
                        alt="beer logo"
                    />
                    <div class="beername">{{roundData[index].bottom.name || ''}}</div>
                    <CloseButton v-if="!nextRound.includes('roundTwo')"/>
                </div>
            </div>
        </template>
</template>

<script>
import { database} from "@/firebase";
import {ref, update } from "firebase/database";
import CloseButton from '@/components/globals/CloseButton.vue';

    export default {
        name: 'AltTree',
        components: {
            CloseButton,
        },
        props: {
            numberOfMatches: {
                type: Number,
                required: true,
            },
            nextRound: {
                type: String,
                required: true,
            },
            roundData: {
                type: Object,
                required: false,
            },
        },
        computed: {
            modifier() {
                if (this.nextRound === 'roundTwoWest') {
                    return 1
                }
                if (this.nextRound === 'roundThreeWest') {
                    return 9
                }
                if (this.nextRound === 'semiFinalsWest') {
                    return 13
                }
                if (this.nextRound === 'finale') {
                    return 29
                }
                if (this.nextRound === 'winner') {
                    return 31
                }
                if (this.nextRound === 'semiFinalsEast') {
                    return 27
                }
                if (this.nextRound === 'roundTwoEast') {
                    return 15
                }
                if (this.nextRound === 'roundThreeEast') {
                    return 23
                }
                return 0
            }
        },
        methods: {
            async sendToNextRound(beer, index, round) {
                if (index % 2 === 0) {
                    const path = `Users/${this.$route.params.id}/${round}/${Math.floor(index/2)}/top`
                    update(ref(database, path), beer);
                } else {
                    const path = `Users/${this.$route.params.id}/${round}/${Math.floor(index/2)}/bottom`
                    update(ref(database, path), beer);
                }
            },
        }
    }
</script>

<style scoped>

.beer-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    min-width: 0;
    background-color: #fff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

.east {
    flex-direction: row-reverse;
}

.beername {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 0.2rem;
}

.beer-logo {
    width: 25px;
    height: 25px;
    object-fit: contain;
    padding-right: 1rem;
}

.div1 { grid-area: 1 / 1 / 2 / 2; }
.div2 { grid-area: 3 / 1 / 4 / 2; }
.div3 { grid-area: 5 / 1 / 6 / 2; }
.div4 { grid-area: 7 / 1 / 8 / 2; }
.div5 { grid-area: 9 / 1 / 10 / 2; }
.div6 { grid-area: 11 / 1 / 12 / 2; }
.div7 { grid-area: 13 / 1 / 14 / 2; }
.div8 { grid-area: 15 / 1 / 16 / 2; }

.div9 { grid-area: 2 / 2 / 3 / 3; }
.div10 { grid-area: 6 / 2 / 7 / 3; }
.div11 { grid-area: 10 / 2 / 11 / 3; }
.div12 { grid-area: 14 / 2 / 15 / 3; }

.div13 { grid-area: 4 / 3 / 5 / 4; }
.div14 { grid-area: 12 / 3 / 13 / 4; }

.div15 { grid-area: 1 / 7 / 2 / 8; }
.div16 { grid-area: 3 / 7 / 4 / 8; }
.div17 { grid-area: 5 / 7 / 6 / 8; }
.div18 { grid-area: 7 / 7 / 8 / 8; }
.div19 { grid-area: 9 / 7 / 10 / 8; }
.div20 { grid-area: 11 / 7 / 12 / 8; }
.div21 { grid-area: 13 / 7 / 14 / 8; }
.div22 { grid-area: 15 / 7 / 16 / 8; }

.div23 { grid-area: 2 / 6 / 3 / 7; }
.div24 { grid-area: 6 / 6 / 7 / 7; }
.div25 { grid-area: 10 / 6 / 11 / 7; }
.div26 { grid-area: 14 / 6 / 15 / 7; }

.div27 { grid-area: 4 / 5 / 5 / 6; }
.div28 { grid-area: 12 / 5 / 13 / 6; }

.div29 { grid-area: 5 / 4 / 6 / 5; }
.div30 { grid-area: 11 / 4 / 12 / 5; }
.div31 { grid-area: 8 / 4 / 9 / 5; }
</style>