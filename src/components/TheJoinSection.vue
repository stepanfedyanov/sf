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
  @include adaptive-value('padding-bottom', 60, 0, 1);
  position: relative;
  &__inner {
    position: relative;
    z-index: 10;
  }
}
</style>
