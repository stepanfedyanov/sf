<script setup>
import TheContainer from './TheContainer.vue'
</script>

<template>
  <section class="upside">
    <TheContainer>
      <div class="upside__inner">
        <h2 class="upside__title wow animate__animated animate__fadeInUpBig" data-wow-delay=".3s">Join the upside</h2>
      </div>
    </TheContainer>
  </section>
</template>

<style lang="scss">
@import '../assets/variables.scss';
@import '../assets/mixins/adaptive-value.scss';
.upside {
  &__inner {
  }
  &__title {
    color: #a5cce0;
    text-align: center;
    font-size: 160px;
    line-height: calc(140 / 160);
    letter-spacing: -1.6px;
    font-weight: 300;
    position: relative;
    user-select: none;
    pointer-events: none;
    // &::before {
    //   content: '';
    //   position: absolute;
    //   z-index: 1;
    //   top: 50px;
    //   left: -125px;
    //   width: 1140px;
    //   height: 314px;
    //   background: url('#{$public}/img/TheJoinSection/text-cloud.png');
    // }
  }
}
</style>
