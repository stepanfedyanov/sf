<script setup>
import TheContainer from './TheContainer.vue'
</script>

<template>
  <section class="upside wow animate__animated animate__fadeInDown" data-wow-delay="0.8s" data-wow-duration="1.8s">
    <TheContainer>
      <div class="upside__inner">
        <h2 class="upside__title">Join the upside</h2>
      </div>
    </TheContainer>
  </section>
</template>

<style lang="scss">
@import '../assets/variables.scss';
@import '../assets/mixins/adaptive-value.scss';
.upside {
  margin-top: 271px;
  &__title {
    font-family: 'Atyp Display', sans-serif;
    color: #a5cce0;
    text-align: center;
    @include adaptive-value('font-size', 160, 72, 1);
    line-height: calc(140 / 160);
    letter-spacing: -1.6px;
    font-weight: 300;
    position: relative;
    user-select: none;
    pointer-events: none;
    &::before {
      content: '';
      position: absolute;
      z-index: 1;
      top: 50px;
      left: -125px;
      width: 1140px;
      height: 314px;
      background: url('/img/TheJoinSection/text-cloud.png');
    }
  }
}

@media (max-width: 1000px) {
  .upside {
    margin-top: 470px;
    &__title {
      max-width: 312px;
      margin: 0 auto;
      &::before {
        top: 150px;
        left: 50%;
        transform: translateX(-50%);
        @include adaptive-value('top', 250, -50, 1);
      }
    }
  }
}
</style>
