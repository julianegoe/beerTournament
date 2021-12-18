<template>
    <div class="overview-container"> 
        <div class="user-container">
            <h2>Teilnehmerinnen und Teilnehmer</h2>
            <template v-for="user, index in users" :key="index">
                <div @click="$router.push({ name: 'UserTree', params: { id: user || 'no_ID' } })" class="user-box" :class="[user === currentUser ? 'user-box__owner' : '']">
                    {{user}}
                </div>
            </template>
            <div class="user-box">Ronald</div>
            <div class="user-box">Daniel</div>
            <div class="user-box">Janna</div>
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