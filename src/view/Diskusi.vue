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
  <div v-if="materi" class="bg-gray-900 text-gray-300 mb-64 font-sans leading-normal tracking-normal">
    <main class="container mx-auto px-6">
      <div class="bg-gray-800 p-8 rounded-lg shadow-lg">
        <RouterLink :to="`/content/${materi.id}`" class="text-yellow-400 hover:underline mb-6 inline-block">&larr; Kembali ke Materi</RouterLink>
        <h1 class="text-4xl font-bold text-white mb-6">Forum Diskusi: {{ materi.judul }}</h1>

        <!-- Padlet -->
        <div v-if="materi.diskusi" class="w-full h-auto overflow-hidden rounded-lg shadow-md">
          <iframe :src="materi.diskusi" frameborder="0" allow="camera;microphone;geolocation;display-capture;clipboard-write" style="width: 100%; height: 608px; display: block; padding: 0; margin: 0"></iframe>
        </div>
        <h3 v-else-if="materi.thumbnail" class="text-2xl font-bold text-white mb-20 mt-20 text-center">Kreator tidak menyediakan forum diskusi</h3>
      </div>
    </main>
  </div>
</template>
