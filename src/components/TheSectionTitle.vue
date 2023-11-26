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
  font-family: 'Atyp Display';
  text-align: center;
  font-size: 96px;
  line-height: normal;
}
</style>
