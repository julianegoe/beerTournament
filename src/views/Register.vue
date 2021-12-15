<template>
    <div>
        <form @submit.prevent="registerUser">
            <div class="name">
                <input v-model="displayName" type="text" placeholder="Username" />
            </div>
            <div class="email">
                <input v-model="email" type="email" placeholder="Email" />
            </div>
            <div class="password">
                <input v-model="password" type="password" placeholder="Password" />
            </div>
            <button type="submit">Registrieren</button>
        </form>
        <div class="register-link">
            <RouterLink :to="{name: 'Login'}">Zum Login</RouterLink>
        </div>

    </div>
</template>

<script>
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '@/firebase'
    export default {
        name: 'Register',
        data() {
            return {
                email: '',
                password: '',
                displayName: '',
                auth: {},
            }
        },
        methods: {
            async registerUser() {
                try {
                    this.user = await createUserWithEmailAndPassword(auth, this.email, this.password);
                    await updateProfile(auth.currentUser, {
                    displayName: this.displayName,
                    })
                    this.$router.replace({name: 'Login'});
                } catch (error) {
                    console.log(error);
                }
            }
        },
    }
</script>

<style scoped>

.register-link {
    padding-top: 1rem;
}
</style>