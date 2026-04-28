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
          <button
            class="flex-1 text-center py-3 text-sm font-bold border-b-2 border-primary text-primary font-label"
          >
            Login
          </button>
          <router-link
            to="/register"
            class="flex-1 text-center py-3 text-sm font-semibold border-b-2 border-transparent text-on-surface-variant/50 hover:text-on-surface transition-colors font-label"
            >Sign Up</router-link
          >
        </div>

        <div class="flex flex-col space-y-3 mb-6">
          <button
            class="w-full flex justify-center gap-3 py-3.5 bg-white hover:bg-surface-container text-on-surface font-bold rounded-xl transition-all shadow-sm border border-outline-variant/50 text-[14px] items-center"
          >
            <svg class="w-5 h-5" viewBox="0 0 256 315" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M213.803 167.03c.442 47.58 41.74 63.413 42.147 63.615-.35 1.116-6.599 22.563-21.757 44.716-13.104 19.153-26.705 38.235-48.24 38.634-21.144.391-27.953-12.471-52.133-12.471-24.196 0-31.728 12.065-51.72 12.866-20.737.814-36.312-21.144-49.548-40.235-27.104-39.22-47.76-110.88-19.908-159.15 13.838-24.004 38.511-39.231 65.464-39.63 20.323-.39 39.509 13.67 52.133 13.67 12.613 0 35.833-16.821 60.294-14.328 10.221.415 38.913 4.125 57.361 31.157-1.488.923-34.251 20-33.803 61.165zM173.993 47.16c11.047-13.346 18.44-31.878 16.41-50.368-15.89.643-35.092 10.58-46.49 23.89-10.183 11.76-19.068 30.597-16.678 48.702 17.73 1.372 35.736-8.9 46.758-22.224z"
                fill="currentColor"
              />
            </svg>
            Login with Apple
          </button>
          <button
            class="w-full flex justify-center gap-3 py-3.5 bg-white hover:bg-surface-container text-on-surface font-bold rounded-xl transition-all shadow-sm border border-outline-variant/50 text-[14px] items-center"
          >
            <svg class="w-5 h-5" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                fill="#FFC107"
              />
              <path
                d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2c-7.202 0-13.432 3.498-17.694 12.691z"
                fill="#FF3D00"
              />
              <path
                d="M24 46c5.6 0 10.6-2.1 14.5-5.5l-6.4-6.4C29.9 35.9 27.1 37 24 37c-5.039 0-9.345-3.108-11.123-7.51l-6.571 4.819C10.568 42.502 16.798 46 24 46z"
                fill="#4CAF50"
              />
              <path
                d="M44.5 20H24v8.5h11.8c-.8 2.2-2.1 4.1-3.7 5.5l6.4 6.4C43 36.4 46 31 46 24c0-1.3-.2-2.7-.5-4z"
                fill="#1976D2"
              />
            </svg>
            Login with Google
          </button>
        </div>

        <div class="relative flex items-center mb-6">
          <div class="flex-grow border-t border-outline-variant/50"></div>
          <span
            class="bg-white/70 backdrop-blur-xl px-4 text-[11px] font-medium text-on-surface-variant/70 font-label"
            >or continue with email</span
          >
          <div class="flex-grow border-t border-outline-variant/50"></div>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-4">
          <div class="relative group">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span
                class="material-symbols-outlined text-[20px] text-on-surface-variant/50 group-focus-within:text-primary transition-colors"
                >mail</span
              >
            </div>
            <input
              v-model="loginForm.email"
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
              v-model="loginForm.password"
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

          <div class="text-left mt-1">
            <router-link
              to="#"
              class="text-[12px] font-medium text-on-surface-variant hover:text-primary transition-colors"
            >
              Forgot Password?
            </router-link>
          </div>

          <button
            type="submit"
            class="w-full bg-primary hover:bg-primary-dim text-on-primary font-bold py-3.5 rounded-xl transition-all shadow-md shadow-primary/20 text-[15px] mt-2 active:scale-[0.98]"
          >
            Login
          </button>
        </form>
        <p
          class="text-center text-[12px] text-on-surface-variant/70 mt-8 leading-relaxed font-medium"
        >
          By signing up, you agree to our <br />
          <router-link
            to="#"
            class="text-primary font-bold hover:text-primary-dim hover:underline transition-colors"
          >
            Terms of service
          </router-link>
          and
          <router-link
            to="#"
            class="text-primary font-bold hover:text-primary-dim hover:underline transition-colors"
          >
            Privacy policy
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const loginForm = reactive({
  email: '',
  password: '',
})

// State untuk toggle hide/show password
const showPassword = ref(false)

const handleLogin = () => {
  // Simulasi redirect ke dashboard utama
  router.push('/')
}
</script>
