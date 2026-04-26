<template>
  <div class="px-6 pb-8">
    <header class="pt-12 pb-6 flex flex-col items-center text-center">
      <div class="relative">
        <div
          class="w-24 h-24 rounded-[2rem] border-4 border-primary/20 p-1 bg-white shadow-xl mb-4 relative z-10"
        >
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Asep"
            alt="Avatar"
            class="w-full h-full object-cover rounded-[1.8rem]"
          />
        </div>
        <div
          class="absolute bottom-3 -right-2 bg-emerald-500 text-white w-7 h-7 rounded-full flex items-center justify-center border-2 border-[#fdfdfd] z-20 shadow-sm"
        >
          <span class="material-symbols-outlined text-[16px]">verified</span>
        </div>
      </div>

      <h1 class="text-xl font-headline font-extrabold text-on-surface">Asep Jamaludin</h1>

      <div class="flex items-center gap-1.5 mt-1.5 text-on-surface-variant justify-center">
        <span class="material-symbols-outlined text-[14px] text-primary">location_on</span>
        <p class="text-[12px] font-medium font-label">Peternakan Lembang, Bandung</p>
      </div>
      <p
        class="text-[10px] bg-primary/10 text-primary font-bold px-2.5 py-1 rounded-md mt-3 uppercase tracking-widest inline-block border border-primary/20"
      >
        Peternak Prioritas
      </p>
    </header>

    <div class="grid grid-cols-2 gap-3 mb-6">
      <div class="bg-white border border-outline-variant/60 rounded-2xl p-4 text-center shadow-sm">
        <span
          class="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest block mb-1"
          >Total Diolah</span
        >
        <span class="text-xl font-headline font-extrabold text-on-surface"
          >1.250 <span class="text-xs font-medium text-on-surface-variant">L</span></span
        >
      </div>
      <div class="bg-white border border-outline-variant/60 rounded-2xl p-4 text-center shadow-sm">
        <span
          class="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest block mb-1"
          >Reaktor Aktif</span
        >
        <span class="text-xl font-headline font-extrabold text-emerald-600"
          >1 <span class="text-xs font-medium text-emerald-600/70">Unit</span></span
        >
      </div>
    </div>

    <div
      class="bg-surface-container rounded-[2rem] p-6 mb-8 border border-outline-variant/30 relative overflow-hidden"
    >
      <div
        class="absolute -right-8 -top-8 w-24 h-24 bg-primary/10 rounded-full blur-2xl pointer-events-none"
      ></div>

      <div class="flex items-center justify-between mb-4 relative z-10">
        <span class="text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">
          Info Langganan Alat
        </span>
        <span
          class="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2.5 py-1 rounded-md border border-emerald-100 uppercase flex items-center gap-1"
        >
          <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
          Aktif
        </span>
      </div>
      <div class="flex items-center gap-4 relative z-10">
        <div
          class="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm border border-outline-variant/50"
        >
          <span class="material-symbols-outlined text-[24px]">workspace_premium</span>
        </div>
        <div class="flex-1">
          <p class="text-[14px] font-bold text-on-surface leading-tight">Paket HaaS Silver</p>
          <div class="flex justify-between items-end mt-1">
            <p class="text-[11px] text-on-surface-variant font-medium">Jatuh tempo: 15 Mei 2026</p>
          </div>
        </div>
      </div>
    </div>

    <div class="space-y-6">
      <div>
        <h3
          class="px-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-3"
        >
          Akun & Preferensi
        </h3>
        <div class="space-y-2">
          <button
            class="w-full flex items-center justify-between p-4 bg-white hover:bg-surface-container rounded-2xl transition-all group border border-transparent hover:border-outline-variant/50"
          >
            <div class="flex items-center gap-4">
              <div
                class="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center group-hover:bg-primary/10 transition-colors"
              >
                <span
                  class="material-symbols-outlined text-[18px] text-on-surface-variant group-hover:text-primary"
                  >person</span
                >
              </div>
              <span class="text-[13px] font-semibold text-on-surface"
                >Edit Profil & Peternakan</span
              >
            </div>
            <span class="material-symbols-outlined text-[20px] text-on-surface-variant/50"
              >chevron_right</span
            >
          </button>

          <button
            class="w-full flex items-center justify-between p-4 bg-white hover:bg-surface-container rounded-2xl transition-all group border border-transparent hover:border-outline-variant/50"
          >
            <div class="flex items-center gap-4">
              <div
                class="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center group-hover:bg-primary/10 transition-colors"
              >
                <span
                  class="material-symbols-outlined text-[18px] text-on-surface-variant group-hover:text-primary"
                  >shield_lock</span
                >
              </div>
              <span class="text-[13px] font-semibold text-on-surface">Keamanan PIN & Akses</span>
            </div>
            <span class="material-symbols-outlined text-[20px] text-on-surface-variant/50"
              >chevron_right</span
            >
          </button>

          <button
            class="w-full flex items-center justify-between p-4 bg-white hover:bg-surface-container rounded-2xl transition-all group border border-transparent hover:border-outline-variant/50"
          >
            <div class="flex items-center gap-4">
              <div
                class="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center group-hover:bg-primary/10 transition-colors"
              >
                <span
                  class="material-symbols-outlined text-[18px] text-on-surface-variant group-hover:text-primary"
                  >notifications</span
                >
              </div>
              <span class="text-[13px] font-semibold text-on-surface"
                >Preferensi Notifikasi AI</span
              >
            </div>
            <span class="material-symbols-outlined text-[20px] text-on-surface-variant/50"
              >chevron_right</span
            >
          </button>
        </div>
      </div>

      <div>
        <h3
          class="px-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-3"
        >
          Bantuan & Dukungan
        </h3>
        <div class="space-y-2">
          <button
            class="w-full flex items-center justify-between p-4 bg-white hover:bg-surface-container rounded-2xl transition-all group border border-transparent hover:border-outline-variant/50"
          >
            <div class="flex items-center gap-4">
              <div
                class="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center group-hover:bg-primary/10 transition-colors"
              >
                <span
                  class="material-symbols-outlined text-[18px] text-on-surface-variant group-hover:text-primary"
                  >support_agent</span
                >
              </div>
              <span class="text-[13px] font-semibold text-on-surface">Pusat Bantuan & FAQ</span>
            </div>
            <span class="material-symbols-outlined text-[20px] text-on-surface-variant/50"
              >chevron_right</span
            >
          </button>
        </div>
      </div>

      <div class="pt-4 pb-8">
        <button
          class="w-full flex items-center justify-center gap-2 p-4 bg-error/5 hover:bg-error/10 text-error rounded-2xl transition-all font-bold text-[13px] active:scale-[0.98]"
        >
          <span class="material-symbols-outlined text-[18px]">logout</span> Keluar dari Akun
        </button>

        <p
          class="text-center text-[10px] text-on-surface-variant/60 font-medium tracking-widest mt-6 uppercase"
        >
          FLUXERA App Version 1.0.0
        </p>
      </div>
    </div>
  </div>
</template>
