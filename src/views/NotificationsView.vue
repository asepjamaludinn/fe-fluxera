<template>
  <div class="notifications-view bg-surface-container-low min-h-screen pb-20">
    <header class="pt-12 pb-4 px-6 flex items-center justify-between bg-white sticky top-0 z-20">
      <div class="flex items-center gap-4">
        <button
          @click="router.back()"
          class="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface hover:bg-surface-container shadow-sm border border-outline-variant transition-colors active:scale-95"
        >
          <span class="material-symbols-outlined">chevron_left</span>
        </button>
        <h1 class="text-2xl font-extrabold text-on-surface font-headline tracking-tight">
          Notifikasi
        </h1>
      </div>
      <button class="text-[13px] font-bold text-primary hover:text-primary-dim transition-colors">
        Tandai Dibaca
      </button>
    </header>

    <div class="px-6 py-2 bg-white z-10 relative">
      <div class="relative group">
        <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <span
            class="material-symbols-outlined text-[20px] text-on-surface-variant/50 group-focus-within:text-primary transition-colors"
            >search</span
          >
        </div>
        <input
          v-model="searchQuery"
          type="text"
          class="w-full pl-11 pr-4 py-3 bg-surface-container-low hover:bg-surface-container border border-outline-variant/50 rounded-xl focus:ring-[2px] focus:ring-primary/15 focus:border-primary outline-none transition-all text-[14px] font-medium text-on-surface"
          placeholder="Cari pesan atau nama reaktor..."
        />
      </div>
    </div>

    <nav
      class="px-6 pt-4 border-b border-outline-variant flex justify-between items-center bg-white z-10 relative shadow-sm shadow-black/5"
    >
      <ul class="flex gap-6 text-[13px] font-label font-bold">
        <li
          class="relative pb-3 cursor-pointer transition-colors"
          :class="
            activeFilter === 'all'
              ? 'text-primary'
              : 'text-on-surface-variant hover:text-on-surface'
          "
          @click="activeFilter = 'all'"
        >
          Semua
          <span class="ml-1.5 bg-primary text-white text-[9px] rounded-full px-2 py-0.5">3</span>
          <div
            v-if="activeFilter === 'all'"
            class="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full"
          ></div>
        </li>
        <li
          class="relative pb-3 cursor-pointer transition-colors"
          :class="
            activeFilter === 'system'
              ? 'text-primary'
              : 'text-on-surface-variant hover:text-on-surface'
          "
          @click="activeFilter = 'system'"
        >
          Sistem IoT
          <div
            v-if="activeFilter === 'system'"
            class="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full"
          ></div>
        </li>
      </ul>

      <div class="relative">
        <button
          @click="showFilterMenu = !showFilterMenu"
          class="pb-3 transition-colors flex items-center gap-1"
          :class="
            isAdvancedFilterActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
          "
        >
          <span class="material-symbols-outlined text-[20px]">tune</span>
          <span
            v-if="isAdvancedFilterActive"
            class="absolute top-0 right-0 w-2 h-2 bg-error rounded-full"
          ></span>
        </button>

        <div v-if="showFilterMenu" @click="showFilterMenu = false" class="fixed inset-0 z-40"></div>

        <div
          v-if="showFilterMenu"
          class="absolute right-0 top-8 bg-white border border-outline-variant shadow-xl rounded-2xl w-48 overflow-hidden z-50 flex flex-col p-1 animate-fade-in-up"
        >
          <button
            v-for="filter in advancedFilters"
            :key="filter.value"
            @click="selectFilter(filter.value)"
            class="w-full text-left px-4 py-3 text-[12px] font-bold rounded-xl transition-colors flex items-center justify-between"
            :class="
              activeFilter === filter.value
                ? 'bg-primary/10 text-primary'
                : 'text-on-surface hover:bg-surface-container'
            "
          >
            {{ filter.label }}
            <span v-if="activeFilter === filter.value" class="material-symbols-outlined text-[16px]"
              >check</span
            >
          </button>
        </div>
      </div>
    </nav>

    <div class="px-4 py-4 space-y-2 relative z-0">
      <div v-if="filteredNotifications.length === 0" class="text-center py-12">
        <span class="material-symbols-outlined text-[48px] text-on-surface-variant/30 mb-3"
          >notifications_off</span
        >
        <p class="text-[14px] font-medium text-on-surface-variant">
          Tidak ada notifikasi ditemukan.
        </p>
      </div>

      <div
        v-for="notif in filteredNotifications"
        :key="notif.id"
        class="flex items-start gap-4 p-4 rounded-2xl transition-colors cursor-pointer"
        :class="
          notif.unread
            ? 'bg-primary/5 border border-primary/10'
            : 'bg-transparent hover:bg-surface-container/50 border border-transparent'
        "
      >
        <div class="relative shrink-0 mt-1">
          <div
            class="w-11 h-11 rounded-full flex items-center justify-center border shadow-sm"
            :class="getIconStyle(notif.type).bg"
          >
            <span
              class="material-symbols-outlined text-[22px]"
              :class="getIconStyle(notif.type).text"
            >
              {{ getIconStyle(notif.type).icon }}
            </span>
          </div>
          <span
            v-if="notif.unread"
            class="absolute -top-1 -right-1 w-3.5 h-3.5 bg-error rounded-full border-2 border-[#fdfdfd]"
          ></span>
        </div>

        <div class="flex-grow">
          <div class="flex justify-between items-start gap-2 mb-1">
            <h3 class="font-bold text-[14px] text-on-surface leading-snug">
              {{ notif.title }}
            </h3>
            <span class="text-[11px] font-semibold text-on-surface-variant/80 shrink-0 mt-0.5">
              {{ notif.time }}
            </span>
          </div>

          <p class="text-[13px] text-on-surface-variant leading-relaxed">
            <span v-if="notif.device" class="font-bold text-primary mr-1">{{ notif.device }}</span>
            <span v-html="notif.message"></span>
          </p>

          <div v-if="notif.type === 'alert'" class="flex gap-2 mt-3">
            <button
              class="bg-error text-white font-bold text-[12px] px-4 py-2 rounded-lg active:scale-95 transition-transform"
            >
              Cek Reaktor
            </button>
          </div>

          <div
            v-if="notif.type === 'maintenance'"
            class="flex items-center gap-2 mt-3 bg-white rounded-xl p-2.5 border border-outline-variant shadow-sm w-fit"
          >
            <div
              class="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center shrink-0"
            >
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=BudiTeknisi"
                alt="Teknisi"
                class="w-full h-full object-cover rounded-full p-0.5"
              />
            </div>
            <div>
              <p class="text-[12px] font-bold text-on-surface leading-none">Budi Santoso</p>
              <p class="text-[11px] text-on-surface-variant mt-0.5 font-medium">Teknisi FLUXERA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const searchQuery = ref('')
const activeFilter = ref('all')
const showFilterMenu = ref(false)

const advancedFilters = [
  { label: 'AI & Resep', value: 'ai_insight' },
  { label: 'Peringatan Sensor', value: 'alert' },
  { label: 'Jadwal Panen', value: 'harvest' },
  { label: 'Info Teknisi', value: 'maintenance' },
]

const isAdvancedFilterActive = computed(() => {
  return ['ai_insight', 'alert', 'harvest', 'maintenance'].includes(activeFilter.value)
})

const selectFilter = (value) => {
  activeFilter.value = value
  showFilterMenu.value = false
}

const getIconStyle = (type) => {
  const styles = {
    ai_insight: {
      bg: 'bg-primary/10 border-primary/20',
      text: 'text-primary',
      icon: 'auto_awesome',
    },
    alert: { bg: 'bg-error/10 border-error/20', text: 'text-error', icon: 'warning' },
    harvest: { bg: 'bg-emerald-50 border-emerald-100', text: 'text-emerald-600', icon: 'eco' },
    maintenance: { bg: 'bg-blue-50 border-blue-100', text: 'text-blue-600', icon: 'engineering' },
    system: {
      bg: 'bg-surface-container-high border-outline-variant',
      text: 'text-on-surface-variant',
      icon: 'settings_ethernet',
    },
  }
  return styles[type] || styles.system
}

// dummy dulu
const allNotifications = ref([
  {
    id: 1,
    type: 'ai_insight',
    title: 'Resep AI Berhasil Diterapkan',
    device: '[FLX-8821]',
    message:
      'Tingkat molase telah disesuaikan otomatis untuk memaksimalkan nutrisi. Estimasi panen lebih cepat 1 hari.',
    time: 'Baru saja',
    unread: true,
  },
  {
    id: 2,
    type: 'alert',
    title: 'Peringatan: Level pH Terlalu Asam',
    device: '[FLX-8821]',
    message:
      'Sensor mendeteksi pH turun ke <b>3.8</b>. Segera lakukan pengecekan pada cairan fermentasi.',
    time: '2 jam lalu',
    unread: true,
  },
  {
    id: 3,
    type: 'harvest',
    title: 'Pakan Fermentasi Siap Panen!',
    device: '[FLX-8821]',
    message:
      'Proses fermentasi 7 hari telah selesai. 50 Liter pakan cair siap dipindahkan ke gudang jerigen.',
    time: '5 jam lalu',
    unread: true,
  },
  {
    id: 4,
    type: 'maintenance',
    title: 'Jadwal Kalibrasi Sensor',
    message:
      'Teknisi kami akan datang besok pukul 10:00 WIB untuk melakukan kalibrasi rutin sensor pH dan Suhu.',
    time: '1 hari lalu',
    unread: false,
  },
  {
    id: 5,
    type: 'system',
    title: 'Pembaruan Firmware v1.2',
    device: '[Global]',
    message:
      'Sistem Reaktor Anda telah diperbarui secara <i>Over-The-Air</i> (OTA) untuk optimasi koneksi WiFi.',
    time: '3 hari lalu',
    unread: false,
  },
])

const filteredNotifications = computed(() => {
  return allNotifications.value.filter((notif) => {
    // Logika Filter Kategori
    const matchType = activeFilter.value === 'all' || notif.type === activeFilter.value

    const keyword = searchQuery.value.toLowerCase()
    const matchSearch =
      notif.title.toLowerCase().includes(keyword) ||
      notif.message.toLowerCase().includes(keyword) ||
      (notif.device && notif.device.toLowerCase().includes(keyword))

    return matchType && matchSearch
  })
})
</script>

<style scoped>
.fill {
  font-variation-settings: 'FILL' 1;
}

.animate-fade-in-up {
  animation: fadeInUp 0.2s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
