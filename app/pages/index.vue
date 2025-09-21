<template>
  <section>
    <!-- Hero section loads immediately since it's above the fold -->
    <LazyHomeHeroSection hydrate-on-visible />
    <LazyHomeProducts :hydrate-on-visible="{ threshold: 0.1 }" />
  </section>
</template>

<script setup lang="ts">
definePageMeta({ name: "HomePage" });
</script>

