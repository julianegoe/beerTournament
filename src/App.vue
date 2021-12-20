<template>
<div class="content">
  <Header v-if="isLoggedIn" />
  <router-view/>
</div>
  <Footer />
</template>
<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from '@/firebase';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
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
  background: #f7f7f7
}

#app {
  display:flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.content {
  flex: 1 0 auto;
}
</style>
