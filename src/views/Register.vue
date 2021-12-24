<template>
    <div class="register-container">
        <img class="bierturnier-logo" src="../assets/bierturnier.jpeg" />
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
import {ref, set} from "firebase/database";
import { auth, database } from '@/firebase';
import emptyTree from '@/model/model.js';

    export default {
        name: 'Register',
        data() {
            return {
                email: '',
                password: '',
                displayName: '',
                user: null,
            }
        },
        methods: {
            async registerUser() {
                try {
                    this.user = await createUserWithEmailAndPassword(auth, this.email, this.password);
                    await updateProfile(auth.currentUser, {
                    displayName: this.displayName,
                    })
                    console.log(this.user);
                    this.createTree();
                    this.$router.replace({name: 'Login'});
                } catch (error) {
                    if (error.code === 'auth/email-already-in-use') {
                        window.alert('Diese E-Mail wird schon verwendet. Registriere dich mit einer anderen.')
                    } else {
                        window.alert('Es ist ein Fehler aufgetreten: ', error.code)
                    }
                }
            },
            createTree() {
                set(ref(database, 'Users/' + this.displayName), emptyTree);
            },
        },
    }
</script>

<style scoped>

.register-container {
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

.name, .email, .password {
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