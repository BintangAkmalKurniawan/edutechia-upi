<script setup>
import { ref, onMounted } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import { materis } from "../data/materiStore";

const route = useRoute();
const router = useRouter();
const materi = ref(null);

onMounted(() => {
  const id = parseInt(route.params.id);
  const found = materis.value.find((m) => m.id === id);
  if (!found) {
    router.push("/");
  } else {
    materi.value = found;
  }
});
</script>

<template>
  <div v-if="materi" class="bg-gray-900 text-gray-300 font-sans leading-normal tracking-normal min-h-screen">
    <main class="container mx-auto px-6 mb-20">
      <div class="bg-gray-800 p-8 rounded-lg shadow-lg">
        <!-- Judul Materi -->
        <h1 class="text-4xl font-bold text-white mb-2">{{ materi.judul }}</h1>

        <!-- Info Guru -->
        <div class="mb-6">
          <p class="text-gray-400">
            Dibuat oleh:
            <span class="text-yellow-400 font-semibold hover:underline cursor-pointer">{{ materi.user }}</span>
          </p>
          <p class="text-sm text-gray-500">
            Dipublikasikan pada:
            {{ new Date().toLocaleDateString("id-ID", { day: "2-digit", month: "long", year: "numeric" }) }}
          </p>
        </div>

        <!-- Video -->
        <div v-if="materi.videos" class="mb-8 w-full aspect-video">
          <iframe :src="materi.videos.replace('/view', '/preview')" allow="autoplay" class="w-full h-full rounded-lg shadow-md bg-black"></iframe>
        </div>

        <div v-else-if="materi.thumbnail" class="mb-8">
          <img :src="materi.thumbnail" alt="Thumbnail" class="w-full h-64 object-cover rounded-lg shadow-md" />
        </div>

        <!-- Deskripsi -->
        <div class="prose prose-invert max-w-none">
          <h2 class="text-2xl font-semibold text-gray-200 mb-4">Deskripsi Materi</h2>
          <p>{{ materi.deskripsi }}</p>
        </div>

        <!-- Tombol Aksi -->
        <div class="flex gap-4 prose prose-invert max-w-none">
          <RouterLink :to="`/content/${materi.id}/kuis`" class="px-7 py-4 mt-4 bg-blue-400 font-bold rounded-lg text-white hover:bg-blue-500 transition">Kuis</RouterLink>
          <RouterLink :to="`/content/${materi.id}/diskusi`" class="px-7 py-4 mt-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition"> Forum Diskusi </RouterLink>
        </div>
      </div>
    </main>
  </div>
</template>
