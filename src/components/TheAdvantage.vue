<script setup>
import { onMounted, ref, toRefs } from 'vue'
import TheButton from './TheButton.vue'
import TheContainer from './TheContainer.vue'
import TheSectionTitle from './TheSectionTitle.vue'
import TheSliderButton from './TheSliderButton.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const props = defineProps({
  settings: Object,
  idx: Number
})

const { idx, settings } = toRefs(props)

gsap.registerPlugin(ScrollTrigger)

const swiper = ref(null)

const advantageElement = ref(null)

onMounted(() => {
  // TODO: убрать на этапе мобильной анимации
  if (screen && screen.width >= 1024) {
    const sliderTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: advantageElement.value,
        start: 'top+=30% bottom',
        end: 'bottom bottom',
        scrub: true
      }
    })

    const slides = document.querySelectorAll(`.advantage__swiper-slide-${idx.value}`)
    const upperPosition = 20

    slides.forEach((slide, index) => {
      gsap.set(slide, { yPercent: (slides.length - (index + 1)) * upperPosition })
    })

    sliderTimeline.to(`.advantage__swiper-slide-${idx.value}`, { yPercent: 0 });
  }
});
</script>

<template>
  <section
    class="advantage"
    ref="advantageElement"
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

        <div class="swiper-block">
          <swiper-container
            ref="swiper"
            :centeredSlidesBounds="true"
            :breakpoints="{
              381: {
                slidesPerView: 1.2
              },
              460: {
                slidesPerView: 1.5
              },
              580: {
                slidesPerView: 2
              },
              900: {
                slidesPerView: 3
              }
            }"
            :injectStyles="[
              `
              @media (min-width: 55px) {
                :host .swiper {
              overflow: visible;
            }
              }
           
            
            @media (min-width: 381px) {
              :host .swiper-slide {
              height: auto;
            }
            :host .swiper-wrapper {
              align-items: stretch;
            }
            }
            
            .swiper-pagination {
              display: none;
              top: auto !important;
              bottom: -44px !important;
              transform: translateY(50%) !important;
            }
            @media (max-width: 600px) {
              .swiper-pagination {
                display: block;
              }
            }
            .swiper-pagination-bullet {
              background: #fff !important;
              width: 4px !important;
              height: 4px !important;
              opacity: 1 !important;
              transition: .2s !important;
            }
            .swiper-pagination-bullet-active {
              background-color: #052E3E !important;
            } 
            
            `
            ]"
            class="swiper advantage__swiper"
            slidesPerView="1"
            speed="700"
            spaceBetween="21"
            :pagination="{
              clickable: true
            }"
          >
            <swiper-slide
              :class="[
                `swiper-slide advantage__swiper-slide advantage__swiper-slide-${idx} adv-slide`,
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
                  :alt="`Image ${card.title}`"
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
                :alt="`Image ${card.title}`"
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
          <div class="swiper-pagination advantage__swiper-pagination"></div>
        </div>

        <TheButton
          class="advantage__btn wow animate__animated animate__fadeIn"
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
  padding: 145px 0 85px;
  overflow: hidden;
  &__btn {
    display: block;
    text-align: center;
    button.btn {
      padding: 7px 50px;
      background: linear-gradient(93deg, #fff 0%, rgba(255, 255, 255, 0.26) 54.33%);
      span {
        letter-spacing: 0.6px;
        font-size: 15.7px;
      }
    }
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
    @include adaptive-value('font-size', 96, 48, 1);
    letter-spacing: -1.92px;
    @include adaptive-value('margin-bottom', 25, 61, 1);
  }
  &__desc {
    text-align: center;
    @include adaptive-value('font-size', 18, 19, 1);
    line-height: calc(25 / 18);
    letter-spacing: 0.3px;
    max-width: 730px;
    margin: 0 auto;
    margin-bottom: 65px;
    font-weight: 300;
  }
  &__swiper {
    @include adaptive-value('margin-bottom', 70, 32, 1);
    overflow: visible !important;
  }
  &__swiper-button-next {
    position: absolute;
    top: 50%;
    right: -64px;
    z-index: 5;
    transform: translateX(100%) translateY(-90%);
    svg {
      background: linear-gradient(100deg, rgba(#fff, 0.06), #fff);
      @include adaptive-value('width', 58, 24, 1);
      @include adaptive-value('height', 58, 24, 1);
    }
  }
  &__swiper-button-prev {
    position: absolute;
    top: 50%;
    left: -64px;
    z-index: 5;
    transform: translateX(-100%) translateY(-90%);
    svg {
      background: linear-gradient(100deg, rgba(#fff, 0.06), #fff);
      @include adaptive-value('width', 58, 24, 1);
      @include adaptive-value('height', 58, 24, 1);
    }
  }

  &.white {
    .advantage__title {
      @include adaptive-value('font-size', 88, 48, 1);
      letter-spacing: 1px;
      @include adaptive-value('margin-bottom', 34, 61, 1);
    }
    .advantage__desc {
      @include adaptive-value('font-size', 18, 19, 1);
      line-height: calc(25 / 18);
      letter-spacing: 0.32px;
      max-width: 740px;
      margin: 0 auto;
      margin-bottom: 60px;
      font-weight: 300;
    }
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
    @include adaptive-value('padding-top', 8, 6.79, 1);
    @include adaptive-value('padding-bottom', 8, 6.79, 1);
    @include adaptive-value('padding-left', 19, 16.12, 1);
    @include adaptive-value('padding-right', 19, 16.12, 1);
    @include adaptive-value('border-radius', 53, 45, 1);
    background: #fff;
    span {
      @include adaptive-value('font-size', 11.7, 10, 1);
      line-height: calc(16 / 12);
      letter-spacing: 0px;
      position: relative;
      top: 2px;
      font-weight: 500;
    }
  }
  &__link {
    position: absolute;
    z-index: 2;
    top: 20px;
    right: 20px;
    @include adaptive-value('padding', 18, 17.6, 1);
    background: #fff;
    border-radius: 50%;
    display: flex;
    cursor: pointer;
    svg {
      @include adaptive-value('width', 11, 8.7, 1);
    }
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
    @include adaptive-value('font-size', 26.5, 22, 1);
    line-height: calc(29 / 26);
    letter-spacing: 0.2px;
    @include adaptive-value('margin-bottom', 26, 14, 1);
    @include adaptive-value('padding-right', 69, 50, 1);
    transform: translateX(-1px);
  }
  &__columns {
    display: flex;
    @include adaptive-value('margin-bottom', 20, 28, 1);
  }
  &__column {
    display: flex;
    flex-direction: column;
    flex: 1 0 50%;
    width: 100%;
  }
  &__item {
    padding-left: 11px;
    @include adaptive-value('font-size', 11.8, 10.2, 1);
    line-height: calc(18 / 12);
    letter-spacing: 0.44px;
    position: relative;
    font-weight: 300;
    max-width: 125px;
    &::before {
      content: '';
      position: absolute;
      left: 1px;
      top: 6px;
      width: 3px;
      height: 3px;
      background-color: #052e3e;
      border-radius: 50%;
    }
  }
  &__item + &__item {
    @include adaptive-value('margin-top', 1, 3.39, 1);
  }
  &__column + &__column {
    @include adaptive-value('margin-left', 4, 3.39, 1);
  }
  &__img {
    display: block;
    @include adaptive-value('border-radius', 44, 33, 1);
    transform: translateY(1px);
  }
  &__desc {
    margin-bottom: 12px;
    @include adaptive-value('margin-bottom', 12, 10.18, 1);
    @include adaptive-value('font-size', 12, 10.18, 1);
    line-height: calc(14.5 / 12);
    letter-spacing: 0.24px;
    max-width: 210px;
    color: #4E575A;
  }
  &__date {
    line-height: calc(14 / 10);
    @include adaptive-value('font-size', 10, 8.5, 1);
    letter-spacing: -0.1px;
  }
  &.blue {
    .adv-slide__inner {
      @include adaptive-value('padding-top', 56, 50, 1);
      @include adaptive-value('padding-right', 20, 7.6, 1);
      @include adaptive-value('padding-left', 32, 32.24, 1);
    }
    border: 1px solid rgba(255, 255, 255, 0.5);
    @include adaptive-value('border-radius', 46, 37, 1);
    background: linear-gradient(
      154deg,
      rgba(255, 255, 255, 0.8) 5.42%,
      rgba(255, 255, 255, 0) 36.35%
    );
  }
  &.white {
    @include adaptive-value('border-radius', 40, 33, 1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    background: #fff;
    .adv-slide__img {
      @include adaptive-value('border-radius', 38, 33, 1);
      width: 100%;
      object-fit: cover;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      transform: translateY(-1px);
    }
    .adv-slide__title {
      padding: 0;
      @include adaptive-value('margin-bottom', 16, 10.18, 1);
      @include adaptive-value('font-size', 18, 15.27, 1);
      letter-spacing: -0.33px;
      line-height: calc(21 / 18);
      font-weight: 400;
    }
    .adv-slide__desc {
      margin-bottom: 21px;
    }
    .adv-slide__inner-wrapper {
      @include adaptive-value('padding-top', 20, 20, 1);
      @include adaptive-value('padding-bottom', 24, 20, 1);
      @include adaptive-value('padding-left', 30, 25, 1);
      @include adaptive-value('padding-right', 30, 25, 1);
    }
  }
}

@media (max-width: 1280px) {
  .advantage {
    &__swiper-button-next {
      right: 48px;
    }
    &__swiper-button-prev {
      left: 48px;
    }
  }
}

@media (max-width: 600px) {
  .advantage {
    &__swiper {
      margin-bottom: 84px;
    }
    &__swiper-button-next {
      top: auto;
      bottom: -44px;
      transform: translateY(50%);
    }
    &__swiper-button-prev {
      top: auto;
      bottom: -44px;
      transform: translateY(50%);
    }
  }
}

@media (max-width: 380px) {
  .adv-slide {
    height: 100% !important;
  }
}
</style>
