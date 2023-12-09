<script setup>
import { onMounted, ref } from 'vue'
import TheButton from './TheButton.vue'
import TheContainer from './TheContainer.vue'
import TheSliderButton from './TheSliderButton.vue'
const swiper = ref(null)

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

defineProps({
  staff: Object
})

onMounted(() => {
  const slideSize = swiper.value.swiper.slidesSizesGrid[0];
  
  gsap.set('.community__swiper', { x: slideSize })

 gsap.to('.community__swiper', {
    x: 0,
    scrollTrigger: {
      trigger: '.community',
      start: 'top+=20% bottom',
      end: 'center-=10% bottom',
      scrub: true,
    }
  });
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
            }
            .swiper-pagination-bullet-active {
              background-color: #052E3E !important;
            } 
        `
        ]"
        :breakpoints="{
          540: {
            slidesPerView: 1.5
          },
          765: {
            slidesPerView: 2,
            centeredSlides: false
          }
        }"
        class="swiper community__swiper"
        ref="swiper"
        :spaceBetween="20"
        :slidesPerView="1.2"
        :centeredSlides="true"
        :speed="900"
        :grabCursor="true"
        :initialSlide="1"
        :pagination="{
          clickable: true
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
            <p class="community-slide__desc">
              {{ person.desc }}
            </p>
            <TheButton color="white" size="medium">Linkedin</TheButton>
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
  @include adaptive-value('padding-top', 50, 30, 1);
  @include adaptive-value('padding-bottom', 50, 30, 1);
  @include adaptive-value('padding-left', 72, 28, 1);
  @include adaptive-value('padding-right', 72, 28, 1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: linear-gradient(
    154deg,
    rgba(255, 255, 255, 0.8) 5.42%,
    rgba(255, 255, 255, 0) 36.35%
  );
  text-align: center;
  &__img {
    margin: 0 auto;
    border-radius: 50%;
    @include adaptive-value('margin-bottom', 24, 19.5, 1);
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
    @include adaptive-value('margin-bottom', 6, 0, 1);
  }
  &__position {
    @include adaptive-value('font-size', 16, 11, 1);
    line-height: calc(24 / 16);
    @include adaptive-value('margin-bottom', 20, 14, 1);
  }
  &__desc {
    font-size: 12px;
    line-height: calc(16 / 12);
    max-width: 268px;
    margin: 0 auto;
    @include adaptive-value('margin-bottom', 37, 27, 1);
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