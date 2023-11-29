<script setup>
import { onMounted, ref } from 'vue';

// Clouds array
const clouds = ref([]);

// Constants:
// ======================
const screenDetectorPercent = 0.9; // if center of active cloud in this position – activate smth
const screenAppearPercent = 0.6;
const screenWidth = (screen && typeof screen.width === 'number') ? screen.width : null;

const cloudsClass = 'join__upper-clouds';
const speedX = 1;
const changeSpeedXTime = 10; // seconds
const cloudImage = '/img/TheJoinSection/upper-clouds.png';
const cloudWidth = 2488;
const cloudXInitPosition = -(screenWidth * screenAppearPercent);

// Functions:
// ======================

/**
 * Create cloud element and add it to clouds array
 * @param {*} xInitPosition 
 */
const createCloud = (xInitPosition = null) => {
  const cloudElement = {
    class: cloudsClass,
    src: cloudImage,
    alt: 'Clouds',
    xPosition: xInitPosition ?? cloudXInitPosition,
    active: true
  };
  
  clouds.value.push(cloudElement);
};

/**
 * Check clouds on screen border and create new cloud or delete last one
 */
const checkScreenBorder = () => {
  clouds.value.forEach((cloudItem, idx, cloudsArrayReturned) => {
    if (cloudItem.active && (cloudItem.xPosition >= screenWidth * screenDetectorPercent)) {
      cloudItem.active = false;
      createCloud();
    }

    if (cloudItem.xPosition >= (screenWidth + cloudWidth / 2)) {
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
    cloud.xPosition = cloud.xPosition + speedX;
  });
};

onMounted(() => {
  // Init clouds animations
  createCloud(screenWidth * 1.2);

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
      :style="`left: ${cloud.xPosition}px`"
      :src="cloud.src"
      :alt="cloud.alt"
    />

    <div class="join__buildings-wrapper">
      <img class="join__buildings" src="@/../public/img/TheJoinSection/buildings.png" alt="" />
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
    min-width: 2488px;
    transform: translateX(calc(-55%));
  }
  &__buildings {
    position: absolute;
    top: 170px;
    right: 35px;
    z-index: 1;
    &_clouds {
      position: absolute;
      bottom: -390px;
      left: 336px;
      z-index: 1;
    }
  }
}
</style>
