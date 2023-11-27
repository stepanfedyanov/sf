<script setup>
import { onMounted, ref } from 'vue';

// Clouds array
const clouds = ref([]);

// Constants:
// ======================
// const screenHeight = (screen && typeof screen.height === 'number') ? screen.height : null;
const screenDetectorPercent = 0.9; // if center of active cloud in this position – activate smth
const screenAppearPercent = 0.7;
const screenWidth = (screen && typeof screen.width === 'number') ? screen.width : null;

const cloudsClass = 'join__upper-clouds';
const speedX = 1;
const changeSpeedXTime = 10; // seconds
const cloudImage = '/img/TheJoinSection/upper-clouds.png';
const cloudWidth = 2488;
// const cloudHeight = 1350;
const cloudXInitPosition = -(screenWidth * screenAppearPercent);

// Functions:
// ======================

// clouds -> Cloud[]
// Create cloud element and add it to clouds array
const createCloud = () => {
  const cloudElement = {
    class: cloudsClass,
    src: cloudImage,
    alt: 'Clouds',
    xPosition: cloudXInitPosition,
    active: true
  };
  
  clouds.value.push(cloudElement);
};

// cloudsArray -> cloudsArray
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

const changeCloudPosition = () => {
  checkScreenBorder();

  clouds.value.forEach(cloud => {
    cloud.xPosition = cloud.xPosition + speedX;
  });
};

onMounted(() => {
  // Init clouds animations
  createCloud();

  setInterval(() => {
    //console.log(clouds.value);
    changeCloudPosition();
  }, changeSpeedXTime);
});
</script>

<template>
  <div>
    <img
      v-for="(cloud, idx) in clouds"
      :key="`cloud-${idx}`"
      :class="cloud.class"
      :style="`left: ${cloud.xPosition}px`"
      :src="cloud.src"
      :alt="cloud.alt"
    />

    <!-- <img
      class="join__upper-clouds"
      :style="`left: ${cloudXInitPosition}px`"
      src="@/../public/img/TheJoinSection/upper-clouds.png"
      alt=""
    /> -->
    <div class="join__buildings-wrapper">
      <img class="join__buildings" src="@/../public/img/TheJoinSection/buildings.png" alt="" />
    </div>
  </div>
</template>

<style lang="scss">
.join {
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 40%, #fff 80%);
    z-index: 2;
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
  }
}
</style>
