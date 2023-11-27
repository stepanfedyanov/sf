<script setup>
defineProps({
  info: Object
})
</script>

<template>
  <article class="how__item">
    <div class="how__item-inner">
      <div class="how__item-info">
        <p class="how__item-desc wow animate__animated animate__fadeIn">{{ info.desc }}</p>
        <h2 class="how__item-title wow animate__animated animate__fadeIn" data-wow-delay=".3s">
          {{ info.title }}
        </h2>
      </div>
      <div class="how__item-img-col">
        <img
          class="how__item-img wow animate__animated animate__fadeInRight"
          data-wow-delay=".6s"
          data-wow-duration="1.6s"
          :src="info.img"
          :alt="info.title"
        />
        <p
          class="how__item-img-text wow animate__animated animate__fadeIn"
          :data-wow-delay="`${0.2 * idx}s`"
          v-for="(text, idx) in info.texts"
          :key="text"
        >
          {{ text }}
        </p>
      </div>
    </div>
  </article>
</template>

<style lang="scss">
.how {
  &__item-info {
    flex: 0 0 492px;
  }
  &__item-desc {
    font-size: 24px;
    line-height: calc(36 / 24);
    max-width: 200px;
    letter-spacing: 0.48px;
    margin-bottom: 47px;
  }
  &__item-title {
    font-family: 'Atyp Display', sans-serif;
    font-size: 64px;
    line-height: calc(58 / 64);
    max-width: 360px;
  }
  &__item-inner {
    display: flex;
    justify-content: space-between;
  }
  &__item-img {
    max-width: 492px;
    width: 100%;
    border-radius: 44px;
    margin-bottom: 77px;
  }
  &__item-img-text {
    max-width: 321px;
    margin: 0 auto;
    line-height: calc(21 / 13);
    letter-spacing: -0.13px;
  }
  &__item-img-text + &__item-img-text {
    margin-top: 21px;
  }
}
</style>
