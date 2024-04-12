<script setup>
import { onMounted, ref } from 'vue'
import TheContainer from './TheContainer.vue'
import TheSliderButton from './TheSliderButton.vue'
const swiper = ref(null)

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

defineProps({
  staff: Object
})

onMounted(() => {
  if (screen && screen.width >= 1024) {
    const slideSize = swiper.value.swiper.slidesSizesGrid[0]

    gsap.set('.community__swiper', { x: slideSize })

    gsap.to('.community__swiper', {
      x: 0,
      scrollTrigger: {
        trigger: '.community',
        start: 'top+=5% bottom',
        end: 'center-=25% bottom',
        scrub: true
      }
    })
  }
})
</script>

<template>
  <TheContainer>
    <section class="community-slider">
      <swiper-container
        :injectStyles="[
          `
        :host .swiper {
          overflow: visible !important;
        }
        :host .swiper-wrapper {
          align-items: stretch;
        }
        :host .swiper-slide {
          height: auto;
        }

        :host .swiper-slide {
          height: auto;
        }
        :host .swiper-wrapper {
          align-items: stretch;
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
          margin: 0px 6px !important;
        }
        .swiper-pagination-bullet-active {
          background-color: #052E3E !important;
        } 
        `
        ]"
        :breakpoints="{
          540: {
            slidesPerView: 1.5,
            initialSlide: 0
          },
          765: {
            slidesPerView: 2,
            centeredSlides: false,
            initialSlide: 0,
            spaceBetween: 25
          },
          1900: {
            slidesPerView: 2,
            centeredSlides: false,
            initialSlide: 1,
            spaceBetween: 25
          }
        }"
        class="swiper community__swiper"
        ref="swiper"
        :spaceBetween="15"
        :slidesPerView="1.2"
        :centeredSlides="true"
        :speed="900"
        :initialSlide="0"
        :pagination="{
          clickable: true
        }"
        :mousewheel="{
          forceToAxis: true
        }"
      >
        <swiper-slide
          class="swiper-slide community__swiper-slide community-slide"
          v-for="person in staff"
          :key="person.href"
        >
          <div class="community-slide__card">
            <img class="community-slide__img" :src="person.img" :alt="`Photo ${person.name}`" />
            <h3 class="community-slide__name">
              {{ person.name }}
            </h3>
            <p class="community-slide__position">
              {{ person.position }}
            </p>
            <p class="community-slide__desc" v-html="person.desc" />
          </div>
        </swiper-slide>
      </swiper-container>
      <div
        class="swiper-button-prev community__swiper-button-prev"
        @click="swiper.swiper.slidePrev()"
      >
        <TheSliderButton direction="prev" />
      </div>
      <div
        class="swiper-button-next community__swiper-button-next"
        @click="swiper.swiper.slideNext()"
      >
        <TheSliderButton direction="next" />
      </div>
    </section>
  </TheContainer>
</template>

<style lang="scss">
.swiper-wrapper {
  align-items: stretch;
}

.community-slider {
  position: relative;
  margin-bottom: 20px;
  z-index: 11;
}
.community {
  &__swiper {
    overflow: visible !important;
  }
  &__swiper-button-next {
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 5;
    transform: translateX(50%) translateY(-50%);
    svg {
      @include adaptive-value('width', 54, 24, 1);
    }
  }
  &__swiper-button-prev {
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 5;
    transform: translateX(-50%) translateY(-50%);
    svg {
      @include adaptive-value('width', 54, 24, 1);
    }
  }
}
.community-slide {
  height: auto !important;
  @include adaptive-value('border-radius', 40, 33, 1);
  @include adaptive-value('padding-top', 50, 33, 1);
  @include adaptive-value('padding-bottom', 50, 33, 1);
  @include adaptive-value('padding-left', 72, 28, 1);
  @include adaptive-value('padding-right', 72, 28, 1);
  border: 2px solid rgba(255, 255, 255, 0.5);
  background: linear-gradient(
    154deg,
    rgba(255, 255, 255, 0.8) 5.42%,
    rgba(255, 255, 255, 0) 36.35%
  );
  text-align: center;
  &__card {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  &__img {
    margin: 0 auto;
    border-radius: 50%;
    @include adaptive-value('margin-bottom', 20, 19.5, 1);
    @include adaptive-value('width', 148, 83, 1);
  }
  &__name {
    color: #fff;
    text-align: center;
    @include adaptive-value('font-size', 24, 19, 1);
    line-height: calc(32 / 24);
    letter-spacing: -0.48px;
    font-weight: 300;
    font-family: 'Atyp Display', sans-serif;
    @include adaptive-value('margin-bottom', 3, 1, 1);
  }
  &__position {
    @include adaptive-value('font-size', 16, 11, 1);
    line-height: calc(24 / 16);
    letter-spacing: 0.5px;
    font-weight: 300;
    @include adaptive-value('margin-bottom', 20, 14, 1);
    
    white-space: pre-wrap;
  }
  &__desc {
    font-size: 12px;
    line-height: calc(15.5 / 12);
    max-width: 336px;
    letter-spacing: 0.65px;
    margin: 0 auto;
    @include adaptive-value('margin-bottom', 10, 0, 1);
    flex: 1 0 auto;
    @media (max-width: 490px) {
      max-width: 170px;
    }
  }
  .btn-wrapper {
    button {
      padding: 3px 48px;
      @include adaptive-value('padding-top', 4, 5, 1);
      @include adaptive-value('padding-bottom', 4, 5, 1);
      // background: linear-gradient(93deg, #fff 0%, rgba(255, 255, 255, 0.26) 54.33%);
      span {
        letter-spacing: 0.5px;
        font-size: 13.7px;
        font-weight: 300;
        // transform: translateY(1px);
      }
      @media (max-width: 490px) {
        padding: 3px 30px;
      }
    }
  }
}

@media (max-width: 1100px) {
  .community {
    &__swiper-button-next {
      right: 32px;
    }
    &__swiper-button-prev {
      left: 32px;
    }
  }
}

@media (max-width: 600px) {
  .community {
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
</style>
