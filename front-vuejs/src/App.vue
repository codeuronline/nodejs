<template>
  <div id="nav">
    <router-link to="/">Accueil</router-link> |
    <router-link to="/restaurant">Restaurant</router-link>
  </div>
</template>
<style>
</style>
<script>
import { createRouter, createWebHistory } from 'vue-router'
import Accueil from './views/Accueil.vue'
import Restaurant from './views/Restaurant.vue'
    const routes = [
       {
        path: '/',
        name: 'Accueil',
        component: Accueil,
      },
      {
        path: '/restaurant',
        name: 'Restaurant',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Restaurant
      }
    ]
    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes
    })
    export default router
</script>  