<template>
  <div
    class="bg-primary pt-12 pb-28 px-6 rounded-b-[2.5rem] relative z-0 shadow-lg shadow-primary/20"
  >
    <div class="flex justify-between items-center mb-10">
      <div class="flex items-center gap-3">
        <div
          class="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-white/20 shrink-0 p-0.5 shadow-sm"
        >
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Asep"
            alt="Avatar"
            class="w-full h-full object-cover rounded-full"
          />
        </div>
        <div>
          <p class="text-[#5c471c] font-bold text-[10px] uppercase tracking-widest font-label">
            Akun Peternak
          </p>
          <h2 class="text-[#1a1c23] font-headline font-bold text-base leading-tight">
            Asep Jamaludin
          </h2>
        </div>
      </div>

      <div class="flex gap-3">
        <router-link
          to="/notifications"
          class="w-10 h-10 rounded-full bg-white/30 hover:bg-white/40 flex items-center justify-center text-[#1a1c23] transition-colors relative border border-white/40 backdrop-blur-sm active:scale-95"
        >
          <span class="material-symbols-outlined text-[20px]">notifications</span>
          <span
            class="absolute top-2.5 right-2.5 w-2 h-2 bg-error rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)] border border-white"
          ></span>
        </router-link>
        <router-link
          to="/profil"
          class="w-10 h-10 rounded-full bg-white/30 hover:bg-white/40 flex items-center justify-center text-[#1a1c23] transition-colors border border-white/40 backdrop-blur-sm active:scale-95"
        >
          <span class="material-symbols-outlined text-[20px]">settings</span>
        </router-link>
      </div>
    </div>

    <div class="mb-2 animate-fade-in-up">
      <h1
        class="text-4xl text-[#1a1c23] font-headline font-extrabold tracking-tight mb-4 drop-shadow-sm"
      >
        Selamat siang, Pak Asep! 👋
      </h1>
      <div
        class="bg-white/30 rounded-xl p-3 border border-white/40 backdrop-blur-md inline-block shadow-sm"
      >
        <p class="text-[#3a2d12] text-xs italic font-body font-medium">
          "Sedikit demi sedikit limbah diolah, lama-lama jadi rupiah."
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.5s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
