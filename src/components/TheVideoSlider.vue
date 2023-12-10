<script setup>
import TheSliderButton from './TheSliderButton.vue'
import { ref } from 'vue'
const swiper = ref(null)
const sliders = [
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nihil quae nam blanditiis eligendi consectetur non laudantium qui nulla molestias architecto maiores quia ad quis neque officiis, fugit dolor iure?'
]
</script>

<template>
  <div class="swiper-block">
    <swiper-container
      :injectStyles="[
        `
        :host .swiper {
          overflow: visible !important;
        }
        .swiper-pagination {
          display: none;
        }
        @media (max-width: 800px) {
          .swiper-pagination {
            display: block;
            top: auto !important;
            bottom: -50px !important;
            transform: translateY(50%) !important;
          }
          .swiper-pagination-bullet {
            width: 4px !important;
            height: 4px !important;
            background-color: #DDD8D5 !important;
            margin: 0 8px !important;
            opacity: 1 !important;
            transition: 0.2s !important;
          }
          .swiper-pagination-bullet-active {
            opacity: 1 !important;
            background-color: #052E3E !important;
          }
        }
        `
      ]"
      effect="fade"
      :fadeEffect="{
        crossFade: true
      }"
      class="swiper video__swiper"
      ref="swiper"
      :speed="900"
      :pagination="{
        clickable: true
      }"
    >
      <swiper-slide
        class="swiper-slide video__swiper-slide video-slide"
        v-for="slider in sliders"
        :key="slider"
      >
        <blockquote class="video-slide__quote">
          <p class="video-slide__text">
            {{ slider }}
          </p>
          <cite class="video-slide__author">Ilya Oprenko, CEO Skyfort</cite>
        </blockquote>
      </swiper-slide>
    </swiper-container>
    <div class="swiper-button-prev video__swiper-button-prev" @click="swiper.swiper.slidePrev()">
      <TheSliderButton direction="prev" />
    </div>
    <div class="swiper-button-next video__swiper-button-next" @click="swiper.swiper.slideNext()">
      <TheSliderButton direction="next" />
    </div>
    <div class="swiper-pagination video__swiper-pagination"></div>
  </div>
</template>

<style lang="scss">
.swiper-block {
  position: relative;
  margin-top: 60px;
}
.video {
  &__swiper {
    overflow: visible !important;
    position: relative;
  }
  &__swiper-button-next {
    position: absolute;
    top: 0;
    right: -64px;
    transform: translateX(100%);
    @include adaptive-value('width', 54, 36, 1);
    z-index: 14;
  }
  &__swiper-button-prev {
    position: absolute;
    top: 0;
    left: -64px;
    transform: translateX(-100%);
    @include adaptive-value('width', 54, 36, 1);
    z-index: 14;
  }
}
.video-slide {
  &__quote {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
  }
  &__text {
    text-align: center;
    @include adaptive-value('font-size', 18, 14, 1);
    line-height: calc(25 / 18);
    letter-spacing: 0.36px;
    @include adaptive-value('margin-bottom', 22, 22, 1);
  }
  &__author {
    @include adaptive-value('font-size', 14, 15, 1);
    font-style: normal;
    font-weight: 700;
    line-height: calc(24 / 14);
    letter-spacing: 0.28px;
  }
}

@media (max-width: 1220px) {
  .video {
    &__swiper-button-next {
      @include adaptive-value('right', 64, 0, 1);
    }
    &__swiper-button-prev {
      @include adaptive-value('left', 64, 0, 1);
    }
  }
}

@media (max-width: 800px) {
  .video {
    &__swiper-button-next {
      bottom: -50px;
      top: auto;
      transform: translate(100%, 53%);
      right: 100px;
      @include adaptive-value('right', 100, 50, 1);
    }
    &__swiper-button-prev {
      bottom: -50px;
      transform: translate(-100%, 53%);
      top: auto;
      left: 100px;
      @include adaptive-value('left', 100, 50, 1);
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
</style>
