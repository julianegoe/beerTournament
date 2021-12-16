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
import { onAuthStateChanged } from 'firebase/auth';
import { db, auth} from '@/firebase';
import { collection, getDocs } from "firebase/firestore";

    export default {
        name: 'Overview',
        components: {
        },
        data() {
            return {
                isLoggedIn: false,
                users: [],
                currentUser: '',
            }
        },
        mounted() {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    this.isLoggedIn = true;
                    this.currentUser = user.displayName;
                    this.getListOfDocs()
                } else {
                    this.isLoggedIn = false;
                    this.$router.replace({name: 'Login'})
                }
            }); 
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
    }
</script>

<style scoped>

.flex-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

</style>