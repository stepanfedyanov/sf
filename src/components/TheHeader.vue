<script setup>
import { ref } from 'vue'
import TheLogotype from './TheLogotype.vue'
import TheNavigation from './TheNavigation.vue'
import TheButton from './TheButton.vue'

const _opened = ref(false)

const openNavbar = () => {
  _opened.value = !_opened.value;
  if (document && document.documentElement) document.documentElement.classList.toggle('_fixed')
}
</script>

<template>
  <header
    :class="[
      'header animate__animated animate__fadeIn',
      {
        _opened: _opened
      }
    ]"
  >
    <div class="header__inner">
      <div class="header__inner-row">
        <TheLogotype class="header__logo" fill="#052E3E" />
        <div class="header__burger" @click="openNavbar">
          <span class="header__line"></span>
          <span class="header__line"></span>
          <span class="header__line"></span>
        </div>
      </div>
      <TheNavigation />
      <div class="header__dash"></div>
      <div class="header__mobile-btns">
        <TheButton
          class="header__mobile-btn animate__animated animate__fadeIn"
          data-wow-delay=".2s"
          color="white"
          size="medium"
        >
          Log in
        </TheButton>
        <TheButton
          class="header__mobile-btn animate__animated animate__fadeIn"
          data-wow-delay=".4s"
          color="black"
          size="medium"
        >
          Become a member
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="11"
            viewBox="0 0 10 11"
            fill="none"
          >
            <path
              d="M3.30102 0.744805L2.9165 1.12932L6.78235 4.99516L7.16686 4.61065L3.30102 0.744805Z"
              fill="white"
            />
            <path
              d="M6.78283 4.99608L2.91699 8.86192L3.30151 9.24644L7.16735 5.38059L6.78283 4.99608Z"
              fill="white"
            />
          </svg>
        </TheButton>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  max-width: 1080px;
  width: calc(100% - 64px);
  position: fixed;
  z-index: 1000;
  top: 38px;
  left: 50%;
  transform: translateX(-50%);
  @include adaptive-value('border-radius', 34, 22, 1);
  background: linear-gradient(
    92deg,
    rgba(255, 255, 255, 0.69) -36.65%,
    rgba(255, 255, 255, 0) 140.09%
  );
  backdrop-filter: blur(15px);
  @include adaptive-value('padding-top', 15, 4, 1);
  @include adaptive-value('padding-bottom', 15, 4, 1);
  @include adaptive-value('padding-left', 38, 27, 1);
  @include adaptive-value('padding-right', 24, 23, 1);
  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__logo {
    @include adaptive-value('width', 146, 95.28, 1);
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
    transition: 0.4s;
    transform-origin: right;
  }
  &._opened {
    .header__line {
      &:nth-child(1) {
        transform: rotate(-45deg) translateY(1px);
        position: relative;
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: rotate(47deg);
      }
    }
  }
}

@media (max-width: 750px) {
  .header {
    &._opened {
      padding-bottom: 48px;
    }
    &__burger {
      display: flex;
    }
    &__inner {
      align-items: flex-start;
      flex-direction: column;
    }
  }
}

@media (max-width: 370px) {
  .header {
    width: calc(100% - 40px);
  }
}
</style>
