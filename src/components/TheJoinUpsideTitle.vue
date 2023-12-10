<script setup>
import TheUpside from './TheUpside.vue'
import TheJoinTitleClouds from './TheJoinTitleClouds.vue';
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
  height: 50vh;
  background-color: #fff;
}
</style>