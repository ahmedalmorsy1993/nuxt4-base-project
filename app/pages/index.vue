<template>
  <section>
    <!-- Hero section loads immediately since it's above the fold -->
    <LazyHomeHeroSection />
    <LazyHomeProducts />
  </section>
</template>

<script setup lang="ts">
definePageMeta({ name: "HomePage" });
</script>

