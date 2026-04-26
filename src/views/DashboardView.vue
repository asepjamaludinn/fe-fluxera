<template>
  <div class="flex flex-col min-h-screen pb-6">
    <TopHeader />

    <div class="px-6 -mt-12 relative z-10">
      <div
        class="bg-surface rounded-3xl p-6 shadow-xl shadow-primary/10 border border-outline-variant"
      >
        <div class="flex justify-between items-center mb-5">
          <div
            class="flex items-center gap-2 text-on-primary-container bg-primary-container px-3 py-1.5 rounded-lg border border-primary/20"
          >
            <span class="material-symbols-outlined text-[18px] animate-pulse text-primary"
              >science</span
            >
            <span class="font-headline font-bold text-xs tracking-wider">FLX-8821</span>
          </div>
          <div
            class="flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100"
          >
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Online
          </div>
        </div>

        <h2 class="text-on-surface font-headline font-extrabold text-2xl mb-1 tracking-tight">
          Sedang Fermentasi
        </h2>

        <div class="mb-6 mt-3">
          <div class="flex justify-between text-xs font-label text-on-surface-variant mb-2">
            <span class="font-medium">Hari ke-3</span>
            <span class="font-bold text-primary">Target: 7 Hari</span>
          </div>
          <div class="w-full h-2.5 bg-surface-container-high rounded-full overflow-hidden">
            <div
              class="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
              style="width: 42%"
            ></div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4 mb-5">
          <div
            class="bg-surface-container rounded-2xl p-4 flex flex-col gap-2 border border-outline-variant transition-all hover:border-primary/30"
          >
            <div
              class="w-8 h-8 rounded-full bg-primary-container text-primary flex items-center justify-center mb-1"
            >
              <span class="material-symbols-outlined text-[18px]">thermostat</span>
            </div>
            <div>
              <p class="text-xs text-on-surface-variant font-label mb-0.5">Suhu Reaktor</p>
              <p class="font-bold text-on-surface text-xl font-headline">
                32.5 <span class="text-sm font-normal text-on-surface-variant ml-0.5">°C</span>
              </p>
            </div>
          </div>

          <div
            class="bg-surface-container rounded-2xl p-4 flex flex-col gap-2 border border-outline-variant transition-all hover:border-primary/30"
          >
            <div
              class="w-8 h-8 rounded-full bg-primary-container text-primary flex items-center justify-center mb-1"
            >
              <span class="material-symbols-outlined text-[18px]">water_drop</span>
            </div>
            <div>
              <p class="text-xs text-on-surface-variant font-label mb-0.5">Level Keasaman</p>
              <p class="font-bold text-on-surface text-xl font-headline">pH 4.2</p>
            </div>
          </div>
        </div>

        <div
          class="bg-surface-container-low border border-outline-variant rounded-xl p-3 mb-5 flex items-center justify-between"
        >
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-[18px] text-emerald-500">eco</span>
            <span class="text-xs font-semibold text-on-surface-variant tracking-tight"
              >Estimasi Panen:</span
            >
          </div>
          <span class="text-sm font-bold text-on-surface">50 Liter Pakan</span>
        </div>

        <button
          disabled
          class="w-full py-4 rounded-xl bg-surface-container-highest text-on-surface-variant font-headline font-bold flex items-center justify-center gap-2 transition-colors cursor-not-allowed border border-outline-variant"
        >
          <span class="material-symbols-outlined text-[20px]">add_circle</span>
          Mulai Batch Baru
        </button>
      </div>
    </div>

    <div class="px-6 mt-6">
      <div
        class="bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 rounded-2xl p-4 flex gap-3 items-start relative overflow-hidden"
      >
        <div class="absolute -right-4 -top-4 w-16 h-16 bg-primary/20 rounded-full blur-xl"></div>
        <span class="material-symbols-outlined text-primary text-[22px] relative z-10">
          auto_awesome
        </span>
        <div class="relative z-10">
          <h4 class="text-sm font-bold text-on-surface tracking-tight mb-0.5">
            Prediksi AI: Kualitas Grade A
          </h4>
          <p class="text-xs text-on-surface-variant leading-relaxed">
            Suhu dan pH stabil sejak kemarin. Hasil panen diprediksi sangat optimal untuk ternak
            sapi perah Anda.
          </p>
        </div>
      </div>
    </div>

    <div class="px-6 mt-8 mb-8">
      <h3 class="font-headline font-bold text-on-surface mb-4 text-sm uppercase tracking-widest">
        Layanan Cepat
      </h3>
      <div class="grid grid-cols-4 gap-4">
        <router-link
          v-for="menu in quickMenus"
          :key="menu.name"
          :to="menu.path"
          class="flex flex-col items-center gap-2 group active:scale-95 transition-transform"
        >
          <div
            class="w-14 h-14 rounded-2xl bg-surface-container-high text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-sm border border-outline-variant group-hover:border-primary"
          >
            <span class="material-symbols-outlined text-[26px]">{{ menu.icon }}</span>
          </div>
          <span
            class="text-[11px] font-semibold text-on-surface-variant text-center leading-tight group-hover:text-primary transition-colors"
            v-html="menu.name"
          ></span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import TopHeader from '@/components/layout/TopHeader.vue'

const quickMenus = [
  { name: 'Live<br />Monitor', icon: 'monitoring', path: '/live-monitor' },
  { name: 'Rapor<br />Hemat', icon: 'account_balance_wallet', path: '/rapor-hemat' },
  { name: 'Resep<br />AI', icon: 'smart_toy', path: '/resep-ai' },
  { name: 'Panggil<br />Teknisi', icon: 'engineering', path: '/teknisi' },
]
</script>
