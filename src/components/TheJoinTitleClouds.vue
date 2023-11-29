<script>

</script>

<template>
  <div class="join-title__clouds">
    <img class="join-title__clouds-1" src="/img/TheJoinSection/TitleClouds/cloud-1.png" alt="Clouds"/>
    <img class="join-title__clouds-2" src="/img/TheJoinSection/TitleClouds/cloud-2.png" alt="Clouds"/>
  </div>
</template>

<style lang="scss">
.join-title {
  &__clouds {
    position: sticky;
    z-index: 2;
    top: 0;
    left: 0;
    height: 30vh;
    width: 100%;
    &-1 {
      position: absolute;
      bottom: -400px;
      left: -350px;
      z-index: 2;
    }
    &-2 {
      position: absolute;
      right: -200px;
      top: -100px;
    }
  }
}
</style>