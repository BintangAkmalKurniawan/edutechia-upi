<script setup>
import { materis } from "../data/materiStore";
</script>
<template>
  <div class="antialiased bg-gray-900 text-gray-200 min-h-screen relative">
    <!-- Hero Section -->
    <div class="relative top-[-100px] h-[600px] flex items-center justify-center text-center bg-cover bg-center">
      <div class="absolute inset-0 bg-gray-800 opacity-60"></div>
      <div class="relative z-10 px-4">
        <h1 class="text-5xl font-extrabold text-white">Selamat Datang di Edutechia</h1>
        <p class="mt-4 text-xl text-gray-300">Platform pembelajaran online untuk masa depan Anda.</p>
      </div>
    </div>

    <!-- Content Section -->
    <div class="bg-gray-900 text-gray-200 min-h-screen">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div v-if="materis.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <RouterLink v-for="materi in materis" :key="materi.id" :to="`/content/${materi.id}`" class="bg-gray-800 rounded-lg shadow-lg hover:-translate-y-2 transition-all duration-300 overflow-hidden">
            <img :src="materi.thumbnail" class="w-full h-48 object-cover" />
            <div class="p-6 flex flex-col flex-grow">
              <h3 class="font-bold text-xl text-white">{{ materi.judul }}</h3>
              <p class="text-sm text-gray-400 mt-1">Oleh: {{ materi.user }}</p>
              <p class="text-gray-300 mt-2">
                {{ materi.deskripsi.length > 100 ? materi.deskripsi.slice(0, 100) + "..." : materi.deskripsi }}
              </p>
              <div class="text-right mt-4">
                <RouterLink :to="`/content/${materi.id}`" class="font-semibold text-yellow-400"> Pelajari Selengkapnya → </RouterLink>
              </div>
            </div>
          </RouterLink>
        </div>
        <p v-else class="text-center text-gray-400">Belum ada materi.</p>
      </div>
    </div>
  </div>
</template>
