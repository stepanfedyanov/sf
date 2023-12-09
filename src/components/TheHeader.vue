<script setup>
import TheLogotype from './TheLogotype.vue'
import TheNavigation from './TheNavigation.vue'
</script>

<template>
  <header class="header animate__animated animate__fadeIn">
    <div class="header__inner">
      <TheLogotype fill="#052E3E" />
      <TheNavigation />
      <div class="header__burger">
        <span class="header__line"></span>
        <span class="header__line"></span>
        <span class="header__line"></span>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  max-width: 1080px;
  width: calc(100% - 64px);
  position: fixed;
  z-index: 110;
  top: 38px;
  left: 50%;
  transform: translateX(-50%);
  @include adaptive-value('border-radius', 34, 22, 1);
  border: 1px solid #dbecf5;
  background: linear-gradient(
    92deg,
    rgba(255, 255, 255, 0.69) -36.65%,
    rgba(255, 255, 255, 0) 140.09%
  );
  backdrop-filter: blur(15px);
  @include adaptive-value('padding-top', 16, 9, 1);
  @include adaptive-value('padding-bottom', 16, 9, 1);
  @include adaptive-value('padding-left', 38, 24, 1);
  @include adaptive-value('padding-right', 38, 24, 1);
  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__burger {
    width: 13px;
    height: 12px;
    flex-direction: column;
    justify-content: space-between;
    display: none;
  }
  &__line {
    height: 2px;
    background-color: #000;
    width: 100%;
  }
}

@media (max-width: 750px) {
  .header {
    &__burger {
      display: flex;
    }
  }
}

@media (max-width: 370px) {
  .header {
    width: calc(100% - 40px);
  }
}
</style>
