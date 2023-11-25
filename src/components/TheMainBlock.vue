<script setup>
</script>

<template>
  <section>
    <h1>SF Website Development</h1>
  </section>
</template>

<style lang="scss">
// Настройка для миксинов
$maxWidth: 1920;
$maxWidthContainer: 1200;
@import "../assets/mixins/adaptive-value";

h1 {
  @include adaptive-value('font-size', 35, 12, 1);
  font-weight: bold;
  text-align: center;
}
</style>
