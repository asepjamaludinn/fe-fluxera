<template>
  <div class="min-h-screen flex flex-col bg-[#fdfdfd] relative px-6 overflow-hidden">
    <div
      class="absolute -top-[20%] -left-[10%] w-[120%] h-[50%] bg-gradient-to-br from-primary/60 to-primary-dim rounded-[100%] z-0 blur-3xl opacity-30 pointer-events-none"
    ></div>
    <div
      class="absolute top-[10%] right-[5%] w-40 h-40 bg-white rounded-full z-0 blur-2xl opacity-80 pointer-events-none"
    ></div>

    <div class="flex-1 flex flex-col justify-center relative z-10 py-12 max-w-md mx-auto w-full">
      <div class="text-center mb-8">
        <div
          class="w-16 h-16 bg-white/80 rounded-[1.25rem] mx-auto flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] mb-5 border border-white backdrop-blur-md"
        >
          <span class="material-symbols-outlined text-[32px] text-primary">science</span>
        </div>
        <h1
          class="text-2xl font-extrabold tracking-tight text-on-surface mb-2 font-headline drop-shadow-sm"
        >
          Welcome to FLUXERA
        </h1>
        <p
          class="text-[13px] text-on-surface-variant font-label font-medium tracking-tight leading-relaxed"
        >
          Sign up or login below to manage your<br />reaktor, task, and productivity
        </p>
      </div>

      <div
        class="bg-white/70 backdrop-blur-xl rounded-[2rem] p-6 sm:p-8 shadow-[0_8px_40px_rgb(0,0,0,0.04)] border border-white"
      >
        <div class="flex border-b border-outline-variant/50 mb-8">
          <router-link
            to="/login"
            class="flex-1 text-center py-3 text-sm font-semibold border-b-2 border-transparent text-on-surface-variant/50 hover:text-on-surface transition-colors font-label"
            >Login</router-link
          >
          <button
            class="flex-1 text-center py-3 text-sm font-bold border-b-2 border-primary text-primary font-label"
          >
            Sign Up
          </button>
        </div>

        <form @submit.prevent="handleRegister" class="space-y-4">
          <div class="relative group">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span
                class="material-symbols-outlined text-[20px] text-on-surface-variant/50 group-focus-within:text-primary transition-colors"
                >person</span
              >
            </div>
            <input
              v-model="regForm.name"
              type="text"
              class="w-full pl-11 pr-4 py-3.5 bg-white hover:bg-surface-container-low border border-outline-variant/50 rounded-xl focus:ring-[3px] focus:ring-primary/15 focus:border-primary outline-none transition-all text-[14px] font-medium text-on-surface shadow-sm"
              placeholder="Your name"
              required
            />
          </div>

          <div class="relative group">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span
                class="material-symbols-outlined text-[20px] text-on-surface-variant/50 group-focus-within:text-primary transition-colors"
                >mail</span
              >
            </div>
            <input
              v-model="regForm.email"
              type="email"
              class="w-full pl-11 pr-4 py-3.5 bg-white hover:bg-surface-container-low border border-outline-variant/50 rounded-xl focus:ring-[3px] focus:ring-primary/15 focus:border-primary outline-none transition-all text-[14px] font-medium text-on-surface shadow-sm"
              placeholder="Enter your email"
              required
            />
          </div>

          <div class="relative group">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span
                class="material-symbols-outlined text-[20px] text-on-surface-variant/50 group-focus-within:text-primary transition-colors"
                >lock</span
              >
            </div>
            <input
              v-model="regForm.password"
              :type="showPassword ? 'text' : 'password'"
              class="w-full pl-11 pr-12 py-3.5 bg-white hover:bg-surface-container-low border border-outline-variant/50 rounded-xl focus:ring-[3px] focus:ring-primary/15 focus:border-primary outline-none transition-all text-[14px] font-medium text-on-surface shadow-sm"
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute inset-y-0 right-0 pr-4 flex items-center text-on-surface-variant/50 hover:text-on-surface transition-colors focus:outline-none"
            >
              <span class="material-symbols-outlined text-[20px]">{{
                showPassword ? 'visibility_off' : 'visibility'
              }}</span>
            </button>
          </div>

          <div class="relative group">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span
                class="material-symbols-outlined text-[20px] text-on-surface-variant/50 group-focus-within:text-primary transition-colors"
                >lock</span
              >
            </div>
            <input
              v-model="regForm.confirmPassword"
              :type="showConfirmPassword ? 'text' : 'password'"
              class="w-full pl-11 pr-12 py-3.5 bg-white hover:bg-surface-container-low border border-outline-variant/50 rounded-xl focus:ring-[3px] focus:ring-primary/15 focus:border-primary outline-none transition-all text-[14px] font-medium text-on-surface shadow-sm"
              placeholder="Confirm your password"
              required
            />
            <button
              type="button"
              @click="showConfirmPassword = !showConfirmPassword"
              class="absolute inset-y-0 right-0 pr-4 flex items-center text-on-surface-variant/50 hover:text-on-surface transition-colors focus:outline-none"
            >
              <span class="material-symbols-outlined text-[20px]">{{
                showConfirmPassword ? 'visibility_off' : 'visibility'
              }}</span>
            </button>
          </div>

          <div class="pt-2 pb-1 space-y-2">
            <div class="flex items-center gap-2">
              <span
                class="material-symbols-outlined text-[16px] text-on-surface-variant/60 font-bold fill"
                >check_circle</span
              >
              <span class="text-[12px] text-on-surface-variant font-medium"
                >At least 8 characters</span
              >
            </div>
            <div class="flex items-center gap-2">
              <span
                class="material-symbols-outlined text-[16px] text-on-surface-variant/60 font-bold fill"
                >check_circle</span
              >
              <span class="text-[12px] text-on-surface-variant font-medium">At least 1 number</span>
            </div>
            <div class="flex items-center gap-2">
              <span
                class="material-symbols-outlined text-[16px] text-on-surface-variant/60 font-bold fill"
                >check_circle</span
              >
              <span class="text-[12px] text-on-surface-variant font-medium"
                >Both upper and lower case letters</span
              >
            </div>
          </div>

          <label class="flex items-start gap-3 pt-4 pb-2 cursor-pointer group">
            <div class="relative flex items-center justify-center mt-0.5 shrink-0">
              <input
                type="checkbox"
                v-model="regForm.agreeTerms"
                class="peer appearance-none w-4 h-4 border border-outline-variant rounded bg-white checked:bg-primary checked:border-primary transition-colors cursor-pointer"
                required
              />
              <span
                class="material-symbols-outlined text-white text-[12px] absolute pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity font-bold"
                >check</span
              >
            </div>
            <span
              class="text-[11px] text-on-surface-variant/80 leading-relaxed font-medium group-hover:text-on-surface-variant transition-colors"
            >
              By agreeing to the terms and conditions, you are entering into a legally binding
              contract with the service provider.
            </span>
          </label>

          <button
            type="submit"
            class="w-full bg-primary hover:bg-primary-dim text-on-primary font-bold py-3.5 rounded-xl transition-all shadow-md shadow-primary/20 text-[15px] mt-2 active:scale-[0.98]"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const regForm = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreeTerms: false,
})

const showPassword = ref(false)
const showConfirmPassword = ref(false)

const handleRegister = () => {
  if (regForm.password !== regForm.confirmPassword) {
    alert('Passwords do not match!')
    return
  }

  router.push('/')
}
</script>
