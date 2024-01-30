<script setup>
import { onMounted, ref } from 'vue'
import TheLogotype from './TheLogotype.vue'
import TheNavigation from './TheNavigation.vue'
import TheButton from './TheButton.vue'
import { useGlobalStore } from '../stores/global'
import {createRouter as $router} from "vue-router";

const globalStore = useGlobalStore();

const openModal = () => {
  openNavbar();
  globalStore.changeModalOpened(true);
};

const _opened = ref(false)
const header = ref(null)

function animate({ timing, draw, duration }) {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // вычисление текущего состояния анимации
    let progress = timing(timeFraction);

    draw(progress); // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}

const openNavbar = () => {
  if (screen && screen.width <= 1100) {
    const heightOfHeader = 466;
    if (!_opened.value) {
      _opened.value = !_opened.value;
      animate({
        duration: 400,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          header.value.style.height = progress * heightOfHeader + 'px';
        }
      });
      header.value.style.height = heightOfHeader + 'px'
    } else {
      const heightOfHeader = 466;

      animate({
        duration: 400,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          header.value.style.height = heightOfHeader - progress * (heightOfHeader - 40) + 'px';
          if (progress === 1) {
            _opened.value = !_opened.value;
          }
        }
      });
    }
    
    if (document && document.documentElement) document.documentElement.classList.toggle('_fixed')
  }
}

const openSection = (item) => {
  if (window.location.pathname !== '/'){
    window.location.replace('/');
  }
  openNavbar();
  const getElementToScroll = document.querySelector(`#${item}`);
  
  if (screen && screen.width <= 1100) {
    setTimeout(() => {
      window.scrollTo({
        top: getElementToScroll.offsetTop,
        behavior: 'smooth'
      })
    }, 500)
  } else {
    const added = item === 'Компания' ? 120 : 0;
    window.scrollTo({
      top: getElementToScroll.offsetTop - added,
      behavior: 'smooth'
    })
  }
  
};

onMounted(() => {
  if (screen && screen.width <= 1100) {
    document.body.addEventListener('click', (event) => {
      if (event.target && event.target.getAttribute('class') && !event.target.getAttribute('class').includes('header') && _opened.value) {
        openNavbar();
      }
    });
  }
});
</script>

<template>
  <header
    ref="header"
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
      <TheNavigation @open-section="openSection"/>
      <div class="header__dash"></div>
      <div class="header__mobile-btns">
        <TheButton
          class="header__mobile-btn animate__animated animate__fadeIn"
          data-wow-delay=".2s"
          color="white"
          size="medium"
          href="https://app.skyfort.capital"
        >
          Вход
        </TheButton>
        <TheButton
          class="header__mobile-btn animate__animated animate__fadeIn"
          data-wow-delay=".4s"
          color="black"
          size="medium"
          @tap="openModal"
        >
          Регистрация
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
  will-change: height;
  max-width: 1080px;
  width: calc(100% - 64px);
  position: fixed;
  z-index: 1000;
  top: 38px;
  left: 50%;
  transform: translateX(-50%);
  @include adaptive-value('border-radius', 34, 20, 1);
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
  overflow: hidden;
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

@media (max-width: 490px) {
  .header {
    max-width: calc(100% - 40px);
    width: 100%;
  }
}
</style>
