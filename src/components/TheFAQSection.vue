<script setup>
import TheContainer from './TheContainer.vue'
import TheFAQAccordion from './TheFAQAccordion.vue'
</script>

<template>
  <section class="faq">
    <TheContainer>
      <div class="faq__inner">
        <h2 class="faq__title">FAQ</h2>
        <TheFAQAccordion />
      </div>
    </TheContainer>
  </section>
</template>

<style lang="scss">
.faq {
  @include adaptive-value('padding-top', 95, 42, 1);
  @include adaptive-value('padding-bottom', 95, 42, 1);
  &__title {
    @include adaptive-value('margin-bottom', 41, 25, 1);
    font-family: 'Atyp Display';
    @include adaptive-value('font-size', 40, 30, 1);
    line-height: calc(46 / 40);
  }
}
</style>
