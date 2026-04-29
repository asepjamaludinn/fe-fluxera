<template>
  <div class="bg-surface-container-low min-h-screen pb-20">
    <header
      class="bg-gradient-to-br from-primary to-primary-dim pt-12 pb-24 px-6 rounded-b-[2.5rem] relative z-0 shadow-lg shadow-primary/20 flex flex-col items-center text-center overflow-hidden"
    >
      <div
        class="absolute -top-12 -right-10 w-48 h-48 bg-white/20 rounded-full blur-3xl pointer-events-none"
      ></div>
      <div
        class="absolute bottom-4 -left-12 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none"
      ></div>

      <div class="relative z-10">
        <div
          class="w-24 h-24 rounded-full border-[3px] border-white/80 p-1 bg-white/30 backdrop-blur-md shadow-xl mb-4 relative z-10"
        >
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Asep"
            alt="Avatar"
            class="w-full h-full object-cover rounded-full"
          />
        </div>
        <div
          class="absolute bottom-4 -right-1 bg-emerald-500 text-white w-7 h-7 rounded-full flex items-center justify-center border-2 border-white z-20 shadow-md"
        >
          <span class="material-symbols-outlined text-[16px]">verified</span>
        </div>
      </div>

      <h1 class="text-xl font-headline font-extrabold text-[#1a1c23] relative z-10 tracking-tight">
        Asep Jamaludin
      </h1>

      <div class="flex flex-col items-center gap-1 mt-1 relative z-10">
        <div class="flex items-center gap-1.5 text-[#5c471c] font-medium font-label">
          <span class="material-symbols-outlined text-[14px]">location_on</span>
          <p class="text-[12px]">Peternakan Lembang, Bandung</p>
        </div>

        <button
          @click="copyId"
          class="flex items-center gap-1 text-[#644d1e] bg-white/20 hover:bg-white/30 backdrop-blur-sm px-2 py-0.5 rounded transition-colors active:scale-95 mt-1"
        >
          <span class="text-[10px] font-bold tracking-widest uppercase">ID: 101012330125</span>
          <span class="material-symbols-outlined text-[12px]">{{
            copied ? 'check' : 'content_copy'
          }}</span>
        </button>
      </div>
    </header>

    <div class="px-6 -mt-14 relative z-10 space-y-6">
      <div class="grid grid-cols-2 gap-3">
        <div
          class="bg-white border border-outline-variant/60 rounded-[1.25rem] p-4 text-center shadow-md shadow-black/5 flex flex-col items-center justify-center relative overflow-hidden"
        >
          <div class="absolute -right-4 -bottom-4 w-16 h-16 bg-primary/5 rounded-full"></div>
          <span
            class="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest block mb-1"
            >Total Diolah</span
          >
          <span class="text-2xl font-headline font-extrabold text-on-surface">
            1.250 <span class="text-xs font-medium text-on-surface-variant ml-0.5">L</span>
          </span>
        </div>
        <div
          class="bg-white border border-outline-variant/60 rounded-[1.25rem] p-4 text-center shadow-md shadow-black/5 flex flex-col items-center justify-center relative overflow-hidden"
        >
          <div class="absolute -right-4 -bottom-4 w-16 h-16 bg-emerald-500/5 rounded-full"></div>
          <span
            class="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest block mb-1"
            >Reaktor Aktif</span
          >
          <span class="text-2xl font-headline font-extrabold text-emerald-600">
            1 <span class="text-xs font-medium text-emerald-600/70 ml-0.5">Unit</span>
          </span>
        </div>
      </div>

      <div
        class="bg-gradient-to-r from-surface to-surface-container rounded-[1.5rem] p-5 border border-outline-variant/50 relative overflow-hidden shadow-sm"
      >
        <div
          class="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none"
        ></div>

        <div class="flex items-center justify-between mb-4 relative z-10">
          <span
            class="text-[11px] font-bold text-on-surface-variant uppercase tracking-widest flex items-center gap-1.5"
          >
            <span class="material-symbols-outlined text-[16px] text-primary">credit_card</span>
            Info Langganan Alat
          </span>
          <span
            class="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2.5 py-1 rounded-md border border-emerald-100 uppercase flex items-center gap-1 shadow-sm"
          >
            <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
            Status: Aktif
          </span>
        </div>

        <div
          class="flex items-center gap-4 relative z-10 bg-white/60 p-3 rounded-xl border border-white"
        >
          <div
            class="w-12 h-12 bg-primary-container rounded-[0.85rem] flex items-center justify-center text-primary shadow-inner"
          >
            <span class="material-symbols-outlined text-[24px]">workspace_premium</span>
          </div>
          <div class="flex-1">
            <p class="text-[14px] font-bold text-on-surface leading-tight">Paket HaaS Silver</p>
            <div class="flex justify-between items-end mt-1">
              <p class="text-[11px] text-on-surface-variant font-medium">
                Jatuh tempo: <span class="font-bold text-on-surface">15 Mei 2026</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-6">
        <div>
          <h3
            class="px-2 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-3"
          >
            Akun & Preferensi
          </h3>
          <div
            class="bg-white rounded-[1.5rem] border border-outline-variant/50 overflow-hidden shadow-sm"
          >
            <button
              class="w-full flex items-center justify-between p-4 hover:bg-surface-container-low transition-colors group border-b border-outline-variant/30"
            >
              <div class="flex items-center gap-3.5">
                <div
                  class="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-colors text-on-surface-variant"
                >
                  <span class="material-symbols-outlined text-[18px]">person</span>
                </div>
                <span class="text-[13px] font-semibold text-on-surface"
                  >Edit Profil & Peternakan</span
                >
              </div>
              <span
                class="material-symbols-outlined text-[20px] text-on-surface-variant/40 group-hover:text-primary/70 transition-colors"
                >chevron_right</span
              >
            </button>

            <button
              class="w-full flex items-center justify-between p-4 hover:bg-surface-container-low transition-colors group border-b border-outline-variant/30"
            >
              <div class="flex items-center gap-3.5">
                <div
                  class="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-colors text-on-surface-variant"
                >
                  <span class="material-symbols-outlined text-[18px]">shield_lock</span>
                </div>
                <span class="text-[13px] font-semibold text-on-surface">Keamanan PIN & Akses</span>
              </div>
              <span
                class="material-symbols-outlined text-[20px] text-on-surface-variant/40 group-hover:text-primary/70 transition-colors"
                >chevron_right</span
              >
            </button>

            <button
              class="w-full flex items-center justify-between p-4 hover:bg-surface-container-low transition-colors group"
            >
              <div class="flex items-center gap-3.5">
                <div
                  class="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-colors text-on-surface-variant"
                >
                  <span class="material-symbols-outlined text-[18px]">notifications</span>
                </div>
                <span class="text-[13px] font-semibold text-on-surface"
                  >Preferensi Notifikasi AI</span
                >
              </div>
              <span
                class="material-symbols-outlined text-[20px] text-on-surface-variant/40 group-hover:text-primary/70 transition-colors"
                >chevron_right</span
              >
            </button>
          </div>
        </div>

        <div>
          <h3
            class="px-2 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-3"
          >
            Bantuan & Dukungan
          </h3>
          <div
            class="bg-white rounded-[1.5rem] border border-outline-variant/50 overflow-hidden shadow-sm"
          >
            <button
              class="w-full flex items-center justify-between p-4 hover:bg-surface-container-low transition-colors group"
            >
              <div class="flex items-center gap-3.5">
                <div
                  class="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-colors text-on-surface-variant"
                >
                  <span class="material-symbols-outlined text-[18px]">support_agent</span>
                </div>
                <span class="text-[13px] font-semibold text-on-surface">Pusat Bantuan & FAQ</span>
              </div>
              <span
                class="material-symbols-outlined text-[20px] text-on-surface-variant/40 group-hover:text-primary/70 transition-colors"
                >chevron_right</span
              >
            </button>
          </div>
        </div>

        <div class="pt-2 pb-6">
          <button
            @click="handleLogout"
            class="w-full flex items-center justify-center gap-2 p-4 bg-white border border-error/20 hover:bg-error/5 text-error rounded-[1.25rem] transition-all font-bold text-[13px] shadow-sm active:scale-95"
          >
            <span class="material-symbols-outlined text-[18px]">logout</span> Keluar dari Akun
          </button>

          <div class="text-center mt-6 flex flex-col items-center justify-center opacity-60">
            <span class="material-symbols-outlined text-on-surface-variant text-[24px] mb-1"
              >science</span
            >
            <p class="text-[10px] text-on-surface-variant font-medium tracking-widest uppercase">
              FLUXERA App Version 1.0.0
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const copied = ref(false)

const copyId = () => {
  navigator.clipboard.writeText('101012330125')
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}

const handleLogout = () => {
  // Animasi/Confirm logic bisa ditambah di sini
  router.push('/login')
}
</script>
