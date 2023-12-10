<script setup>
import { onMounted, ref, toRefs } from 'vue';

const props = defineProps({
  buildings: {
    type: Boolean,
    required: false,
    default: true
  },
  manyClouds: {
    type: Boolean,
    required: false,
    default: false
  }
});

const { manyClouds } = toRefs(props);

// Clouds array
const clouds = ref([]);

// Constants:
// ======================
const screenDetectorPercents = [0.9, 0.9, 0.9, 0.9, 0, 0]; // if center of active cloud in this position – activate smth
const screenAppearPercent = 0.6;
const screenWidth = (screen && typeof screen.width === 'number') ? screen.width : null;

const cloudsClass = 'join__upper-clouds';
const changeSpeedXTime = 1; // ms
const cloudsImagesPath = (id) => `./img/Clouds/clouds-${id}.png`;
const cloudsYInitPosition = [-3, -10, 30, 50, 40, 40];
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
const createCloud = ({xInitPosition = null, idx = 1}) => {
  const cloudElement = {
    idx,
    class: `join__upper-clouds ${cloudsClass}-${idx}`,
    src: cloudsImagesPath(idx),
    alt: 'Clouds',
    speedX: cloudsXSpeed[idx - 1],
    yPosition: cloudsYInitPosition[idx - 1],
    xPosition: xInitPosition ?? cloudXInitPositions[idx - 1],
    screenDetectorPercent: screenDetectorPercents[idx - 1],
    active: true
  };
  
  clouds.value.push(cloudElement);
};

/**
 * Check clouds on screen border and create new cloud or delete last one
 */
const checkScreenBorder = () => {
  clouds.value.forEach((cloudItem, idx, cloudsArrayReturned) => {
    if (cloudItem.active && (cloudItem.xPosition >= screenWidth * cloudItem.screenDetectorPercent)) {
      cloudItem.active = false;
      createCloud({idx: cloudItem.idx });
    }

    if (cloudItem.xPosition >= (screenWidth + cloudsWidth[cloudItem.idx - 1] / 2)) {
      cloudsArrayReturned.splice(idx, 1);
    }
  });
};

/**
 * Check screen border and chagne cloud speed
 */
const changeCloudPosition = () => {
  checkScreenBorder();

  clouds.value.forEach(cloud => {
    cloud.xPosition = cloud.xPosition + cloud.speedX;
  });
};

onMounted(() => {
  // Init clouds animations
  createCloud({ xInitPosition: screenWidth * 0.9, idx: 1 });
  createCloud({ xInitPosition: 0, idx: 2 });
  createCloud({ xInitPosition: screenWidth * 0.55, idx: 3 });
  createCloud({ xInitPosition: screenWidth * 0.3, idx: 4 });
  createCloud({ xInitPosition: screenWidth * 0.6, idx: 5 });
  createCloud({ xInitPosition: screenWidth * -0.2, idx: 6 });

  setInterval(() => {
    changeCloudPosition();
  }, changeSpeedXTime);
});
</script>

<template>
  <div class="join__clouds-container">
    <img
      v-for="(cloud, idx) in clouds"
      :key="`cloud-${idx}`"
      :class="cloud.class"
      :style="`left: ${cloud.xPosition}px; top: ${cloud.yPosition}%;`"
      :src="cloud.src"
      :alt="cloud.alt"
    />

    <div v-if="buildings" class="join__buildings-wrapper">
      <img class="join__buildings" src="/img/TheJoinSection/buildings.png" alt="" />
      <img class="join__buildings_clouds" src="/img/TheJoinSection/background-clouds.png" alt="Clouds">
    </div>
  </div>
</template>

<style lang="scss">
.join {
  &__clouds-container {
    width: 100%;
    overflow-x: hidden;
  }
  &__buildings-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-width: 1044px;
    left: 50%;
    transform: translateX(-50%);
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
    }
    &-2 {
      opacity: 0.9;
      max-width: 800px;
      z-index: 0;
    }
    &-3 {
      max-width: 450px;
      z-index: 1;
    }
    &-4 {
      max-width: 500px;
      z-index: 1;
    }
    &-5 {
      max-width: 100%;
      z-index: 2;
    }
    &-6 {
      max-width: 100%;
      z-index: 2;
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
    &_clouds {
      position: absolute;
      bottom: -100px;
      left: 336px;
      z-index: 1;
    }
  }
}

@media (max-width: 1000px) {
  .join {
    &::before {
      background: linear-gradient(to bottom, transparent 75%, #fff 90%);
    }
    &__buildings {
      top: 420px;
      left: 50%;
      transform: translateX(-50%);
      right: auto;
    }
    &__upper-clouds {
      top: 0px;
    }
  }
}
</style>
