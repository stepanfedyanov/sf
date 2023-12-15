<script setup>
import TheUpside from './TheUpside.vue'
import TheJoinTitleClouds from './TheJoinTitleClouds.vue'
</script>

<template>
  <section class="join-title">
    <!-- Sticky clouds -->
    <TheJoinTitleClouds />

    <!-- Text -->
    <TheUpside />
  </section>
</template>

<style lang="scss">
.join-title {
  width: 100%;
  position: relative;
  height: 80vh;
  @media (max-width: 500px) {
    height: 30vh;
    min-height: 350px;
  }
  background: linear-gradient(to bottom, transparent 20%, #f2f3f5 100%);
}
</style>
