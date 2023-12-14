<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const upsideContainer = ref(null)
const upsideTitle = ref(null)

onMounted(() => {
  const opacityTitleTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: upsideContainer.value,
      start: () => (screen && screen.width >= 1024 ? 'top bottom' : 'top+=50% bottom'),
      end: 'bottom+=50% bottom',
      scrub: true
    }
  })

  opacityTitleTimeline
    .fromTo(
      upsideTitle.value,
      {
        opacity: 0,
        yPercent: 30
      },
      {
        opacity: 1,
        yPercent: screen && screen.width <= 500 ? -60 : -100
      }
    )
    .fromTo(
      '.join-title__clouds-3',
      {
        opacity: 0.6
      },
      {
        opacity: 0
      }
    )
})
</script>

<template>
  <section class="upside" ref="upsideContainer">
    <h2 class="upside__title" ref="upsideTitle">Набирайте высоту</h2>
  </section>
</template>

<style lang="scss">
@import '../assets/variables.scss';
@import '../assets/mixins/adaptive-value.scss';
.upside {
  height: 100%;
  &__title {
    max-width: 1024px;
    font-family: 'Atyp Display', sans-serif;
    color: #a5cce0;
    text-align: center;
    @include adaptive-value('font-size', 160, 60, 1);
    line-height: calc(140 / 160);
    @include adaptive-value('letter-spacing', -1.6, 0, 1);
    font-weight: 300;
    user-select: none;
    pointer-events: none;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    z-index: 9;
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

@media (max-width: 1000px) {
  .upside {
    &__title {
      @include adaptive-value('max-width', 650, 312, 1);
      margin: 0 auto;
      font-weight: 300;
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
