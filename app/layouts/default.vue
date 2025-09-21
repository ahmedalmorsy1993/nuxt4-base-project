<template>
  <main>
    <LazyNavbar />
    <slot />
    <LazyFooter />
  </main>
</template>

<script setup lang="ts">
defineOptions({ name: "DefaultLayout" });
</script>

<style lang="scss" scoped>
</style>