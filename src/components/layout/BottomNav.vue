<template>
  <div
    class="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white border-t border-outline-variant/50 px-6 py-3 z-50 rounded-t-2xl shadow-[0_-4px_20px_rgba(0,0,0,0.05)]"
  >
    <div class="flex justify-between items-center">
      <router-link
        v-for="item in navItems"
        :key="item.name"
        :to="item.path"
        class="flex flex-col items-center gap-1 transition-colors"
        :class="
          isActive(item.path) ? 'text-primary' : 'text-on-surface-variant hover:text-primary-dim'
        "
      >
        <span class="material-symbols-outlined text-[24px]" :class="{ fill: isActive(item.path) }">
          {{ item.icon }}
        </span>
        <span class="text-[10px] font-bold font-label tracking-tight">
          {{ item.name }}
        </span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const navItems = [
  { name: 'Beranda', icon: 'home', path: '/' },
  { name: 'Riwayat', icon: 'history', path: '/riwayat' },
  { name: 'Gudang', icon: 'inventory_2', path: '/gudang' },
  { name: 'Profil', icon: 'person', path: '/profil' },
]

const isActive = (path) => route.path === path
</script>
