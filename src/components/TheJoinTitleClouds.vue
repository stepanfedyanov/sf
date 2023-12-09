<script></script>

<template>
  <div class="join-title__clouds">
    <img class="join-title__clouds-2" src="/img/TheJoinSection/TitleClouds/cloud-2.png" alt="Clouds"/>
    <img class="join-title__clouds-3" src="/img/TheJoinSection/TitleClouds/cloud-3.png" alt="Clouds"/>
  </div>
</template>

<style lang="scss">
.join-title {
  &__clouds {
    // background-color: #000;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    &-1 {
      position: absolute;
      bottom: -20px;
      left: -350px;
      z-index: 2;
    }
    &-2 {
      position: absolute;
      right: -200px;
      top: 50px;
    }
    &-3 {
      position: absolute;
      right: 350px;
      top: -20px;
    }
  }
}
</style>