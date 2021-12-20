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
  /* background: rgb(247,247,247) url("./assets/bierturnier.jpeg");
  opacity: 0.5;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: 35rem 35rem; */
}

.content::after {
  content: "";
  background: rgb(247,247,247) url("./assets/bierturnier.jpeg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: 35rem 35rem;
  opacity: 0.1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;   
}
</style>
