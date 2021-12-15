<template>
    <div>
        <form @submit.prevent="loginUser">
            <div class="email">
                <input v-model="email" type="email" placeholder="Email" />
            </div>
            <div class="password">
                <input v-model="password" type="password" placeholder="Password" />
            </div>
            <button type="submit">Log In</button>

        </form>
        <a href="/register">Hier rgistrieren</a>

    </div>
</template>

<script>
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/firebase'
    export default {
        name: 'Login',
        data() {
            return {
                email: '',
                password: '',
                isLoggedIn: false,
            }
        },
        methods: {
            async loginUser() {
                try {
                    await signInWithEmailAndPassword(auth, this.email, this.password);
                    this.isLoggedIn = true;
                    this.$router.replace({name: 'Overview'});
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }
</script>

<style scoped>
</style>