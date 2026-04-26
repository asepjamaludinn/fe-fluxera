<template>
  <div
    class="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#fdfdfd] transition-opacity duration-500"
    :class="{ 'opacity-0 pointer-events-none': !show }"
  >
    <div
      class="absolute w-[150%] h-[50%] bg-gradient-to-br from-primary/40 to-primary-dim rounded-[100%] blur-3xl opacity-40"
    ></div>

    <div class="relative z-10 flex flex-col items-center">
      <div
        class="w-20 h-20 bg-white/80 rounded-[1.5rem] flex items-center justify-center shadow-lg mb-6 border border-white backdrop-blur-md animate-bounce"
      >
        <span class="material-symbols-outlined text-[40px] text-primary">science</span>
      </div>
      <h1
        class="text-4xl font-extrabold tracking-tight text-on-surface font-headline drop-shadow-sm"
      >
        FLUX<span class="text-primary">ERA</span>
      </h1>
      <p class="mt-2 text-sm text-on-surface-variant font-label font-medium tracking-tight">
        Smart Farming & Konversi Limbah
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const show = ref(true)

onMounted(() => {
  setTimeout(() => {
    show.value = false
  }, 2500)
})
</script>
