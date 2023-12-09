<script setup>
import { onMounted, ref } from 'vue';
import TheContainer from './TheContainer.vue'
import TheSectionTitle from './TheSectionTitle.vue'
import TheVideo from './TheVideo.vue'
import TheVideoSlider from './TheVideoSlider.vue'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const introSection = ref(null);

onMounted(() => {
  // GSAP timeline with scrollTrigger for main element
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.intro',
      start: 'top bottom',
      end: 'center bottom',
      scrub: true,
    }
  });
  // Set to .intro__video scale 0.8 to 1 on 30% of scroll
  tl.fromTo('.intro__video-wrapper', { scale: 0.8 }, { scale: 1 }, '+=0.5');

  const nextBlockTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.intro',
      start: 'bottom bottom',
      end: '+=50%',
      scrub: true,
      pin: true
    }
  });

  gsap.set('.intro__next-background', { opacity: 0, background: gsap.getProperty('.blue', 'background') });

  nextBlockTimeline
    .to('.intro__next-background', { opacity: 1 })
});
</script>

<template>
  <section class="intro" ref="introSection">
    <TheContainer>
        <TheSectionTitle
          color="#052E3E"
          class="intro__title wow animate__animated animate__fadeInUp"
          data-wow-duration="1.4s"
          >Watch intro</TheSectionTitle
        >
    </TheContainer>
    <TheVideo class="wow animate__animated animate__fadeIn" />
    <TheContainer>
      <TheVideoSlider class="wow animate__animated animate__fadeIn" data-wow-delay="0.3s" />
    </TheContainer>
    <div class="intro__next-background" />
  </section>
</template>

<style lang="scss">
.intro {
  background-color: #fff;
  max-width: 1920px;
  margin: 0 auto;
  overflow: hidden;
  @include adaptive-value('padding-bottom', 100, 60, 1);
  padding-bottom: 15vh;
  &__title {
    @include adaptive-value('margin-bottom', 40, 49, 1);
  }
  &__next-background {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
  }
}

@media (max-width: 800px) {
  .intro {
    padding-bottom: 140px;
  }
}

@media (max-width: 500px) {
  .intro {
    &__title {
      max-width: 300px;
      margin-left: auto;
      margin-right: auto;
      line-height: calc(52 / 48);
    }
  }
}
</style>
