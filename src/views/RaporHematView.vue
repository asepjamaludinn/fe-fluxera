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
            Rapor Hemat
          </h1>
          <p
            class="text-[10px] font-bold text-[#5c471c] uppercase tracking-widest font-label opacity-90"
          >
            Bulan: April 2026
          </p>
        </div>
      </div>

      <button
        class="relative z-10 w-10 h-10 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center text-[#1a1c23] hover:bg-white/40 border border-white/40 transition-all active:scale-95 shadow-sm"
      >
        <span class="material-symbols-outlined text-[20px]">calendar_month</span>
      </button>
    </header>

    <div class="px-6 -mt-16 space-y-5 relative z-20">
      <div
        class="bg-[#1a1c23] rounded-[1.5rem] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.1)] relative overflow-hidden text-white border border-outline-variant/20"
      >
        <div
          class="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-2xl pointer-events-none"
        ></div>
        <div
          class="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl pointer-events-none"
        ></div>

        <div class="relative z-10 flex flex-col items-center text-center">
          <div
            class="w-12 h-12 bg-white/10 backdrop-blur-md rounded-[1rem] flex items-center justify-center mb-3 border border-white/10 shadow-inner text-primary"
          >
            <span class="material-symbols-outlined text-[28px]">savings</span>
          </div>
          <p class="text-[11px] font-bold text-white/60 uppercase tracking-widest mb-1">
            Total Penghematan Pakan
          </p>
          <div class="flex items-start justify-center gap-1 mb-2">
            <span class="text-xl font-bold mt-1.5 opacity-80 text-primary">Rp</span>
            <span
              class="text-[42px] font-headline font-extrabold tracking-tighter leading-none text-primary drop-shadow-sm"
            >
              3.450<span class="text-[28px]">.000</span>
            </span>
          </div>
          <div
            class="bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20 inline-flex items-center gap-1 mt-2"
          >
            <span class="material-symbols-outlined text-[14px] text-emerald-400">trending_up</span>
            <span class="text-[10px] font-extrabold text-emerald-400 uppercase tracking-widest"
              >+12.5% dari bulan lalu</span
            >
          </div>
        </div>
      </div>

      <div class="bg-white rounded-[1.5rem] p-5 shadow-sm border border-outline-variant/60">
        <h3 class="font-headline font-extrabold text-[14px] text-on-surface tracking-tight mb-5">
          Komparasi Biaya Pakan
        </h3>

        <div class="space-y-5">
          <div>
            <div class="flex justify-between text-[11px] font-bold mb-2">
              <span class="text-on-surface-variant flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-error"></span> Tanpa FLUXERA (Pabrikan)
              </span>
              <span class="text-on-surface">Rp 5.200.000</span>
            </div>
            <div class="w-full bg-surface-container rounded-full h-3 overflow-hidden">
              <div class="bg-error h-full rounded-full w-[100%] opacity-80"></div>
            </div>
          </div>

          <div>
            <div class="flex justify-between text-[11px] font-bold mb-2">
              <span class="text-primary flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span> Dengan FLUXERA
              </span>
              <span class="text-primary font-extrabold">Rp 1.750.000</span>
            </div>
            <div class="w-full bg-surface-container rounded-full h-3 overflow-hidden">
              <div
                class="bg-primary h-full rounded-full w-[33%] shadow-[0_0_10px_rgba(221,186,125,0.4)] transition-all duration-1000 ease-out"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3
          class="font-headline font-extrabold text-[14px] text-on-surface tracking-tight mb-3 px-1"
        >
          Rincian Nilai Ekonomi
        </h3>
        <div
          class="bg-white rounded-[1.5rem] shadow-sm border border-outline-variant/60 overflow-hidden"
        >
          <div class="p-4 border-b border-outline-variant/40 flex items-center gap-4">
            <div
              class="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0"
            >
              <span class="material-symbols-outlined text-[20px]">eco</span>
            </div>
            <div class="flex-grow">
              <p class="text-[13px] font-bold text-on-surface">Substitusi Pakan Cair</p>
              <p class="text-[11px] text-on-surface-variant font-medium">150 Liter x Rp 15.000</p>
            </div>
            <span class="text-[13px] font-extrabold text-emerald-600">+ Rp 2.250.000</span>
          </div>

          <div class="p-4 border-b border-outline-variant/40 flex items-center gap-4">
            <div
              class="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0"
            >
              <span class="material-symbols-outlined text-[20px]">water_drop</span>
            </div>
            <div class="flex-grow">
              <p class="text-[13px] font-bold text-on-surface">Pupuk Cair Ekstra</p>
              <p class="text-[11px] text-on-surface-variant font-medium">Koperasi (100 Liter)</p>
            </div>
            <span class="text-[13px] font-extrabold text-emerald-600">+ Rp 1.500.000</span>
          </div>

          <div class="p-4 flex items-center gap-4 bg-surface-container-low/50">
            <div
              class="w-10 h-10 rounded-full bg-error/10 text-error flex items-center justify-center shrink-0"
            >
              <span class="material-symbols-outlined text-[20px]">electric_bolt</span>
            </div>
            <div class="flex-grow">
              <p class="text-[13px] font-bold text-on-surface">Biaya Operasional</p>
              <p class="text-[11px] text-on-surface-variant font-medium">Listrik IoT & Molase</p>
            </div>
            <span class="text-[13px] font-extrabold text-error">- Rp 300.000</span>
          </div>
        </div>
      </div>

      <div
        class="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-[1.25rem] p-4 flex gap-3.5 items-start relative overflow-hidden shadow-sm mb-4"
      >
        <div class="absolute -right-4 -top-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl"></div>
        <div
          class="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-primary/10"
        >
          <span class="material-symbols-outlined text-primary text-[18px] animate-pulse"
            >auto_awesome</span
          >
        </div>
        <div class="relative z-10 pt-0.5">
          <h4 class="text-[12px] font-extrabold text-on-surface tracking-tight mb-1 uppercase">
            Proyeksi AI Tahunan
          </h4>
          <p class="text-[12px] text-on-surface-variant leading-relaxed font-medium">
            Jika performa dipertahankan, Peternakan Lembang diproyeksikan menghemat
            <span class="font-bold text-emerald-600">Rp 41.400.000</span> pada akhir tahun 2026.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style scoped>
.fill {
  font-variation-settings: 'FILL' 1;
}
</style>
