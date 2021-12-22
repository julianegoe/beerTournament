<template>
    <div class="header">
        <div class="header__left">
        <a v-if="isLoggedIn" @click="$router.push({name: 'Overview'})">
            Alle Turnierbäume
        </a>
        <a v-if="isLoggedIn"
        @click="$router.push({ name: 'Home', params: { id: userID || 'no_ID' } })">
        Mein Turnierbaum
        </a>
        </div>
        <div class="header__right">
            <a v-if="isLoggedIn" @click.prevent="signOut">
                Ausloggen
            </a>
        </div>
    </div>
</template>

<script>
import { signOut, onAuthStateChanged } from 'firebase/auth';
import {auth} from '@/firebase';

    export default {
        name: 'Header',
        data() {
            return {
                isLoggedIn: false,
                userID: '',
            }
        },
        methods: {
            async signOut() {
                try {
                    await signOut(auth);
                } catch (error) {
                    console.log(error);
                } 
            }
        },
        mounted() {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    this.userID = user.displayName;
                    this.isLoggedIn = true;
                } else {
                    this.isLoggedIn = false;
                    this.$router.replace({name: 'Login'})
                }
            }); 
        }
    }
</script>

<style scoped>
.header {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 900;
    width: 100%;
    background: #3dabb6;
    display: flex;
    justify-content: space-between;
    align-items: center;

}
.header__left {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
}

.header__left > a {
        padding-right: 1rem;
        color: white;
        font-weight: bold;
        cursor: pointer;

}
.header__right {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
}
.header__right > a {
        color: white;
        font-weight: bold;
        cursor: pointer;
        padding-right: 1rem;
}

@media screen and (max-width: 400px) {
    
}
</style>