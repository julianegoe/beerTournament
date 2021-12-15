import { createRouter, createWebHistory } from 'vue-router'
import Overview from '../views/Overview.vue';

const routes = [
  {
    path: '/',
    name: 'Overview',
    component: Overview
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
  },
 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router