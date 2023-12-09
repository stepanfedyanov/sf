<script setup>
import TheButton from './TheButton.vue'
import TheContainer from './TheContainer.vue'
</script>

<template>
  <section class="meet">
    <TheContainer>
      <div class="meet__inner">
        <h1 class="meet__title wow animate__animated animate__fadeIn" data-wow-delay="0.6s">
          Meet Wealth Management 3.0
        </h1>
        <p class="meet__text wow animate__animated animate__fadeIn" data-wow-delay="0.8s">
          Global digital wealth management ecosystem, built by professional community
        </p>
        <TheButton
          class="wow animate__animated animate__fadeIn"
          data-wow-delay="1s"
          color="white"
          size="big"
          >Get early acceses</TheButton
        >
      </div>
    </TheContainer>
  </section>
</template>

<style lang="scss">
.meet {
  @include adaptive-value('padding-top', 194, 147, 1);
  &__inner {
    * + * {
      @include adaptive-value('margin-top', 38, 35, 1);
    }
  }
  &__title {
    font-family: 'Atyp Display', sans-serif;
    @include adaptive-value('font-size', 70, 36, 1);
    line-height: calc(78 / 70);
    letter-spacing: 0.7px;
    max-width: 580px;
  }
  &__text {
    max-width: 300px;
    @include adaptive-value('font-size', 18, 14, 1);
    line-height: calc(24 / 18);
    letter-spacing: -0.27px;
  }
}

@media (max-width: 1000px) {
  .meet {
    @include adaptive-value('padding-top', 194, 147, 1);
    &__title {
      text-align: center;
      margin: 0 auto;
    }
    &__text {
      text-align: center;
      margin: 0 auto;
    }
    &__inner {
      * + * {
        @include adaptive-value('margin-top', 38, 35, 1);
      }
    }
    .btn {
      display: block;
      margin: 0 auto;
      font-size: 14px;
      padding: 3px 28.5px;
    }
  }
}
</style>
