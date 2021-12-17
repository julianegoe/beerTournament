<template>
    <div class="overview-container"> 
        <div class="rules-container">
            <div class="rules-box">
                <h1>Bier Turnier 2022 - Regeln</h1>
                <p>
                    <ol>
                        <li>In der Beer Challenge 2022 soll jeder Teilnehmer die Möglichkeit haben, das, seiner Meinung nach, am besten schmeckenste Bier zu finden.
                            Der Zeitraum dafür ist das komplette Jahr 2022.
                        </li>
                        <li>Über die Website verfranzt.com/beer kann jeder Teilnehmer seinen eigenen Turnierbaum mit allen ausgewählten Biermarken pflegen. </li>
                        <li>Die Website wird von einem Login Bereich aus datenschutzrechtlichen Gründen geschützt.</li>
                        <li>Jeder Teilnehmer kann alle Turnierbäume einsehen. </li>
                        <li>Bei einer Stimmenabgabe treten immer zwei Biermarken gegeneinander an. </li>
                        <li>Zugelasene Biersorten sind: Pils, Helles, Kölsch, Schwarzbier, Kellerbier, Bockbier, Export, hefeweizen, Stout</li>
                        <li>Nicht zugelassene Biersorten sind: Craftbiere aller Art, Biermischgetränke wie Radler, Diesel etc., ALKOHOLFREIE Biere, Malzbiere, Belgische Biersorten, Cider</li>
                        <li>Die Verkostung sollte nach Möglichkeit "blind" erfolgen. Das heißt, der Teilnehmer nutzt zur Verköstigung zwei Gläser und lässt diese von einer zweiten Person austauschen.</li>
                        <li>Bis 23.12.2021 entsteht die verbindliche Auswahl aus 32 Biermarken, die für alle Teilnehmer zur Wahl stehen. </li>
                    </ol>
                </p>
            </div>
        </div>
        <div>
        <div class="user-container">
            <h2>Teilnehmerinnen und Teilnehmer</h2>
            <template v-for="user, index in users" :key="index">
                <div @click="$router.push({ name: 'UserTree', params: { id: user || 'no_ID' } })" class="user-box" :class="[user === currentUser ? 'user-box__owner' : '']">
                    {{user}}
                </div>
            </template>
            <!-- <div class="user-box">Ronald</div>
            <div class="user-box">Daniel</div>
            <div class="user-box">Janna</div> -->
        </div>
        </div>
    </div>
</template>

<script>
import { db, auth } from '@/firebase';
import { collection, getDocs } from "firebase/firestore";

    export default {
        name: 'Overview',
        components: {
        },
        data() {
            return {
                isLoggedIn: false,
                users: [],
            }
        },
        mounted() {
            this.getListOfDocs()
        },
        methods: {
            async getListOfDocs() {
                const querySnapshot = await getDocs(collection(db, "Users"));
                querySnapshot.forEach((doc) => {
                    this.users.push(doc.id)
                });
                console.log(this.users)
            }
        },
        computed: {
            currentUser() {
                return auth.currentUser.displayName
            }
        },
    }
</script>

<style scoped>

.overview-container {
    display: grid;
    grid-template-columns: 60% 40%;
}

.rules-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 4rem 2rem 2rem 2rem;
}

.rules-box {
    padding: 0 1rem 0 1rem ;
    background: white;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

h1, p {
    text-align: left;
}

.user-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.5rem;
    padding: 4rem 2rem 2rem 0;
}

h2 {
    grid-column: 1 / span 2;
    text-align: left;
}

.user-box {
    padding: 1rem;
    background: white;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    cursor: pointer;
}

.user-box__owner {
    background: #fbba00;
}

@media screen and (max-width: 980px) {
    .overview-container {
        display: flex;
        flex-direction: column;
    }
    .rules-container {
        padding: 5rem 1rem 1rem 1rem;
    }
    .user-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 0.5rem;
        padding: 1rem;
    }
}

</style>