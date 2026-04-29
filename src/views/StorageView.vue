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

      <div class="relative z-10 flex justify-between items-center mb-4">
        <div>
          <h3 class="text-[11px] font-bold text-white/60 uppercase tracking-widest mb-1">
            Total Stok Tersedia
          </h3>
          <div class="flex items-baseline gap-1.5">
            <span class="text-4xl font-extrabold font-headline text-primary">{{ totalStock }}</span>
            <span class="text-sm font-medium text-white/80">/ {{ maxCapacity }} Liter</span>
          </div>
        </div>
        <div
          class="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm"
        >
          <span class="material-symbols-outlined text-[24px] text-primary">water_drop</span>
        </div>
      </div>

      <div class="relative z-10 w-full bg-white/10 rounded-full h-1.5 overflow-hidden mb-4">
        <div
          class="h-full bg-primary rounded-full transition-all duration-1000"
          :style="`width: ${(totalStock / maxCapacity) * 100}%`"
        ></div>
      </div>

      <div class="relative z-10">
        <div
          class="flex items-center gap-2 text-[11px] font-bold bg-emerald-500/10 w-fit px-3 py-1.5 rounded-full border"
          :class="
            daysRemaining > 2
              ? 'text-emerald-400 border-emerald-500/20'
              : 'text-orange-400 border-orange-500/20 bg-orange-500/10'
          "
        >
          <span class="material-symbols-outlined text-[16px]">{{
            daysRemaining > 2 ? 'eco' : 'warning'
          }}</span>
          Aman untuk {{ daysRemaining }} hari pakan
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
        @click="openModal(item)"
        class="p-5 bg-white border border-outline-variant/70 rounded-2xl shadow-sm relative overflow-hidden group cursor-pointer hover:border-primary/50 transition-colors active:scale-[0.98]"
      >
        <div class="flex justify-between items-start mb-3">
          <div class="flex items-center gap-2.5">
            <div
              class="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface-variant group-hover:bg-primary/10 group-hover:text-primary transition-colors"
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
            {{ item.ageDays === 0 ? 'Dipanen Hari Ini' : `Usia: ${item.ageDays} Hari` }}
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

    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center p-6">
      <div class="absolute inset-0 bg-on-surface/40 backdrop-blur-sm" @click="closeModal"></div>

      <div
        class="bg-white rounded-3xl p-6 w-full max-w-sm relative z-10 shadow-2xl animate-fade-in-up"
      >
        <div class="flex justify-between items-center mb-6">
          <h3 class="font-headline font-bold text-lg text-on-surface">Catat Pengeluaran</h3>
          <button
            @click="closeModal"
            class="w-8 h-8 flex items-center justify-center bg-surface-container rounded-full text-on-surface-variant"
          >
            <span class="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <div class="space-y-5">
          <div
            class="bg-primary-container/50 border border-primary/20 rounded-xl p-3 flex justify-between items-center"
          >
            <span class="text-xs font-bold text-on-primary-container">Jerigen Terpilih:</span>
            <span class="text-sm font-extrabold text-primary font-headline"
              >Batch #{{ selectedItem?.id }}</span
            >
          </div>

          <div>
            <label
              class="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2 block"
            >
              Jumlah yang Diambil
            </label>
            <div class="relative flex items-center">
              <input
                type="number"
                v-model.number="takeAmount"
                class="w-full p-4 border border-outline-variant rounded-xl font-bold text-lg text-on-surface focus:border-primary focus:ring-[3px] focus:ring-primary/15 outline-none transition-all"
                placeholder="0"
                :max="selectedItem?.current"
                min="0"
              />
              <span class="absolute right-4 font-bold text-on-surface-variant">Liter</span>
            </div>
            <p class="text-[10px] text-on-surface-variant mt-2 font-medium">
              Sisa tersedia di jerigen ini:
              <span class="font-bold text-on-surface">{{ selectedItem?.current }} Liter</span>
            </p>
          </div>

          <button
            @click="submitPengeluaran"
            :disabled="!takeAmount || takeAmount <= 0 || takeAmount > selectedItem?.current"
            class="w-full bg-primary hover:bg-primary-dim disabled:bg-surface-container disabled:text-on-surface-variant disabled:shadow-none text-white font-bold py-3.5 rounded-xl transition-all shadow-md active:scale-95 mt-2"
          >
            Simpan Data
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const isFifo = ref(true)
const maxCapacity = 300
const dailyConsumption = 25

const storageItems = ref([
  { id: '021', date: '26 Apr 2026', current: 50, max: 50, ageDays: 0 },
  { id: '020', date: '24 Apr 2026', current: 45, max: 50, ageDays: 2 },
  { id: '019', date: '17 Apr 2026', current: 10, max: 50, ageDays: 9 },
])

const totalStock = computed(() => {
  return storageItems.value.reduce((acc, item) => acc + item.current, 0)
})

const daysRemaining = computed(() => {
  return Math.floor(totalStock.value / dailyConsumption)
})

const sortedItems = computed(() => {
  return [...storageItems.value].sort((a, b) => {
    return isFifo.value ? b.ageDays - a.ageDays : a.ageDays - b.ageDays
  })
})

const getAgeColor = (days) => {
  if (days > 7) return 'bg-error/10 text-error border border-error/20'
  if (days > 3) return 'bg-orange-50 text-orange-600 border border-orange-100'
  return 'bg-emerald-50 text-emerald-600 border border-emerald-100'
}

const showModal = ref(false)
const selectedItem = ref(null)
const takeAmount = ref(null)

const openModal = (item) => {
  selectedItem.value = item
  takeAmount.value = null
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  selectedItem.value = null
}

const submitPengeluaran = () => {
  if (takeAmount.value && selectedItem.value) {
    const index = storageItems.value.findIndex((i) => i.id === selectedItem.value.id)
    if (index !== -1) {
      storageItems.value[index].current -= takeAmount.value
    }
    closeModal()
  }
}
</script>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
