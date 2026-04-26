<template>
  <div class="px-6 pt-8 pb-8">
    <header class="mb-6 flex justify-between items-end">
      <div>
        <h1 class="text-2xl font-headline font-extrabold text-on-surface">Gudang Pakan</h1>
        <p class="text-sm text-on-surface-variant font-label">Manajemen stok hasil panen</p>
      </div>
      <button
        class="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 p-2.5 rounded-xl transition-colors active:scale-95 flex items-center justify-center shadow-sm"
      >
        <span class="material-symbols-outlined text-[20px]">qr_code_scanner</span>
      </button>
    </header>

    <div class="bg-[#1a1c23] rounded-3xl p-6 text-white mb-8 relative overflow-hidden shadow-xl">
      <div
        class="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl pointer-events-none"
      ></div>
      <div class="relative z-10 flex justify-between items-center">
        <div>
          <h3 class="text-[11px] font-bold text-white/60 uppercase tracking-widest mb-1">
            Total Stok Tersedia
          </h3>
          <div class="flex items-baseline gap-1.5">
            <span class="text-4xl font-extrabold font-headline text-primary">{{ totalStock }}</span>
            <span class="text-sm font-medium text-white/80">/ 300 Liter</span>
          </div>
        </div>
        <div
          class="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm"
        >
          <span class="material-symbols-outlined text-[24px] text-primary">water_drop</span>
        </div>
      </div>

      <div class="relative z-10 mt-5">
        <div
          class="flex items-center gap-2 text-[11px] text-emerald-400 font-bold bg-emerald-500/10 w-fit px-3 py-1.5 rounded-full border border-emerald-500/20"
        >
          <span class="material-symbols-outlined text-[16px]">eco</span>
          Aman untuk 4 hari pakan
        </div>
      </div>
    </div>

    <div class="flex justify-between items-center mb-4">
      <h3 class="font-headline font-bold text-sm uppercase tracking-widest text-on-surface">
        Rincian Per-Jerigen
      </h3>

      <button
        @click="isFifo = !isFifo"
        class="text-[10px] font-bold flex items-center gap-1 px-2.5 py-1.5 rounded-lg border transition-colors active:scale-95"
        :class="
          isFifo
            ? 'bg-primary/10 text-primary border-primary/20'
            : 'bg-surface-container text-on-surface-variant border-outline-variant'
        "
      >
        <span class="material-symbols-outlined text-[14px]">
          {{ isFifo ? 'sort' : 'schedule' }}
        </span>
        {{ isFifo ? 'TERLAMA' : 'TERBARU' }}
      </button>
    </div>

    <div class="space-y-4">
      <div
        v-for="item in sortedItems"
        :key="item.id"
        class="p-5 bg-white border border-outline-variant/70 rounded-2xl shadow-sm relative overflow-hidden group"
      >
        <div class="flex justify-between items-start mb-3">
          <div class="flex items-center gap-2.5">
            <div
              class="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface-variant"
            >
              <span class="material-symbols-outlined text-[18px]">inventory_2</span>
            </div>
            <div>
              <h4 class="text-[13px] font-bold text-on-surface leading-tight">
                Batch #{{ item.id }}
              </h4>
              <p class="text-[11px] text-on-surface-variant font-medium mt-0.5">
                Panen: {{ item.date }}
              </p>
            </div>
          </div>

          <span
            class="text-[9px] font-bold px-2 py-1 rounded uppercase tracking-widest flex items-center gap-1"
            :class="getAgeColor(item.ageDays)"
          >
            <span class="material-symbols-outlined text-[12px]" v-if="item.ageDays > 7"
              >warning</span
            >
            {{ item.ageDays === 0 ? 'Dipanen Hari Ini' : `Usia Fermentasi: ${item.ageDays} Hari` }}
          </span>
        </div>

        <div class="mt-4">
          <div class="flex justify-between text-[11px] font-bold mb-1.5">
            <span class="text-on-surface-variant">Sisa Isi:</span>
            <span :class="item.current <= 10 ? 'text-orange-500' : 'text-primary'">
              {{ item.current }}L / {{ item.max }}L
            </span>
          </div>
          <div class="w-full bg-surface-container rounded-full h-2 overflow-hidden">
            <div
              class="h-full rounded-full transition-all duration-500"
              :class="
                item.current <= 10
                  ? 'bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.5)]'
                  : 'bg-primary'
              "
              :style="`width: ${(item.current / item.max) * 100}%`"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const isFifo = ref(true)

// dummy
const storageItems = [
  { id: '021', date: '26 Apr 2026', current: 50, max: 50, ageDays: 0 },
  { id: '020', date: '24 Apr 2026', current: 45, max: 50, ageDays: 2 },
  { id: '019', date: '17 Apr 2026', current: 10, max: 50, ageDays: 9 },
]

const totalStock = computed(() => {
  return storageItems.reduce((acc, item) => acc + item.current, 0)
})

// sorting
const sortedItems = computed(() => {
  return [...storageItems].sort((a, b) => {
    if (isFifo.value) {
      return b.ageDays - a.ageDays
    } else {
      return a.ageDays - b.ageDays
    }
  })
})

const getAgeColor = (days) => {
  if (days > 7) return 'bg-error/10 text-error border border-error/20'
  if (days > 3) return 'bg-orange-50 text-orange-600 border border-orange-100'
  return 'bg-emerald-50 text-emerald-600 border border-emerald-100'
}
</script>
