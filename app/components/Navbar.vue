<template>
  <nav
    class="flex justify-between items-center p-4 bg-gray-100 text-gray-800 min-h-[80px]"
  >
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
  </nav>
</template>

<script setup>
defineOptions({ name: "Navbar" });
</script>

<style lang="scss" scoped>
</style>