<script setup>
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen bg-gray-900 text-gray-200 antialiased">
    <!-- Header -->
    <header class="top-0 left-0 right-0 z-10 p-6 flex justify-between items-center px-10 sm:px-32">
      <RouterLink to="/">
        <img src="/images/logo.png" class="w-32" alt="Edutechia Logo" />
      </RouterLink>
      <nav class="flex items-center space-x-6">
        <RouterLink to="/creator" class="font-semibold text-white hover:text-yellow-400 transition cursor-pointer"> Profil Kreator </RouterLink>
      </nav>
    </header>

    <!-- Konten -->
    <main class="flex-grow">
      <RouterView />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>
