<script setup>
import { onMounted, ref, watch } from 'vue';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
gsap.registerPlugin(CustomEase);

import { useGlobalStore } from '../stores/global';
import { storeToRefs } from 'pinia';

const globalStore = useGlobalStore();
const { pageIsLoaded } = storeToRefs(globalStore);

// Clouds array
const clouds = ref([])

// Constants:
// ======================
const screenDetectorPercents = [0.9, 0.9, 0.9, 0.9, 0, 0] // if center of active cloud in this position – activate smth
const screenAppearPercent = 0.6
const screenWidth = screen && typeof screen.width === 'number' ? screen.width : null

const cloudsClass = 'join__upper-clouds';
const changeSpeedXTime = 1; // ms
const cloudsImagesPath = (id) => `./img/Clouds/clouds-${id}.png`;
// const cloudsYInitPosition = [-3, -10, 30, 50, () => screen && screen.width <= 500 ? 76 : 50, 50];
const cloudsXSpeed = [0.05, 0.07, 0.04, 0.01, 0.037, 0.04];
const cloudsWidth = [900, 800, 300, 500, screenWidth, screenWidth];
const defaultCloudsXInitPosition = -(screenWidth * screenAppearPercent);
const cloudXInitPositions = [defaultCloudsXInitPosition, defaultCloudsXInitPosition, defaultCloudsXInitPosition, defaultCloudsXInitPosition, -(screenWidth / 2), -(screenWidth / 1.5), defaultCloudsXInitPosition];

// Functions:
// ======================

/**
 * Create cloud element and add it to clouds array
 * @param {*} xInitPosition
 */
const createCloud = ({ xInitPosition = null, idx = 1 }) => {
  const cloudElement = {
    idx,
    class: `join__upper-clouds ${cloudsClass}-${idx}`,
    src: cloudsImagesPath(idx),
    alt: 'Clouds',
    speedX: cloudsXSpeed[idx - 1],
    xPosition: xInitPosition ?? (screen && screen.width <= 500 ? -screenWidth : cloudXInitPositions[idx - 1]),
    screenDetectorPercent: screen && screen.width <= 500 ? 0.9 : screenDetectorPercents[idx - 1],
    active: true
  }

  clouds.value.push(cloudElement)
}

/**
 * Check clouds on screen border and create new cloud or delete last one
 */
const checkScreenBorder = () => {
  clouds.value.forEach((cloudItem, idx, cloudsArrayReturned) => {
    if (cloudItem.active && cloudItem.xPosition >= screenWidth * cloudItem.screenDetectorPercent) {
      cloudItem.active = false
      createCloud({ idx: cloudItem.idx })
    }

    if (cloudItem.xPosition >= screenWidth + cloudsWidth[cloudItem.idx - 1] / 2) {
      cloudsArrayReturned.splice(idx, 1)
    }
  })
}

/**
 * Check screen border and chagne cloud speed
 */
const changeCloudPosition = () => {
  checkScreenBorder()

  clouds.value.forEach((cloud) => {
    cloud.xPosition = cloud.xPosition + cloud.speedX
  })
}

const observed = ref(true);

onMounted(() => {
  const observer = new IntersectionObserver((obs) => {
    observed.value = obs[0].isIntersecting;
  });
  observer.observe(document.querySelector('.join'));

  // Init clouds animations
  createCloud({ xInitPosition: screen && screen.width >= 1024 ? screenWidth * 0.9 : screenWidth * 1.2, idx: 1 })
  if (screen && screen.width >= 500) createCloud({ xInitPosition: 0, idx: 2 })
  if (screen && screen.width >= 1024) createCloud({ xInitPosition: screenWidth * 0.55, idx: 3 })
  createCloud({ xInitPosition: screenWidth * 0.3, idx: 4 })
  createCloud({ xInitPosition: screenWidth * 0.6, idx: 5 })
  if (screen && screen.width >= 1024) createCloud({ xInitPosition: screenWidth * -0.2, idx: 6 })

  setInterval(() => {
    if (observed.value) changeCloudPosition();
  }, changeSpeedXTime);
});

watch(pageIsLoaded, () => {
  if (pageIsLoaded.value) {
    gsap.set('.join__buildings-item', { yPercent: 100 });
    gsap.set('.join__buildings-1', { yPercent: 40 })

    gsap.to('.join__buildings-item', {
      yPercent: 0,
      duration: 2,
      stagger: 0.5,
      ease: CustomEase.create("custom", "M0,0 C0.272,0 0.351,0.344 0.371,0.4 0.552,0.91 0.744,1 1,1 "),
    })
  }
});
</script>

<template>
  <div class="join__clouds-container">
    <img
      v-for="(cloud, idx) in clouds"
      :key="`cloud-${idx}`"
      :class="cloud.class"
      :style="`left: ${cloud.xPosition}px;`"
      :src="cloud.src"
      :alt="cloud.alt"
    />

    <div v-if="buildings" class="join__buildings-wrapper">
      <div class="join__buildings">
        <img class="join__buildings-item join__buildings-1" src="/img/TheJoinSection/buildings/building-1.webp" alt="Building">
        <img class="join__buildings-item join__buildings join__buildings-2" src="/img/TheJoinSection/buildings/building-2.webp" alt="Building">
        <div class="join__buildings-item join__buildings-shadow-wrapper join__buildings join__buildings-3">
          <img class="join__buildings-item-building" src="/img/TheJoinSection/buildings/building-3.webp" alt="Building">
          <img class="join__buildings-item-shadow" src="/img/TheJoinSection/buildings/building-2-1.webp" alt="Building">
        </div>
      </div>
      <img class="join__buildings_clouds" src="/img/TheJoinSection/background-clouds.png" alt="Clouds">
      <img class="join__buildings_clouds join__buildings_clouds-2" src="/img/TheJoinSection/background-clouds.png" alt="Clouds">
    </div>
  </div>
</template>

<style lang="scss">
.join {
  &__clouds-container {
    width: 100%;
  }
  &__buildings-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-width: 1044px;
    left: 50%;
    transform: translateX(-48.4%);
    padding: 0 20px;
  }
  &__upper-clouds {
    position: absolute;
    top: -140px;
    left: 50%;
    z-index: 5;
    transform: translateX(calc(-55%));
    &-1 {
      opacity: 0.8;
      max-width: 900px;
      z-index: 0;
      top: -3%;
    }
    &-2 {
      opacity: 0.9;
      max-width: 800px;
      z-index: 0;
      top: -10%;
    }
    &-3 {
      max-width: 450px;
      z-index: 1;
      top: 30%;
    }
    &-4 {
      max-width: 500px;
      z-index: 1;
      top: 50%;
    }
    &-5 {
      max-width: 100%;
      z-index: 2;
      top: 50%;
    }
    &-6 {
      max-width: 100%;
      z-index: 2;
      top: 50%;
    }
    &-7 {
      opacity: 0.8;
      max-width: 900px;
      z-index: 0;
    }
  }
  &__buildings {
    position: absolute;
    top: 170px;
    right: 35px;
    z-index: 1;
    width: 377px;
    &-1 {
      top: 0;
      left: 0;
      max-width: 120px;
      position: absolute;
    }
    &-2 {
      top: 0;
      left: 110px;
      max-width: 140px;
      position: absolute;
      z-index: 2;
    }
    &-3 {
      top: 0;
      left: 245px;
      max-width: 123px;
      position: absolute;
      z-index: 2;
    }
    &_clouds {
      position: absolute;
      bottom: -28%;
      left: 336px;
      z-index: 1;
      @media (max-width: 1024px) {
        left: -180px;
        bottom: -35%;
      }
      @media (max-width: 768px) {
        bottom: -25%;
      }
      @media (max-width: 500px) {
        bottom: -28%;
        max-width: 150%
      }
      &-2 {
        bottom: -30%;
        @media (max-width: 1024px) {
          left: 180px;
          bottom: -30%;
        }
        @media (max-width: 768px) {
          bottom: -25%;
        }
        @media (max-width: 500px) {
          bottom: -25%;
          left: 52px;
        }
      }
    }
    &-item-shadow {
      position: absolute;
      top: 0;
      left: -120px;
    }
  }
}

@media (max-width: 1000px) {
  .join {
    &::before {
      background: linear-gradient(to bottom, transparent 75%, #fff 90%);
    }
    &__buildings {
      left: 50%;
      transform: translateX(-50%);
      right: auto;
      &-1 {
        @include adaptive-value('top', 340, 270, 1);
        @include adaptive-value('left', -10, 57, 1);
        @include adaptive-value('max-width', 120, 80, 1);
        position: absolute;
      }
      &-2 {
        @include adaptive-value('top', 350, 280, 1);
        @include adaptive-value('left', 179, 179, 1);
        @include adaptive-value('max-width', 130, 90, 1);
        position: absolute;
      }
      &-3 {
        @include adaptive-value('top', 349, 277, 1);
        @include adaptive-value('left', 330, 258, 1);
        @include adaptive-value('max-width', 120, 80, 1);
        position: absolute;
      }
      &-item-shadow {
        @include adaptive-value('left', -200, -74, 1);
      }
    }
    &__upper-clouds {
      top: 0px;
    }
  }
}

@media (max-width: 500px) {
  .join {
    &__upper-clouds {
      &-1 {
        top: -12%;
      }
      &-4 {
        top: 35%;
      }
      &-5 {
        top: 76%;
        max-width: 250%;
      }
    }
  }
}
</style>
