import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { auth } from './firebase';

let app;

auth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App)
            .use(router)
            .mount('#app')
    }
})
