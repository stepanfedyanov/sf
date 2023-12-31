<script setup>
import { ref, computed } from 'vue'
import TheContainer from './TheContainer.vue'
import TheSliderButton from './TheSliderButton.vue'

const swiper = ref(null)

const cards = [
  {
    img: './img/TheCommunitySection/methods/1.png',
    title: 'Маркетплейс',
    desc: 'Качественные инвестиционные продукты и&nbsp;сервисы от&nbsp;проверенных поставщиков со&nbsp;всего мира'
  },
  {
    img: './img/TheCommunitySection/methods/7.png',
    title: 'Семейный офис',
    desc: 'Облачный семейный офис на базе цифровой платформы и сообщества управляющих'
  },
  {
    img: './img/TheCommunitySection/methods/2.png',
    title: 'Лаборатория',
    desc: 'Продуктовая фабрика с фокусом на инвестиции в private markets (PE/VC, Private Credit) '
  },
  {
    img: './img/TheCommunitySection/methods/3.png',
    title: 'Аналитика',
    desc: 'Community-driven think tank&nbsp;&mdash; аналитический центр на&nbsp;базе профессионального сообщества'
  },
  {
    img: './img/TheCommunitySection/methods/4.png',
    title: 'CRM',
    desc: 'Цифровая платформа для финансовых советников, обеспечивающая полный цикл ведения клиентов'
  },
  {
    img: './img/TheCommunitySection/methods/5.png',
    title: 'Агрегация',
    desc: 'Цифровая платформа управления капиталом: полная картина всех видов активов'
  },
  {
    img: './img/TheCommunitySection/methods/6.png',
    title: 'Сообщество',
    desc: 'Профессиональное сообщество управляющих капиталом и финансовых советников'
  },
  {
    img: './img/TheCommunitySection/methods/8.png',
    title: 'Академия',
    desc: 'Собственная система подготовки независимых управляющих  и финансовых советников'
  },
  {
    img: './img/TheCommunitySection/methods/9.png',
    title: 'Медиа',
    desc: 'Центр создания и дистрибуции  контента, генерируемого резидентами сообщества Skyfort'
  },
  {
    img: './img/TheCommunitySection/methods/10.png',
    title: 'Рейтинги',
    desc: 'Сертификация и&nbsp;оценка независимых управляющих и&nbsp;финансовых советников, ежегодный глобальный рейтинг'
  }
]

const isMobile = computed(() => window && window.screen && window.screen.width <= 1100)
</script>

<template>
  <section class="methods">
    <TheContainer>
      <div class="methods__inner">
        <swiper-container
          :mousewheel="{
            forceToAxis: true,
            sensitivity: 0.6,
            thresholdTime: 400,
            thresholdDelta: 20
          }"
          :pagination="{
            clickable: true
          }"
          :spaceBetween="isMobile ? 10 : 30"
          :slidesPerView="2"
          :injectStyles="[
            `
            :host .swiper {
              overflow: visible !important;
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
          ]"
          class="swiper video__swiper"
          ref="swiper"
        >
          <swiper-slide
            :class="`methods__card methods__cards-${id + 1}`"
            v-for="(card, id) in cards"
            :key="card.title"
          >
            <div class="methods__card-img-wrapper">
              <img class="methods__card-img" :src="card.img" :alt="`Icon ${card.title}`" />
            </div>
            <h3 class="methods__title">
              {{ card.title }}
            </h3>
            <p class="methods__desc" v-html="card.desc" />
          </swiper-slide>
        </swiper-container>
        <div
          class="swiper-button-prev methods__swiper-button-prev"
          @click="swiper.swiper.slidePrev()"
        >
          <TheSliderButton direction="prev" />
        </div>
        <div
          class="swiper-button-next methods__swiper-button-next"
          @click="swiper.swiper.slideNext()"
        >
          <TheSliderButton direction="next" />
        </div>
        <div class="swiper-pagination methods__swiper-pagination"></div>
      </div>
    </TheContainer>
  </section>
</template>

<style lang="scss">
.methods {
  position: relative;
  z-index: 100;
  margin-bottom: 90px;
  @media (max-width: 1100px) {
    margin-bottom: 20px;
  }
  @include adaptive-value('margin-top', 78, 12, 1);
  &__inner {
    position: relative;
    .swiper {
      @media (min-width: 1100px) {
        width: 80%;
      }
    }
  }
  &__swiper-button-prev {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -25px;
    z-index: 2;
  }
  &__swiper-button-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -25px;
    z-index: 2;
  }
  &__cards {
    display: flex;
    margin: 0 auto;
    &.swiper-slide-active {
      margin-right: 60px;
      @media (max-width: 1100px) {
        margin-right: 10px;
      }
      @media (max-width: 374px) {
        margin-right: 15px;
      }
    }
    &.swiper-slide-prev {
      transform: translateX(-50px);
      @media (max-width: 1100px) {
        transform: translateX(-10px);
      }
      opacity: 0.7;
    }
  }
  &__card {
    @include adaptive-value('padding-top', 73, 32, 1);
    @include adaptive-value('padding-bottom', 73, 32, 1);
    @include adaptive-value('padding-left', 36, 20, 1);
    @include adaptive-value('padding-right', 36, 20, 1);
    @include adaptive-value('border-radius', 50, 30, 1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    background: linear-gradient(168deg, #fff -5.86%, rgba(255, 255, 255, 0) 96.08%);
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    @media (max-width: 1100px) {
      min-height: 300px;
    }
  }
  &__card-img-wrapper {
    text-align: center;
    // @include adaptive-value('padding-top', 42, 16, 1);
    // @include adaptive-value('padding-bottom', 42, 16, 1);
    // @include adaptive-value('padding-left', 64, 23, 1);
    // @include adaptive-value('padding-right', 64, 23, 1);
    // @include adaptive-value('border-radius', 130.909, 43.636, 1);
    // background: #fff;
    display: inline-block;
    @include adaptive-value('margin-bottom', 42, 16, 1);
  }
  &__card-img {
    @include adaptive-value('width', 243, 70, 1);
  }
  &__title {
    @include adaptive-value('margin-bottom', 35, 10, 1);
    font-family: 'Atyp Display', sans-serif;
    @include adaptive-value('font-size', 40, 15, 1);
    line-height: normal;
    @include adaptive-value('letter-spacing', -0.1, -0.3, 1);
    font-weight: 300;
  }
  &__desc {
    @include adaptive-value('font-size', 15, 11, 1);
    @include adaptive-value('line-height', 16.5, 14.8, 1);
    max-width: 270px;
    letter-spacing: -0.2px;
    margin: 0 auto;
    @media (max-width: 490px) {
      font-weight: 300;
    }
  }
}

@media (max-width: 1260px) {
  .methods {
    &__swiper-button-next {
      @include adaptive-value('right', 64, 60, 1);
    }
    &__swiper-button-prev {
      @include adaptive-value('left', 64, 60, 1);
    }
  }
}

@media (max-width: 890px) {
  .methods {
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
</style>
