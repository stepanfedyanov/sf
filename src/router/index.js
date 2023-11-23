import { createRouter, createWebHistory } from 'vue-router'
import TheIndex from '../views/TheIndex.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TheIndex
    },
  ]
})

export default router
