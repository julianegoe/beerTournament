<template>
  <Header :owned="false" owner="Franz" v-if="isLoggedIn" />
  <router-view/>
</template>
<script>
import Header from '@/components/Header.vue';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from '@/firebase';

export default {
  name: 'App',
  components: {
    Header,
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
<style>

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f1f1f1;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
