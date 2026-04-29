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
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/LoginView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/auth/RegisterView.vue'),
    },
    {
      path: '/aktivasi',
      name: 'aktivasi',
      component: () => import('../views/AktivasiView.vue'),
    },
    {
      path: '/notifications',
      name: 'notifikasi',
      component: () => import('../views/NotificationsView.vue'),
    },
    {
      path: '/live-monitor',
      name: 'liveMonitor',
      component: () => import('../views/LiveMonitorView.vue'),
    },
    {
      path: '/rapor-hemat',
      name: 'raporHemat',
      component: () => import('../views/RaporHematView.vue'),
    },
  ],
})

export default router
