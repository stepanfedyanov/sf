<script setup>
import TheSliderButton from './TheSliderButton.vue'
import { ref, onMounted } from 'vue'
const swiperEl = ref(null)
const sliders = [
  {
    quote:
      'Для управляющих и их клиентов мы открываем доступ к глобальной инфраструктуре, ранее доступной лишь крупным институционалам и ультрабогатым семьям',
    author: 'Илья Опренко, Co-founder & CEO'
  },
  {
    quote:
      'Платформа Skyfort объединяет управляющих капиталом, инвесторов и поставщиков качественных инвестиционных продуктов и сервисов по всему миру',
    author: 'Сергей Ишков, Co-founder & COO/CFO'
  },
  {
    quote:
      'Мы стремимся занять позицию выше хаоса, предугадывая и диверсифицируя риски, чтобы стать надежной безопасной гаванью для владельцев капитала',
    author: 'Илья Опренко, Co-founder & CEO'
  },
  {
    quote:
      'Наша задача - агрегировать лучшие мировые практики управления крупным капиталом и сделать их доступными более широкому кругу состоятельных людей',
    author: 'Игорь Смирнов, Co-founder & CPO/CMO'
  }
]

let windowInterval
const initEvent = () => {
  swiperEl.value.classList.add('hidden')
  setTimeout(() => {
    for (let i = 0; i < swiperEl.value.swiper.slides.length - 1; i++) {
      swiperEl.value.swiper.slidePrev()
    }
    swiperEl.value.classList.remove('hidden')
  }, 400)
}
onMounted(() => {
  const swiperParams = {
    slidesPerView: 1,
    pagination: {
      clickable: true
    },
    loop: true,
    speed: 0,
    allowTouchMove: true,
    on: {
      init: function () {
        windowInterval = window.setInterval(initEvent, 4000)
      }
    },
    injectStyles: [
      `
        .swiper {
          overflow: visible;
        }
        .swiper-pagination {
          display: none;
        }
        @media (max-width: 890px) {
          .swiper-pagination {
            display: block;
            top: auto !important;
            bottom: -68px !important;
            transform: translateY(50%) !important;
          }
          .swiper-pagination-bullet {
            width: 4px !important;
            height: 4px !important;
            background-color: #DDD8D5 !important;
            margin: 0 8px !important;
            opacity: 1 !important;
            transition: 0.2s !important;
            margin: 0px 6px !important;
          }
          .swiper-pagination-bullet-active {
            opacity: 1 !important;
            background-color: #052E3E !important;
          }
        }
        `
    ]
  }

  // now we need to assign all parameters to Swiper element
  Object.assign(swiperEl.value, swiperParams)

  // and now initialize it
  swiperEl.value.initialize()
})

const slideChanged = () => {
  window.clearInterval(windowInterval)
  windowInterval = window.setInterval(initEvent, 4000)
}

const nextSlide = () => {
  swiperEl.value.classList.add('hidden')
  slideChanged()
  setTimeout(() => {
    for (let i = 0; i < swiperEl.value.swiper.slides.length - 1; i++) {
      swiperEl.value.swiper.slidePrev()
    }
    swiperEl.value.classList.remove('hidden')
  }, 400)
}

const prevSlide = () => {
  swiperEl.value.classList.add('hidden')
  slideChanged()
  setTimeout(() => {
    swiperEl.value.swiper.slidePrev()
    swiperEl.value.classList.remove('hidden')
  }, 400)
}
</script>

<template>
  <div class="swiper-block">
    <swiper-container :injectStyles="[]" init="false" class="swiper video__swiper" ref="swiperEl">
      <swiper-slide
        class="swiper-slide video__swiper-slide video-slide"
        v-for="slider in sliders"
        :key="slider"
      >
        <blockquote class="video-slide__quote">
          <p class="video-slide__text">
            {{ slider.quote }}
          </p>
          <cite class="video-slide__author">{{ slider.author }}</cite>
        </blockquote>
      </swiper-slide>
    </swiper-container>
    <div class="swiper-button-prev video__swiper-button-prev" @click="prevSlide">
      <TheSliderButton direction="prev" />
    </div>
    <div class="swiper-button-next video__swiper-button-next" @click="nextSlide">
      <TheSliderButton direction="next" />
    </div>
    <div class="swiper-pagination video__swiper-pagination"></div>
  </div>
</template>

<style lang="scss">
.swiper-block {
  position: relative;
}

.intro {
  .swiper-block {
    position: relative;
    @include adaptive-value('margin-top', 80, 87, 1);
  }
}
// .video__swiper.hidden ~ *[class*='swiper-button'] {
//   pointer-events: none;
// }
.video {
  &__swiper {
    overflow: visible !important;
    position: relative;
    transition: 0.4s;
    &.hidden {
      opacity: 0;
    }
  }
  &__swiper-slide:not(.swiper-slide-active) {
    display: none;
  }
  &__swiper-button-next {
    position: absolute;
    top: 0;
    right: -64px;
    transform: translateX(100%);
    z-index: 14;
  }
  &__swiper-button-prev {
    position: absolute;
    top: 0;
    left: -64px;
    transform: translateX(-100%);
    z-index: 14;
  }
  &__swiper-slide {
    min-height: 128px;
  }
}
.swiper-button-img {
  @include adaptive-value('width', 54, 25, 1);
  @include adaptive-value('height', 54, 25, 1);
}
.video-slide {
  &__quote {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
  }
  &__text {
    text-align: center;
    @include adaptive-value('font-size', 18, 14.4, 1);
    @include adaptive-value('line-height', 25, 21, 1);
    @include adaptive-value('letter-spacing', 0.36, 0.36, 1);
    @include adaptive-value('margin-bottom', 22, 17, 1);
  }
  &__author {
    @include adaptive-value('font-size', 14, 15, 1);
    font-style: normal;
    font-weight: 700;
    line-height: calc(24 / 14);
    letter-spacing: 0.28px;
  }
}

@media (max-width: 1260px) {
  .video {
    &__swiper-button-next {
      @include adaptive-value('right', 64, 60, 1);
    }
    &__swiper-button-prev {
      @include adaptive-value('left', 64, 60, 1);
    }
  }
}

@media (max-width: 890px) {
  .video {
    &__swiper-button-next {
      bottom: -68px;
      top: auto;
      transform: translate(100%, 53%);
      right: 100px;
      @include adaptive-value('right', 100, 70, 1);
    }
    &__swiper-button-prev {
      bottom: -68px;
      transform: translate(-100%, 53%);
      top: auto;
      left: 100px;
      @include adaptive-value('left', 100, 70, 1);
    }
  }
}

@media (max-width: 500px) {
  .video-slide {
    &__text {
      max-width: 297px;
      margin-right: auto;
      margin-left: auto;
    }
  }
}

@media (max-width: 490px) {
  .video-slide {
    &__text {
      font-weight: 300;
      color: #4e575a;
    }
    &__author {
      font-weight: 300;
    }
  }
}
</style>
