<template>
    <Tree />
</template>

<script>
import Tree from '@/components/Tree.vue';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from '@/firebase';

    export default {
        name: 'Overview',
        components: {
            Tree,
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