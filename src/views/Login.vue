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
        <div class="register-link">
            <RouterLink :to="{name: 'Register'}">Hier registrieren</RouterLink>
        </div>
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
                    const data = await signInWithEmailAndPassword(auth, this.email, this.password);
                    this.isLoggedIn = true;
                    this.$router.replace({ name: 'Home', params: { id: data.user.displayName || 'no_ID' } });
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }
</script>

<style scoped>

.register-link {
    padding-top: 1rem;
}
</style>