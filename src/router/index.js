import { createRouter, createWebHistory } from 'vue-router'
import TheIndex from '../views/TheIndex.vue'
import TheInformationPage from '../views/TheInformationPage.vue'
import ThePolicyPage from "@/views/ThePolicyPage.vue";
import TheConditionsPage from "@/views/TheConditionsPage.vue";

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
    {
      path: '/policy',
      name: 'policy',
      component: ThePolicyPage
    },
    {
      path: '/conditions',
      name: 'conditions',
      component: TheConditionsPage
    },

  ]
})

export default router
