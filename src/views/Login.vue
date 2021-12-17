<template>
    <div class="login-container">
        <img class="bierturnier-logo" src="../assets/bierturnier.jpeg" />
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
                    await signInWithEmailAndPassword(auth, this.email, this.password);
                    this.isLoggedIn = true;
                    this.$router.replace({ name: 'Overview'});
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }
</script>

<style scoped>

.login-container {
    padding-bottom: 2rem;
}

.bierturnier-logo {
    aspect-ratio: 1;
    width: 40%;
    object-fit: contain;
}

input {
    width: 200px;
    padding: 1rem;
    border: none;
}

.email, .password {
    padding: 0.5rem;
}

button{
 padding: 0.5rem 1rem;
 border-radius: 5px;
 border: none;
 background: #fbba00;
 color: white;
 font-size: 1.5rem;
 cursor: pointer;
 box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

.register-link {
    padding-top: 1rem;
}

@media screen and (max-width: 980px) {
    .bierturnier-logo {
    width: 70%;
}
}
</style>