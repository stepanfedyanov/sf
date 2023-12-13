<script setup>
import TheContainer from './TheContainer.vue'
import TheMethods from './TheMethods.vue'
import { onMounted, ref } from 'vue';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGlobalStore } from '../stores/global';

gsap.registerPlugin(ScrollTrigger);

const architecture = ref(null);
const architectureTitle = ref(null);
const townVideo = ref(null);

const globalStore = useGlobalStore();

const pageIsLoaded = () => {
  globalStore.changePageIsLoaded(true);
};

onMounted(() => {
  if (screen && screen.width >= 1024) {
    townVideo.value.muted = true;
    townVideo.value.play();

    gsap.set(architectureTitle.value, {
      yPercent: 300,
      opacity: 0
    });

    gsap.to(architectureTitle.value, {
      scrollTrigger: {
        trigger: architecture.value,
        start: "top-=20% bottom",
        end: "center-=20% bottom",
        scrub: true,
      },
      yPercent: 55,
      opacity: 1,
    })

    gsap.set('.architecture__clouds_1', {
      yPercent: -30,
    });

    gsap.set('.architecture__clouds_2', {
      yPercent: 20,
    });
    
    gsap.set('.architecture__clouds_3', {
      yPercent: -15,
    });

    gsap.to('.architecture__clouds-item', {
      scrollTrigger: {
        trigger: architecture.value,
        start: "top+=5% bottom",
        end: "center-=15% bottom",
        scrub: true,
      },
      yPercent: 0,
    })
  }
});
</script>

<template>
  <section class="architecture" ref="architecture">
    <div class="architecture__clouds">
      <img class="architecture__clouds-item architecture__clouds_1" src="/img/TheCommunitySection/architecture/cloud-upper-1.png" alt="Town's clouds">
      <img class="architecture__clouds-item architecture__clouds_2" src="/img/TheCommunitySection/architecture/cloud-upper-2.png" alt="Town's clouds">
      <img class="architecture__clouds-item architecture__clouds_3" src="/img/TheCommunitySection/architecture/clouds.png" alt="Town's clouds">
      <img class="architecture__clouds-item architecture__clouds_4" src="/img/TheCommunitySection/architecture/clouds-sofa.png" alt="Town's clouds">
    </div>
    <TheContainer>
      <div class="architecture__inner">
        <video
          ref="townVideo"
          autoplay muted loop playsinline
          class="architecture__img"
          @canplay="pageIsLoaded"
        >
          <source src="./img/TheCommunitySection/architecture/town.mov">
          <source src="/img/TheCommunitySection/architecture/town.webm" type="video/webm">
        </video>
        <h2 class="architecture__title" ref="architectureTitle">Ecosystem Architecture</h2>
        <p class="architecture__desc wow animate__animated animate__fadeIn" data-wow-delay="0.3s">
          We are building a holistic infrastructure for capital owners and independent professionals
          based on industry’s best practices
        </p>
      </div>
    </TheContainer>
    <TheMethods />
    <!-- <TheContainer>
      <div class="community__scroll">
        <span class="community__scroll-text wow animate__animated animate__fadeIn"> Scroll down </span>
        <img class="community__scroll-img wow animate__animated animate__fadeIn" src="/img/global/arrow.svg" alt="Scroll down" />
      </div>
    </TheContainer> -->
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
  @include adaptive-value('padding-top', 206, 124, 1);
  z-index: 10;
  background: linear-gradient(to bottom, transparent 70%, #f2f3f5 95%);
  padding-bottom: 36px;
  &__clouds {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    &_1 {
      position: absolute;
      top: 0;
      left: 0;
    }
    &_2 {
      position: absolute;
      right: 0;
      top: 0;
    }
    &_3 {
      width: 100%;
      position: absolute;
      top: 5%;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
    }
    &_4 {
      width: 100%;
      position: absolute;
      top: 8%;
      left: 50%;
      transform: translateX(-50%);
      z-index: 2;
    }
  }
  &__img {
    position: absolute;
    @include adaptive-value('width', 1440, 667, 1);
    max-width: initial;
    left: 50%;
    transform: translateX(-50%);
    top: 112px;
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
    @include adaptive-value('margin-bottom', 571, 270, 1);
  }
  &__desc {
    text-align: center;
    font-size: 18px;
    line-height: calc(25 / 18);
    letter-spacing: 0.26px;
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
