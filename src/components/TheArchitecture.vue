<script setup>
import TheContainer from './TheContainer.vue'
import TheMethods from './TheMethods.vue'
import TheClouds from './TheClouds.vue';
import { onMounted, ref } from 'vue';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const architecture = ref(null);
const architectureTitle = ref(null);

onMounted(() => {
  gsap.set(architectureTitle.value, {
    yPercent: 300,
    opacity: 0
  });

  gsap.to(architectureTitle.value, {
    scrollTrigger: {
      trigger: architecture.value,
      start: "top bottom",
      end: "center bottom",
      scrub: true,
    },
    yPercent: 0,
    opacity: 1,
  })
});
</script>

<template>
  <section class="architecture" ref="architecture">
    <TheContainer>
      <div class="architecture__inner">
        <video
          autoplay
          muted
          loop
          class="architecture__img"
          src="/img/TheCommunitySection/architecture/town.webm"
          alt="Town"
        />
        <h2 class="architecture__title" ref="architectureTitle">Ecosystem Architecture</h2>
        <p class="architecture__desc wow animate__animated animate__fadeIn" data-wow-delay="0.3s">
          We are building a holistic infrastructure for capital owners and independent professionals
          based on industry’s best practices
        </p>
      </div>
    </TheContainer>
    <TheClouds :buildings="false" :many-clouds="true" class="join__clouds" />
    <TheMethods />
    <TheContainer>
      <div class="community__scroll">
        <span class="community__scroll-text wow animate__animated animate__fadeIn"> Scroll down </span>
        <img class="community__scroll-img wow animate__animated animate__fadeIn" src="/img/global/arrow.svg" alt="Scroll down" />
      </div>
    </TheContainer>
  </section>
</template>

<style lang="scss">
.community {
  position: relative;
  z-index: 4;
  &__scroll {
    text-align: center;
    margin-top: 46px;
  }
  &__scroll-text {
    text-align: center;
    @include adaptive-value('font-size', 15, 11, 1);
    line-height: 1.25;
  }
  &__scroll-img {
    margin: 0 auto;
    transform: rotate(90deg);
    @include adaptive-value('margin-top', 0, -5, 1);
    @include adaptive-value('width', 24, 18, 1);
  }
}
.architecture {
  position: relative;
  @include adaptive-value('padding-top', 276, 124, 1);
  z-index: 10;
  background: linear-gradient(to bottom, transparent 70%, #fff 95%);
  padding-bottom: 36px;
  &__img {
    position: absolute;
    @include adaptive-value('width', 1440, 667, 1);
    max-width: initial;
    left: 50%;
    transform: translateX(-50%);
    top: 182px;
    z-index: 10;
  }
  &__title {
    color: #fff;
    text-align: center;
    font-family: 'Atyp Display', sans-serif;
    font-size: 90px;
    @include adaptive-value('font-size', 90, 48, 1);
    line-height: normal;
    font-weight: 300;
    @include adaptive-value('margin-bottom', 491, 270, 1);
  }
  &__desc {
    text-align: center;
    font-size: 18px;
    line-height: calc(24 / 18);
    letter-spacing: 0.36px;
    max-width: 744px;
    margin: 0 auto;
    position: relative;
    z-index: 5;
  }
}

@media (max-width: 600px) {
  .architecture {
    &__desc {
      display: none;
    }
  }
}
</style>
