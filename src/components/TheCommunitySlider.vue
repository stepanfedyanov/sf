<script setup>
import { ref } from 'vue'
import TheButton from './TheButton.vue'
import TheContainer from './TheContainer.vue'
import TheSliderButton from './TheSliderButton.vue'
const swiper = ref(null)

defineProps({
  staff: Object
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
        `
        ]"
        class="swiper community__swiper"
        ref="swiper"
        :spaceBetween="20"
        :slidesPerView="2"
        :speed="900"
        :grabCursor="true"
        :initialSlide="1"
      >
        <swiper-slide
          class="swiper-slide community__swiper-slide community-slide"
          v-for="person in staff"
          :key="person.href"
        >
          <div class="community-slide__card">
            <img class="community-slide__img" :src="person.img" alt="" />
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
  }
  &__swiper-button-prev {
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 5;
    transform: translateX(-50%) translateY(-50%);
  }
}
.community-slide {
  padding: 50px 72px;
  border-radius: 40px;
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
    margin-bottom: 24px;
  }
  &__name {
    color: #fff;
    text-align: center;
    font-size: 24px;
    line-height: calc(32 / 24);
    letter-spacing: -0.48px;
    font-weight: 300;
    font-family: 'Atyp Display', sans-serif;
    margin-bottom: 6px;
  }
  &__position {
    font-size: 16px;
    line-height: calc(24 / 16);
    margin-bottom: 20px;
  }
  &__desc {
    font-size: 12px;
    line-height: calc(16 / 12);
    max-width: 268px;
    margin: 0 auto 37px;
  }
}
</style>
