<template>
<div class="background-container">
    <div class="overview-container"> 
        <h2>Teilnehmerinnen und Teilnehmer</h2>
        <div class="user-container">
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

.background-container::after {
    content: "";
    background: rgb(247,247,247) url("../assets/bierturnier.jpeg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center bottom;
    background-size: 35rem 35rem;
    opacity: 0.1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;   
}

.overview-container {
    width: 60%;
    margin: 0 auto;
    padding-top: 4rem;
}

.user-container {
    display: flex;
    gap: 1rem;
    justify-content: flex-start;
    flex-wrap: wrap;
}

h2 {
    text-align: left;
    padding: 0 1rem;
}

.user-box {
    width: 100px;
    padding: 1rem;
    background: white;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    cursor: pointer;
    transition: 0.3s;
}

.user-box__owner {
    background: #fbba00;
}

.user-box:hover {
    transform: scale(1.05);
}

@media screen and (max-width: 980px) {
    .background-container::after {
        background-size: 20rem 20rem;
    }
    .overview-container {
        width: 100%;
    }
    .user-container {
        padding: 1rem;
        justify-content: center;
    }
}

</style>