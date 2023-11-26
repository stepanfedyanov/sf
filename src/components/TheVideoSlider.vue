<script setup>
import TheSliderButton from './TheSliderButton.vue'
</script>

<template>
  <div class="swiper video__swiper">
    <div class="swiper-wrapper video__swiper-wrapper">
      <div class="swiper-slide video__swiper-slide video-slide">
        <blockquote class="video-slide__quote">
          <p class="video-slide__text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </p>
          <cite class="video-slide__author">Ilya Oprenko, CEO Skyfort</cite>
        </blockquote>
      </div>
    </div>
    <div class="swiper-button-prev video__swiper-button-prev">
      <TheSliderButton direction="prev" />
    </div>
    <div class="swiper-button-next video__swiper-button-next">
      <TheSliderButton direction="next" />
    </div>
  </div>
</template>

<style lang="scss">
.swiper {
  position: relative;
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
    font-weight: 500;
    line-height: calc(24/14);
    letter-spacing: -0.21px;
  }
}
</style>
