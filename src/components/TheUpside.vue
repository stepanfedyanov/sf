<script setup>
import { onMounted, ref } from 'vue';
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const upsideContainer = ref(null);
const upsideTitle = ref(null);

onMounted(() => {
  const heightOfContainer = upsideContainer.value.offsetHeight;

  ScrollTrigger.create({
    trigger: upsideContainer.value,
    start: "10% bottom",
    end: "bottom bottom",
    onUpdate: (self) => {
      upsideTitle.value.style.opacity = `${self.progress.toFixed(3) - 0.2}`;
      upsideTitle.value.style.bottom = `${Math.ceil(heightOfContainer * 0.7 * self.progress.toFixed(3))}px`;
    },
  });
});
</script>

<template>
  <section class="upside" ref="upsideContainer">
    <h2 class="upside__title" ref="upsideTitle">Join the upside</h2>
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
    font-size: 160px;
    line-height: calc(140 / 160);
    letter-spacing: -1.6px;
    font-weight: 300;
    user-select: none;
    pointer-events: none;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
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
