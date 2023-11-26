<script setup>
import TheButton from './TheButton.vue'
import TheContainer from './TheContainer.vue'
</script>

<template>
  <section class="meet">
    <TheContainer>
      <div class="meet__inner">
        <h1 class="meet__title">Meet Wealth Management 3.0</h1>
        <p class="meet__text">
          Global digital wealth management ecosystem, built by professional community
        </p>
        <TheButton color="white" size="big">Get early acceses</TheButton>
      </div>
    </TheContainer>
  </section>
</template>

<style lang="scss">
.meet {
  padding-top: 194px;
  &__inner {
    * + * {
      margin-top: 38px;
    }
  }
  &__title {
    font-family: 'Atyp Display';
    font-size: 70px;
    line-height: calc(78 / 70);
    letter-spacing: 1.4px;
    max-width: 580px;
  }
  &__text {
    max-width: 300px;
    font-size: 18px;
    line-height: calc(24 / 18);
    letter-spacing: -0.27px;
  }
}
</style>
