import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DashboardView,
    },
    {
      path: '/riwayat',
      name: 'history',
      component: () => import('../views/HistoryView.vue'),
    },
    {
      path: '/gudang',
      name: 'storage',
      component: () => import('../views/StorageView.vue'),
    },
    {
      path: '/profil',
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
    },
  ],
})

export default router
