<script setup>
defineProps({
  color: String
})
</script>

<template>
  <h2 class="section-title" :style="`color: ${color}`">
    <slot />
  </h2>
</template>

<style lang="scss">
.section-title {
  font-family: 'Atyp Display', sans-serif;
  text-align: center;
  @include adaptive-value('font-size', 96, 44, 1);
  line-height: normal;
  font-weight: 300;
}
</style>
