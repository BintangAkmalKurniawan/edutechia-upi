<template>
  <footer class="text-center p-4 text-sm bg-white/5">&copy; {{ tahun }} Edutechia. All Rights Reserved.</footer>
</template>
<script setup>
const tahun = new Date().getFullYear();
</script>
