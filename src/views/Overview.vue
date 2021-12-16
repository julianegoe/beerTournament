<template>
    <div>Hier entsteht ein Überblick über alle persönlichen Turnierbäume</div>
</template>

<script>
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from '@/firebase';

    export default {
        name: 'Overview',
        components: {
        },
        data() {
            return {
                isLoggedIn: false,
            }
        },
        mounted() {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    this.isLoggedIn = true;
                } else {
                    this.isLoggedIn = false;
                    this.$router.replace({name: 'Login'})
                }
            }); 
        },
    }
</script>

<style lang="scss" scoped>

</style>