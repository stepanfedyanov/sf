<template>
  <div>
    <img class="join__upper-clouds" src="img/TheJoinSection/upper-clouds.png" alt="" />
    <div class="join__buildings-wrapper">
      <img class="join__buildings" src="/img/TheJoinSection/buildings.png" alt="" />
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
