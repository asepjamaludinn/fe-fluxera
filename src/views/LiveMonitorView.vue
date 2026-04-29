<template>
  <div class="min-h-screen bg-[#f8f9fa] flex flex-col pb-10 font-body">
    <header
      class="pt-12 pb-24 px-6 flex items-start justify-between bg-gradient-to-br from-primary to-[#d0ab63] relative overflow-hidden rounded-b-[2.5rem] shadow-[0_8px_30px_rgba(221,186,125,0.25)]"
    >
      <div
        class="absolute -top-12 -right-10 w-48 h-48 bg-white/20 rounded-full blur-3xl pointer-events-none"
      ></div>
      <div
        class="absolute bottom-0 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"
      ></div>

      <div class="flex items-center gap-4 relative z-10">
        <button
          @click="router.back()"
          class="w-10 h-10 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center text-[#1a1c23] hover:bg-white/40 border border-white/40 transition-all active:scale-95 shadow-sm"
        >
          <span class="material-symbols-outlined text-[22px]">chevron_left</span>
        </button>
        <div class="pt-1">
          <h1
            class="text-[22px] font-extrabold text-[#1a1c23] font-headline tracking-tight leading-none mb-1"
          >
            Live Monitor
          </h1>
          <p
            class="text-[10px] font-bold text-[#5c471c] uppercase tracking-widest font-label opacity-90"
          >
            Real-time Telemetry
          </p>
        </div>
      </div>

      <div
        class="relative z-10 bg-white/25 backdrop-blur-md border border-white/40 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm mt-1"
      >
        <span
          class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse border border-white/50"
        ></span>
        <span class="text-[10px] font-bold text-[#1a1c23] uppercase tracking-widest pt-px"
          >Online</span
        >
      </div>
    </header>

    <div class="px-6 -mt-16 relative z-20 space-y-4">
      <div
        class="bg-white/90 backdrop-blur-xl rounded-[1.25rem] p-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-white flex justify-between items-center"
      >
        <div class="flex items-center gap-3.5">
          <div
            class="w-11 h-11 rounded-full bg-primary/15 text-primary flex items-center justify-center border border-primary/20"
          >
            <span class="material-symbols-outlined text-[22px]">router</span>
          </div>
          <div>
            <p
              class="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest mb-0.5"
            >
              Device ID
            </p>
            <p class="text-[15px] font-headline font-extrabold text-on-surface leading-none">
              FLX-8821
            </p>
          </div>
        </div>
        <div class="text-right border-l border-outline-variant/50 pl-4">
          <p class="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">
            Pembaruan
          </p>
          <p
            class="text-[11px] font-bold text-primary flex items-center gap-1 bg-primary/5 px-2 py-1 rounded-md"
          >
            <span class="material-symbols-outlined text-[14px] animate-spin-slow">sync</span>
            {{ lastUpdate }}
          </p>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div
          class="bg-gradient-to-b from-white to-surface-container-low rounded-[1.25rem] p-4 shadow-sm border border-outline-variant/60 relative overflow-hidden transition-all group"
          :class="temperature > 35 ? 'border-orange-400/50 shadow-orange-400/10' : ''"
        >
          <div
            class="absolute -right-6 -top-6 w-24 h-24 rounded-full blur-2xl pointer-events-none transition-colors"
            :class="temperature > 35 ? 'bg-orange-500/10' : 'bg-primary/10'"
          ></div>

          <div class="flex justify-between items-start mb-6 relative z-10">
            <div
              class="w-9 h-9 rounded-full flex items-center justify-center transition-colors shadow-inner"
              :class="
                temperature > 35
                  ? 'bg-orange-50 text-orange-500 border border-orange-100'
                  : 'bg-primary/10 text-primary border border-primary/20'
              "
            >
              <span class="material-symbols-outlined text-[18px]">device_thermostat</span>
            </div>
            <span
              class="bg-surface-container-high text-on-surface-variant text-[8px] font-extrabold px-2 py-1 rounded-md uppercase tracking-widest border border-outline-variant/50"
            >
              SUHU
            </span>
          </div>

          <div class="relative z-10">
            <div class="flex items-baseline gap-0.5">
              <span
                class="text-[38px] font-headline font-extrabold tracking-tighter"
                :class="
                  temperature > 35
                    ? 'text-orange-500'
                    : 'text-on-surface transition-colors duration-500'
                "
              >
                {{ temperature.toFixed(1) }}
              </span>
              <span class="text-[14px] font-bold text-on-surface-variant">°C</span>
            </div>
            <p
              class="text-[11px] font-bold mt-0.5 flex items-center gap-1"
              :class="temperature > 35 ? 'text-orange-600' : 'text-emerald-600'"
            >
              <span class="material-symbols-outlined text-[14px]">{{
                temperature > 35 ? 'trending_up' : 'check_circle'
              }}</span>
              {{ temperature > 35 ? 'Terlalu Hangat' : 'Optimal' }}
            </p>
          </div>
        </div>

        <div
          class="bg-gradient-to-b from-white to-surface-container-low rounded-[1.25rem] p-4 shadow-sm border border-outline-variant/60 relative overflow-hidden transition-all group"
        >
          <div
            class="absolute -right-6 -top-6 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl pointer-events-none"
          ></div>

          <div class="flex justify-between items-start mb-6 relative z-10">
            <div
              class="w-9 h-9 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center shadow-inner border border-blue-100"
            >
              <span class="material-symbols-outlined text-[18px]">water_drop</span>
            </div>
            <span
              class="bg-surface-container-high text-on-surface-variant text-[8px] font-extrabold px-2 py-1 rounded-md uppercase tracking-widest border border-outline-variant/50"
            >
              pH LEVEL
            </span>
          </div>

          <div class="relative z-10">
            <div class="flex items-baseline gap-0.5">
              <span
                class="text-[38px] font-headline font-extrabold tracking-tighter text-on-surface transition-colors duration-500"
              >
                {{ phLevel.toFixed(2) }}
              </span>
            </div>
            <p class="text-[11px] font-bold mt-0.5 flex items-center gap-1 text-blue-600">
              <span class="material-symbols-outlined text-[14px]">arrow_downward</span>
              Menuju Asam
            </p>
          </div>
        </div>
      </div>

      <div
        class="bg-white rounded-[1.5rem] p-5 shadow-sm border border-outline-variant/60 relative overflow-hidden"
      >
        <div class="flex justify-between items-center mb-4">
          <h3 class="font-headline font-extrabold text-[14px] text-on-surface tracking-tight">
            Tren Fermentasi (24j)
          </h3>
          <button
            class="text-[9px] font-bold text-primary uppercase tracking-widest hover:underline bg-primary/5 px-2 py-1 rounded-md"
          >
            Detail
          </button>
        </div>

        <div class="h-28 flex items-end justify-between gap-1.5 mb-3 relative">
          <div class="absolute inset-0 flex flex-col justify-between pointer-events-none">
            <div class="border-b border-dashed border-outline-variant/40 w-full h-0"></div>
            <div class="border-b border-dashed border-outline-variant/40 w-full h-0"></div>
            <div class="border-b border-dashed border-outline-variant/40 w-full h-0"></div>
          </div>

          <div
            v-for="(bar, index) in chartData"
            :key="index"
            class="w-full flex justify-center group relative h-full items-end"
          >
            <div
              class="absolute -top-8 bg-[#1a1c23] text-white text-[10px] font-bold py-1 px-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md z-10"
            >
              {{ bar.val }}°C
            </div>
            <div
              class="w-full max-w-[12px] bg-primary/20 rounded-t-sm transition-all duration-700 ease-out group-hover:bg-primary/40 relative z-0"
              :style="`height: ${bar.height}%`"
            >
              <div
                v-if="index === chartData.length - 1"
                class="absolute top-0 w-full h-full bg-primary rounded-t-sm shadow-[0_0_8px_rgba(221,186,125,0.6)]"
              ></div>
            </div>
          </div>
        </div>

        <div
          class="flex justify-between text-[9px] font-extrabold text-on-surface-variant/50 uppercase tracking-widest"
        >
          <span>00:00</span>
          <span>12:00</span>
          <span class="text-primary">SKG</span>
        </div>
      </div>

      <div
        class="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-[1.25rem] p-4 flex gap-3.5 items-start relative overflow-hidden shadow-sm"
      >
        <div class="absolute -right-4 -top-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl"></div>
        <div
          class="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-primary/10"
        >
          <span class="material-symbols-outlined text-primary text-[18px] animate-pulse"
            >auto_awesome</span
          >
        </div>
        <div class="relative z-10 pt-1">
          <h4 class="text-[12px] font-extrabold text-on-surface tracking-tight mb-1 uppercase">
            Analisis AI Aktif
          </h4>
          <p class="text-[12px] text-on-surface-variant leading-relaxed font-medium">
            Suhu reaktor stabil di <span class="font-bold text-on-surface">32°C</span>. Bakteri
            <i class="text-on-surface">Lactobacillus</i> berkembang biak dengan kecepatan
            <span class="font-bold text-emerald-600">94%</span> dari batas maksimal.
          </p>
        </div>
      </div>

      <div class="pt-2">
        <button
          class="w-full bg-[#1a1c23] hover:bg-[#2a2c35] text-white font-extrabold py-4 rounded-[1.25rem] transition-all shadow-lg shadow-black/10 active:scale-[0.98] flex items-center justify-center gap-2.5 tracking-wide text-[14px]"
        >
          <span class="material-symbols-outlined text-[20px]">valve</span>
          Buka Katup Gas Sisa
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// State Data Sensor
const temperature = ref(32.4)
const phLevel = ref(4.31)
const lastUpdate = ref('Baru saja')

// Data Grafik (Tinggi Bar dalam persen)
const chartData = ref([
  { val: 28, height: 40 },
  { val: 29, height: 45 },
  { val: 30, height: 50 },
  { val: 31, height: 60 },
  { val: 31.5, height: 65 },
  { val: 32, height: 70 },
  { val: 32.2, height: 75 },
  { val: 32.4, height: 80 }, // Data saat ini
])

// Variabel Interval
let sensorInterval = null

// Fungsi Simulasi Live Data
const simulateLiveData = () => {
  sensorInterval = setInterval(() => {
    // Fluktuasi suhu antara -0.2 sampai +0.2
    const tempChange = Math.random() * 0.4 - 0.2
    temperature.value = Math.max(25, Math.min(40, temperature.value + tempChange))

    // Fluktuasi pH antara -0.05 sampai +0.02
    const phChange = Math.random() * 0.07 - 0.05
    phLevel.value = Math.max(3.5, Math.min(7.0, phLevel.value + phChange))

    // Update waktu
    const now = new Date()
    lastUpdate.value = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`

    // Animasikan bar terakhir di grafik
    chartData.value[chartData.value.length - 1].val = temperature.value.toFixed(1)
    chartData.value[chartData.value.length - 1].height = (temperature.value / 40) * 100
  }, 2500) // Update setiap 2.5 detik
}

onMounted(() => {
  simulateLiveData()
})

onUnmounted(() => {
  if (sensorInterval) clearInterval(sensorInterval)
})
</script>

<style scoped>
.animate-spin-slow {
  animation: spin 3s linear infinite;
}
</style>
