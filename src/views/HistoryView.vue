<template>
  <div class="px-6 pt-8 pb-8">
    <header class="mb-6">
      <h1 class="text-2xl font-headline font-extrabold text-on-surface">Riwayat Batch</h1>
      <p class="text-sm text-on-surface-variant font-label">Daftar produksi pakan yang selesai</p>
    </header>

    <div class="grid grid-cols-2 gap-3 mb-6">
      <div
        class="bg-primary/10 border border-primary/20 rounded-2xl p-4 flex flex-col justify-center"
      >
        <span class="text-[11px] font-bold text-on-primary-container uppercase tracking-widest mb-1"
          >Total Panen</span
        >
        <div class="flex items-baseline gap-1">
          <span class="text-2xl font-extrabold text-on-surface font-headline">205</span>
          <span class="text-xs font-medium text-on-surface-variant">Liter</span>
        </div>
      </div>
      <div
        class="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 flex flex-col justify-center"
      >
        <span class="text-[11px] font-bold text-emerald-800 uppercase tracking-widest mb-1"
          >Grade A Rate</span
        >
        <div class="flex items-baseline gap-1">
          <span class="text-2xl font-extrabold text-emerald-600 font-headline">75%</span>
          <span class="material-symbols-outlined text-[16px] text-emerald-500 ml-1"
            >trending_up</span
          >
        </div>
      </div>
    </div>

    <div class="flex gap-2 mb-6">
      <div class="relative flex-1 group">
        <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <span
            class="material-symbols-outlined text-[20px] text-on-surface-variant/50 group-focus-within:text-primary transition-colors"
            >search</span
          >
        </div>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Cari Batch #..."
          class="w-full pl-11 pr-4 py-3 bg-white border border-outline-variant/70 rounded-xl focus:ring-[3px] focus:ring-primary/15 focus:border-primary outline-none transition-all text-[13px] font-medium text-on-surface"
        />
      </div>
      <button
        class="w-12 h-12 bg-white border border-outline-variant/70 rounded-xl flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-colors"
      >
        <span class="material-symbols-outlined text-[20px]">filter_list</span>
      </button>
    </div>

    <div class="space-y-4">
      <div
        v-if="filteredHistory.length === 0"
        class="py-10 text-center bg-surface-container-low rounded-2xl border border-dashed border-outline-variant"
      >
        <span class="material-symbols-outlined text-[40px] text-on-surface-variant/30 mb-2"
          >search_off</span
        >
        <p class="text-[13px] font-bold text-on-surface-variant">Batch tidak ditemukan</p>
      </div>

      <div
        v-for="item in filteredHistory"
        :key="item.id"
        class="bg-white border border-outline-variant/50 rounded-2xl p-5 shadow-sm hover:border-primary transition-all group cursor-pointer"
      >
        <div class="flex justify-between items-start mb-4 border-b border-outline-variant/40 pb-4">
          <div
            class="flex items-center gap-2 bg-primary/10 px-3 py-1.5 rounded-lg border border-primary/20"
          >
            <span class="material-symbols-outlined text-[16px] text-primary">verified</span>
            <span class="text-[11px] font-bold text-primary uppercase tracking-wider">
              Batch #{{ item.id }}
            </span>
          </div>
          <span
            class="text-[10px] font-bold px-2.5 py-1 rounded-md"
            :class="
              item.quality === 'Grade A'
                ? 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                : 'bg-orange-50 text-orange-600 border border-orange-100'
            "
          >
            {{ item.quality }}
          </span>
        </div>

        <div class="grid grid-cols-2 gap-y-3 mb-5">
          <div class="flex items-center gap-2 text-on-surface-variant">
            <span class="material-symbols-outlined text-[18px]">calendar_month</span>
            <span class="text-[13px] font-medium">{{ item.date }}</span>
          </div>
          <div class="flex items-center gap-2 text-on-surface-variant">
            <span class="material-symbols-outlined text-[18px]">water_drop</span>
            <span class="text-[13px] font-medium text-on-surface font-bold"
              >pH Akhir: {{ item.ph }}</span
            >
          </div>
          <div class="flex items-center gap-2 text-on-surface-variant">
            <span class="material-symbols-outlined text-[18px]">schedule</span>
            <span class="text-[13px] font-medium">{{ item.duration }}</span>
          </div>
          <div class="flex items-center gap-2 text-on-surface-variant">
            <span class="material-symbols-outlined text-[18px]">science</span>
            <span class="text-[13px] font-bold text-primary">{{ item.volume }} Liter</span>
          </div>
        </div>

        <button
          class="w-full py-3 bg-surface-container rounded-xl text-[13px] font-bold text-on-surface-variant group-hover:bg-primary group-hover:text-white transition-all flex items-center justify-center gap-1 active:scale-[0.98]"
        >
          Lihat Detail Analisis AI
          <span
            class="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1"
            >arrow_forward</span
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const searchQuery = ref('')

const historyData = [
  {
    id: '021',
    date: '18 Apr 2026',
    time: '08:30',
    volume: 50,
    ph: 4.2,
    quality: 'Grade A',
    duration: '7 Hari',
  },
  {
    id: '020',
    date: '11 Apr 2026',
    time: '14:15',
    volume: 45,
    ph: 4.3,
    quality: 'Grade A',
    duration: '7 Hari',
  },
  {
    id: '019',
    date: '04 Apr 2026',
    time: '09:00',
    volume: 60,
    ph: 5.1,
    quality: 'Grade B',
    duration: '6 Hari',
  },
  {
    id: '018',
    date: '28 Mar 2026',
    time: '10:20',
    volume: 50,
    ph: 4.1,
    quality: 'Grade A',
    duration: '7 Hari',
  },
]

// Fitur Pencarian Real-time
const filteredHistory = computed(() => {
  if (!searchQuery.value) return historyData
  return historyData.filter((item) =>
    item.id.toLowerCase().includes(searchQuery.value.toLowerCase()),
  )
})
</script>
