<script setup>
import TheLogotype from './TheLogotype.vue'
import TheNavigation from './TheNavigation.vue'
</script>

<template>
  <header class="header">
    <div class="header__inner">
      <TheLogotype fill="#052E3E" />
      <TheNavigation />
    </div>
  </header>
</template>

<style lang="scss">
.header {
  max-width: 1080px;
  width: 100%;
  position: fixed;
  top: 38px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 34px;
  border: 1px solid #dbecf5;
  background: linear-gradient(92deg, rgba(255, 255, 255, 0.69) -36.65%, rgba(255, 255, 255, 0) 140.09%);
  backdrop-filter: blur(15px);
  padding: 16px 38px;
  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
