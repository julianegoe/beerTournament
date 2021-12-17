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
    name: 'Home',
    component: () => import(/* webpackChunkName: "output" */ '../views/Home.vue'),
  },
  {
    path: '/tree/:id',
    name: 'UserTree',
    component: () => import(/* webpackChunkName: "output" */ '../views/UserTree.vue'),
  },
  {
    path: '/:infotype',
    name: 'Info',
    component: () => import(/* webpackChunkName: "output" */ '../views/Info.vue'),
    props: true,
  },
 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router