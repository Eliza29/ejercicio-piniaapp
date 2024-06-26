import { createRouter, createWebHistory } from 'vue-router'
import Counter1Page from '@/counter/pages/counter1Page.vue'
import CounterSetupPage from '@/counter/pages/counterSetupPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'counter-1',
      component: Counter1Page
    },
    {
      path: '/counter-2',
      name: 'counter-2',
      component: CounterSetupPage
    },

  ]
})

export default router
