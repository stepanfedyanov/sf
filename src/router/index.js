import { createRouter, createWebHistory } from 'vue-router'
import TheIndex from '../views/TheIndex.vue'
import TheInformationPage from '../views/TheInformationPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TheIndex
    },
    {
      path: '/information',
      name: 'info',
      component: TheInformationPage
    },
  ]
})

export default router
