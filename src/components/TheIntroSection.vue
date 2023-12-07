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
  const opacityTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.how',
      start: 'bottom bottom',
      end: '+=100%',
      scrub: true,
    }
  });
  
  // Add two labels: first label is fadeOut, we need to set opacity for .how from 1 to 0 by 30% j scrolling
  // second label is fadeIn, we need to set opacity for .intro from 0 to 1 by 30% j scrolling
  opacityTimeline
    .to('.how', { opacity: 0 }, '+=0.2')
    .fromTo('.intro', { opacity: 0 }, { opacity: 1 }, '+=0.4');

  // GSAP timeline with scrollTrigger for main element
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.intro',
      start: 'top bottom',
      end: 'bottom bottom',
      scrub: true,
    }
  });

  // Set to .intro__video scale 0.8 to 1 on 30% of scroll
  tl.fromTo('.intro__video-wrapper', { scale: 0.8 }, { scale: 1 }, '+=0.5');
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
  </section>
</template>

<style lang="scss">
.intro {
  background-color: #fff;
  max-width: 1920px;
  margin: 0 auto;
  overflow: hidden;
  padding-bottom: 100px;
  &__title {
    margin-bottom: 40px;
  }
}
</style>
