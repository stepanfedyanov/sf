<script>
export default {
  props: {},
  data() {
    return {
      Accordion: {
        count: 0,
        active: null
      }
    }
  },
  provide() {
    return { Accordion: this.Accordion }
  }
}
</script>

<template>
  <ul class="accordion">
    <slot></slot>
  </ul>
</template>

<style lang="scss" scoped>
.accordion {
  list-style: none;
  margin: 0;
  padding: 0;
  &__item:last-child {
    border-bottom: none;
  }
}
</style>
