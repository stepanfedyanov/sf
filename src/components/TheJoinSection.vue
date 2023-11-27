<script setup>
import TheHeader from './TheHeader.vue'
import TheMeet from './TheMeet.vue'
import TheClouds from './TheClouds.vue'
import TheUpside from './TheUpside.vue'
</script>

<template>
  <section class="join">
    <div class="join__inner">
      <TheHeader />
      <TheMeet />
      <TheUpside />
    </div>
    <TheClouds class="join__clouds" />
  </section>
</template>

<style lang="scss">
.join__clouds {
  * {
    pointer-events: none;
    user-select: none;
  }
}
.join {
  position: relative;
  background: #a5cce0;
  padding-bottom: 60px;
  position: relative;
  overflow: hidden;
  &__inner {
    position: relative;
    z-index: 10;
    overflow: hidden;
  }
}
</style>
