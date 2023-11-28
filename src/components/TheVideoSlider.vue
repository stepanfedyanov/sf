<script setup>
import TheSliderButton from './TheSliderButton.vue'
import { ref } from 'vue'
const swiper = ref(null)
const sliders = [1, 2, 3, 4, 5, 6, 7, 8, 9]
</script>

<template>
  <div class="swiper-block">
    <swiper-container
      :injectStyles="[
        `
        :host .swiper {
          overflow: visible !important;
        }
        `
      ]"
      class="swiper video__swiper"
      ref="swiper"
      :speed="900"
      :grabCursor="true"
      :spaceBetween='300'
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false
      }"
    >
      <swiper-slide
        class="swiper-slide video__swiper-slide video-slide"
        v-for="slider in sliders"
        :key="slider"
      >
        <blockquote class="video-slide__quote">
          <p class="video-slide__text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat.
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
  </div>
</template>

<style lang="scss">
.swiper-block {
  position: relative;
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
  }
  &__swiper-button-prev {
    position: absolute;
    top: 0;
    left: -64px;
    transform: translateX(-100%);
  }
}
.video-slide {
  &__quote {
    max-width: 662px;
    margin: 0 auto;
    text-align: center;
  }
  &__text {
    text-align: center;
    font-size: 18px;
    line-height: calc(24 / 18);
    letter-spacing: -0.27px;
    margin-bottom: 17px;
  }
  &__author {
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: calc(24 / 14);
    letter-spacing: -0.21px;
  }
}
</style>
