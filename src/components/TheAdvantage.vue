<script setup>
import { ref } from 'vue'
import TheButton from './TheButton.vue'
import TheContainer from './TheContainer.vue'
import TheSectionTitle from './TheSectionTitle.vue'
import TheSliderButton from './TheSliderButton.vue'

defineProps({
  settings: Object
})

const swiper = ref(null)
</script>

<template>
  <section
    class="advantage"
    :class="{ blue: settings.style === 'blue', white: settings.style === 'white' }"
  >
    <TheContainer>
      <div class="advantage__inner">
        <TheSectionTitle
          class="advantage__title wow animate__animated animate__fadeInUp"
          data-wow-duration="1.4s"
          :color="`${settings.style === 'blue' ? '#fff' : '#052E3E'}`"
        >
          {{ settings.title }}
        </TheSectionTitle>
        <p class="advantage__desc wow animate__animated animate__fadeIn" data-wow-delay="0.3s">
          {{ settings.desc }}
        </p>

        <div
          class="swiper-block wow animate__animated animate__fadeIn"
          data-wow-duration="1.4s"
          data-wow-delay="0.5s"
        >
          <swiper-container
            ref="swiper"
            :grabCursor="true"
            :injectStyles="[
              `
            :host .swiper {
              overflow: visible;
            }
            :host .swiper-wrapper {
              align-items: stretch;
            }
            :host .swiper-slide {
              height: auto;
            }
            `
            ]"
            class="swiper advantage__swiper"
            slides-per-view="3"
            speed="700"
            spaceBetween="21"
          >
            <swiper-slide
              class="swiper-slide advantage__swiper-slide adv-slide"
              :class="[
                { blue: settings.style === 'blue', white: settings.style === 'white' },
                settings.cardStyle
              ]"
              v-for="card in settings.cards"
              :key="card.imgSrc"
            >
              <div class="adv-slide__inner">
                <a class="adv-slide__link" :href="href">
                  <svg
                    class="adv-slide__link-img"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path d="M9.94035 0.809326H4.03774V2.05947H9.94035V0.809326Z" fill="#052E3E" />
                    <path d="M11.1747 2.05957H9.92453V7.96216H11.1747V2.05957Z" fill="#052E3E" />
                    <path
                      d="M6.54259 4.57531L0.81344 10.3044L1.69743 11.1884L7.42659 5.4593L6.54259 4.57531Z"
                      fill="#052E3E"
                    />
                  </svg>
                </a>
                <div class="adv-slide__tag" v-if="card.tag.length > 0">
                  <span>
                    {{ card.tag }}
                  </span>
                </div>
                <img
                  class="adv-slide__img"
                  :src="card.imgSrc"
                  alt=""
                  v-if="settings.cardStyle === 'top-image'"
                />
                <div class="adv-slide__inner-wrapper">
                  <h3 class="adv-slide__title">
                    {{ card.title }}
                  </h3>
                  <p class="adv-slide__desc" v-if="card.desc">
                    {{ card.desc }}
                  </p>
                  <date class="adv-slide__date" v-if="card.date">
                    {{ card.date }}
                  </date>
                  <ul class="adv-slide__columns" v-if="card.columns.length > 0">
                    <li
                      class="adv-slide__column"
                      v-for="column in card.columns"
                      :key="column.items[0]"
                    >
                      <ul class="adv-slide__list">
                        <li class="adv-slide__item" v-for="item in column.items" :key="item">
                          {{ item }}
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <img
                class="adv-slide__img"
                :src="card.imgSrc"
                alt=""
                v-if="settings.cardStyle === 'bottom-image'"
              />
            </swiper-slide>
          </swiper-container>
          <div
            class="swiper-button-prev advantage__swiper-button-prev"
            @click="swiper.swiper.slidePrev()"
          >
            <TheSliderButton direction="prev" />
          </div>
          <div
            class="swiper-button-next advantage__swiper-button-next"
            @click="swiper.swiper.slideNext()"
          >
            <TheSliderButton direction="next" />
          </div>
        </div>

        <TheButton
          class="advantage__btn wow animate__animated animate__bounceIn"
          data-wow-delay="0.5s"
          data-wow-duration="1.4s"
          color="white"
          size="big"
        >
          {{ settings.btnText }}
        </TheButton>
      </div>
    </TheContainer>
  </section>
</template>

<style lang="scss">
.swiper-wrapper {
  align-items: stretch;
}
.advantage {
  padding: 75px 0;
  &__btn {
    margin: 0 auto;
    display: block;
  }
  &.blue {
    background: #a5cce0;
  }
  &.white {
    background: #f2f3f5;
  }
  &__title {
    text-align: center;
    font-family: 'Atyp Display', sans-serif;
    font-size: 96px;
    letter-spacing: -1.92px;
    margin-bottom: 10px;
  }
  &__desc {
    text-align: center;
    font-size: 18px;
    line-height: calc(24 / 18);
    letter-spacing: 0.36px;
    max-width: 740px;
    margin: 0 auto;
    margin-bottom: 65px;
  }
  &__swiper {
    margin-bottom: 80px;
    overflow: visible !important;
  }
  &__swiper-button-next {
    position: absolute;
    top: 50%;
    right: -64px;
    z-index: 5;
    transform: translateX(100%) translateY(-50%);
  }
  &__swiper-button-prev {
    position: absolute;
    top: 50%;
    left: -64px;
    z-index: 5;
    transform: translateX(-100%) translateY(-50%);
  }
}

.adv-slide {
  height: auto !important;
  position: relative;
  display: flex !important;
  flex-direction: column;
  &__inner {
    flex: 0 1 100% !important;
  }
  &__tag {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    top: 26px;
    left: 19px;
    padding: 8px 19px;
    border-radius: 53px;
    background: #fff;
    span {
      font-size: 12px;
      line-height: 16px;
      letter-spacing: -0.12px;
      transform: translateY(1px);
    }
  }
  &__link {
    position: absolute;
    z-index: 2;
    top: 17px;
    right: 22px;
    padding: 20.8px;
    background: #fff;
    border-radius: 50%;
    display: flex;
    cursor: pointer;
    path {
      transition: 0.15s;
    }
    @media (hover: hover) {
      &:hover {
        path {
          fill: #a5cce0;
        }
      }
    }
  }
  &__title {
    font-family: 'Atyp Display', sans-serif;
    font-size: 26px;
    line-height: 30px;
    margin-bottom: 17px;
    padding-right: 29px;
  }
  &__columns {
    display: flex;
    margin-bottom: 34px;
  }
  &__column {
    display: flex;
    flex-direction: column;
    max-width: 123.5px;
    width: 100%;
  }
  &__item {
    padding-left: 11px;
    font-size: 12px;
    line-height: calc(14 / 12);
    letter-spacing: 0.24px;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 3px;
      height: 3px;
      background-color: #052e3e;
    }
  }
  &__item + &__item {
    margin-top: 4px;
  }
  &__column + &__column {
    margin-left: 4px;
  }
  &__img {
    display: block;
    border-radius: 44px;
    transform: translateY(1px);
  }
  &__desc {
    margin-bottom: 12px;
    font-size: 12px;
    line-height: calc(14.5 / 12);
    letter-spacing: 0.24px;
    max-width: 210px;
  }
  &__date {
    font-size: 10px;
    line-height: calc(14 / 10);
    letter-spacing: -0.1px;
  }
  &.blue {
    .adv-slide__inner {
      padding: 60px 9px 0 38px;
    }
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 46px;
    background: linear-gradient(
      154deg,
      rgba(255, 255, 255, 0.8) 5.42%,
      rgba(255, 255, 255, 0) 36.35%
    );
  }
  &.white {
    border-radius: 40px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    background: #fff;
    .adv-slide__img {
      border-radius: 38px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      transform: translateY(-1px);
    }
    .adv-slide__title {
      padding: 0;
      margin-bottom: 12px;
      font-size: 18px;
      line-height: calc(22 / 18);
    }
    .adv-slide__inner-wrapper {
      padding: 24px 30px;
    }
  }
}
</style>
