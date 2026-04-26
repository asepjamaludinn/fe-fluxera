<template>
  <SplashScreen />

  <div class="bg-slate-100 w-full flex justify-center min-h-screen font-body tracking-tight">
    <div
      class="w-full max-w-md bg-surface-container-low min-h-screen relative shadow-2xl overflow-x-hidden pb-20 flex flex-col"
    >
      <main class="flex-1 overflow-y-auto scrollbar-hide">
        <router-view />
      </main>

      <BottomNav v-if="showBottomNav" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import SplashScreen from './components/ui/SplashScreen.vue'
import BottomNav from './components/layout/BottomNav.vue'

const route = useRoute()

// sembunyiind dari login dan regis
const showBottomNav = computed(() => {
  return !['login', 'register'].includes(route.name)
})
</script>
