<template>
    <div class="flex-container">
        <div v-for="user, index in users" :key="index">
            <RouterLink v-if="user != currentUser" :to="{ name: 'UserTree', params: { id: user || 'no_ID' } }">
                {{user}}
            </RouterLink>
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

.flex-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

</style>