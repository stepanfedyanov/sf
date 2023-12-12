<script setup>
import TheHeader from './TheHeader.vue'
import TheMeet from './TheMeet.vue'
import TheClouds from './TheClouds.vue'
</script>

<template>
  <section class="join">
    <div class="join__inner">
      <TheHeader />
      <TheMeet />
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
  overflow: hidden;
  position: relative;
  background: linear-gradient(to bottom, #a5cce0 50%, #fff 100%);
  padding-bottom: 60px;
  @include adaptive-value('padding-bottom', 60, 0, 1);
  position: relative;
  min-height: 890px;
  @media (max-width: 500px) {
    min-height: 800px;
  }
  &__inner {
    position: relative;
    padding-bottom: 70px;
    z-index: 10;
  }
}
</style>
