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
  padding: 95px 0;
  &__title {
    margin-bottom: 41px;
    font-family: 'Atyp Display';
    font-size: 40px;
    line-height: calc(46 / 40);
  }
}
</style>
