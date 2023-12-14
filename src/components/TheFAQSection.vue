<script setup>
import TheContainer from './TheContainer.vue'
import TheFAQAccordion from './TheFAQAccordion.vue'
</script>

<template>
  <section class="faq">
    <TheContainer>
      <div class="faq__inner" @click="log">
        <h2 class="faq__title wow animate__animated animate__fadeInUp">FAQ</h2>
        <TheFAQAccordion />
      </div>
    </TheContainer>
  </section>
</template>

<style lang="scss">
.faq {
  @include adaptive-value('padding-top', 95, 37, 1);
  @include adaptive-value('padding-bottom', 95, 85, 1);
  &__title {
    @include adaptive-value('margin-bottom', 51, 32, 1);
    font-family: 'Atyp Display';
    @include adaptive-value('font-size', 40, 29, 1);
    @include adaptive-value('line-height', 40, 48, 1);
    @include adaptive-value('letter-spacing', 0, -0.5, 1);
  }
}

@media (max-width: 530px) {
  .faq {
    &__title {
      font-weight: 300;
    }
  }
}
</style>
