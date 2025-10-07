<template>
  <div class="m-0 font-sans bg-gradient-to-br from-[#103b61] to-[#000b0c] text-white min-h-screen flex flex-col">
    <div class="container mx-auto flex-1 px-5 py-10 flex flex-col justify-start items-center text-center">
      <h1 class="mb-1 text-3xl font-bold"><i>Edutechia Team</i></h1>
      <p>
        <a href="mailto:edutechia.id@gmail.com" class="text-[#ffdd57]">edutechia.id@gmail.com</a>
      </p>
      <h3 class="font-normal mb-8">Teknologi Pendidikan – Universitas Pendidikan Indonesia</h3>

      <!-- List Anggota -->
      <ul class="flex flex-wrap justify-center gap-5 list-none p-0 m-0 mb-8 mx-32">
        <li v-for="member in teamMembers" :key="member.id" class="bg-white/10 rounded-xl p-5 w-64 text-center transition duration-300 break-words hover:bg-white/20 hover:-translate-y-1">
          <img :src="member.image" :alt="member.name" class="w-full h-72 object-cover rounded-lg mb-2" />
          <p class="font-semibold">{{ member.name }}</p>
          <p class="text-sm">
            {{ member.email }} <br />
            {{ member.nim }}
          </p>
        </li>
      </ul>

      <RouterLink to="/" class="inline-block px-6 py-3 bg-[#ffdd57] text-black rounded-lg font-bold no-underline transition duration-300 hover:bg-white hover:scale-105"> Kembali </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Data anggota tim
const teamMembers = ref([
  {
    id: 1,
    name: "Gilbran Aldebaran",
    email: "gilbranshauma@gmail.com",
    nim: "2300433",
    image: "images/creator/agil.jpg",
  },
  {
    id: 2,
    name: "Elma Mukhsinah",
    email: "elmamukhsinah0805@gmail.com",
    nim: "2310711",
    image: "images/creator/elma.jpg",
  },
  {
    id: 3,
    name: "Yasmin Hadiyya Fatin Hana",
    email: "yasminhadiyya@gmail.com",
    nim: "2300730",
    image: "images/creator/yasmin.jpg",
  },
  {
    id: 4,
    name: "Illiyyine Zulkarnaen",
    email: "illiyyinezill@gmail.com",
    nim: "2304179",
    image: "images/creator/illiyyine.jpg",
  },
  {
    id: 5,
    name: "Rafa Anindita Azzahra",
    email: "rafaaninditazazhraa@gmail.com",
    nim: "2300188",
    image: "images/creator/rafa.jpg",
  },
  {
    id: 6,
    name: "Gisca Anugrah Yuhendra",
    email: "giscaanugrah@gmail.com",
    nim: "2305235",
    image: "images/creator/gisca.jpg",
  },
]);

// Tahun dinamis
const currentYear = new Date().getFullYear();
</script>

<style scoped>
body {
  font-family: "Inter", sans-serif;
}
</style>
