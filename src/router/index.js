import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "output" */ '../views/Overview.vue'),
      },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "output" */ '../views/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "output" */ '../views/Register.vue'),
  },
  {
    path: '/tree/:id',
    name: 'Tree',
    component: () => import(/* webpackChunkName: "output" */ '../components/Tree.vue'),
    props: true,
  },
 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router