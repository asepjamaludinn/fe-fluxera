<template>
  <div class="min-h-screen flex flex-col bg-[#fdfdfd] relative px-6 overflow-hidden">
    <div
      class="absolute -top-[20%] -left-[10%] w-[120%] h-[50%] bg-gradient-to-br from-primary/60 to-primary-dim rounded-[100%] z-0 blur-3xl opacity-30 pointer-events-none"
    ></div>
    <div
      class="absolute top-[10%] right-[5%] w-40 h-40 bg-white rounded-full z-0 blur-2xl opacity-80 pointer-events-none"
    ></div>

    <div class="relative z-20 pt-8 pb-2 flex items-center">
      <button
        @click="router.back()"
        class="w-10 h-10 rounded-full bg-white/60 backdrop-blur-md flex items-center justify-center text-on-surface hover:bg-white shadow-sm transition-all border border-outline-variant/30 active:scale-90"
      >
        <span class="material-symbols-outlined">chevron_left</span>
      </button>
    </div>

    <div class="flex-1 flex flex-col justify-center relative z-10 pb-12 max-w-md mx-auto w-full">
      <div class="text-center mb-8">
        <div
          class="w-16 h-16 bg-white/80 rounded-[1.25rem] mx-auto flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] mb-5 border border-white backdrop-blur-md"
        >
          <span class="material-symbols-outlined text-[32px] text-primary">sensors</span>
        </div>
        <h1
          class="text-2xl font-extrabold tracking-tight text-on-surface mb-2 font-headline drop-shadow-sm"
        >
          Aktivasi Perangkat
        </h1>
        <p
          class="text-[13px] text-on-surface-variant font-label font-medium tracking-tight leading-relaxed px-4"
        >
          Hubungkan reaktor FLUXERA fisik Anda<br />dengan memasukkan detail di bawah ini.
        </p>
      </div>

      <div
        class="bg-white/70 backdrop-blur-xl rounded-[2rem] p-6 sm:p-8 shadow-[0_8px_40px_rgb(0,0,0,0.04)] border border-white"
      >
        <div
          class="bg-primary/10 border border-primary/20 rounded-xl p-3 mb-6 flex items-start gap-2.5"
        >
          <span class="material-symbols-outlined text-primary text-[18px] mt-0.5"
            >qr_code_scanner</span
          >
          <p class="text-[11px] text-on-primary-container leading-relaxed font-medium">
            SN dan PIN dapat ditemukan di stiker garansi pada badan mesin atau buku panduan.
          </p>
        </div>

        <form class="space-y-5" @submit.prevent="handleAktivasi">
          <div class="space-y-1.5">
            <label
              class="text-[12px] font-bold text-on-surface-variant font-label uppercase tracking-widest ml-1"
            >
              Serial Number (SN)
            </label>
            <div class="relative group">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span
                  class="material-symbols-outlined text-[20px] text-on-surface-variant/50 group-focus-within:text-primary transition-colors"
                  >tag</span
                >
              </div>
              <input
                v-model="aktivasiForm.sn"
                type="text"
                class="w-full pl-11 pr-4 py-3.5 bg-white hover:bg-surface-container-low border border-outline-variant/50 rounded-xl focus:ring-[3px] focus:ring-primary/15 focus:border-primary outline-none transition-all text-[14px] font-bold text-on-surface uppercase placeholder:font-medium placeholder:text-on-surface-variant/40 shadow-sm"
                placeholder="CONTOH: FLX-2026-001"
                required
              />
            </div>
          </div>

          <div class="space-y-1.5">
            <div class="flex justify-between items-center ml-1">
              <label
                class="text-[12px] font-bold text-on-surface-variant font-label uppercase tracking-widest"
              >
                PIN Perangkat
              </label>
            </div>
            <div class="relative group">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span
                  class="material-symbols-outlined text-[20px] text-on-surface-variant/50 group-focus-within:text-primary transition-colors"
                  >lock</span
                >
              </div>
              <input
                v-model="aktivasiForm.pin"
                :type="showPin ? 'text' : 'password'"
                maxlength="6"
                class="w-full pl-11 pr-12 py-3.5 bg-white hover:bg-surface-container-low border border-outline-variant/50 rounded-xl focus:ring-[3px] focus:ring-primary/15 focus:border-primary outline-none transition-all text-[14px] font-medium text-on-surface tracking-[0.3em] shadow-sm"
                placeholder="6 Digit Angka"
                required
              />
              <button
                type="button"
                @click="showPin = !showPin"
                class="absolute inset-y-0 right-0 pr-4 flex items-center text-on-surface-variant/50 hover:text-on-surface transition-colors focus:outline-none"
              >
                <span class="material-symbols-outlined text-[20px]">{{
                  showPin ? 'visibility_off' : 'visibility'
                }}</span>
              </button>
            </div>
          </div>

          <button
            type="submit"
            class="w-full bg-primary hover:bg-primary-dim text-on-primary font-bold py-3.5 rounded-xl transition-all shadow-md shadow-primary/20 text-[15px] mt-4 active:scale-[0.98] flex items-center justify-center gap-2"
          >
            Hubungkan Sekarang
            <span class="material-symbols-outlined text-[18px]">linked_services</span>
          </button>
        </form>
      </div>

      <p
        class="text-center text-[12px] text-on-surface-variant/70 mt-8 leading-relaxed font-medium px-4"
      >
        Mengalami kendala saat aktivasi alat? <br />
        <router-link
          to="#"
          class="text-primary font-bold hover:text-primary-dim hover:underline transition-colors"
        >
          Hubungi Dukungan Teknis
        </router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const aktivasiForm = reactive({
  sn: '',
  pin: '',
})

// State untuk show/hide PIN
const showPin = ref(false)

const handleAktivasi = () => {
  // Simulasi validasi sukses
  alert('Alat berhasil dihubungkan! Menunggu persetujuan Admin.')
  router.push('/')
}
</script>
