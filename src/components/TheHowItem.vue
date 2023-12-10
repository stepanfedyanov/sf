<script setup>
defineProps({
  info: Object,
  id: String
})
</script>

<template>
  <article class="how__item" :id="id" ref="container">
    <div class="how__item-inner">
      <div class="how__item-img-col">
        <div class="how__item-img" :style="`
          background-image: url(${info.img});
          background-position: ${info.backgroundPosition}
        `"  ></div>
        <p class="how__item-img-text" v-for="text in info.texts" :key="text">
          {{ text }}
        </p>
      </div>
    </div>
  </article>

  <article class="how__item _mobile">
    <div class="how__item-inner">
      <img
        class="how__item-img wow animate__animated animate__fadeInRight"
        data-wow-delay=".6s"
        data-wow-duration="1.6s"
        :src="info.img"
        :alt="info.title"
      />
      <div class="how__item-info">
        <p class="how__item-desc wow animate__animated animate__fadeIn">{{ info.desc }}</p>
        <h2 class="how__item-title wow animate__animated animate__fadeIn" data-wow-delay=".3s">
          {{ info.title }}123
        </h2>
      </div>
      <p
        class="how__item-img-text wow animate__animated animate__fadeIn"
        :data-wow-delay="`${0.2 * idx}s`"
        v-for="(text, idx) in info.texts"
        :key="text"
      >
        {{ text }}
      </p>
    </div>
  </article>
</template>

<style lang="scss">
.how {
  ._mobile {
    display: none;
  }
  &__item-info {
    flex: 0 1 492px;
    margin-right: 20px;
  }
  &__item-desc {
    @include adaptive-value('font-size', 24, 19, 1);
    line-height: calc(36 / 24);
    max-width: 200px;
    letter-spacing: 0.48px;
    margin-bottom: 47px;
    @include adaptive-value('margin-bottom', 47, 9, 1);
  }
  &__item-title {
    font-family: 'Atyp Display', sans-serif;
    @include adaptive-value('font-size', 64, 30, 1);
    line-height: calc(58 / 64);
    max-width: 360px;
  }
  &__item {
    width: 100%;
    padding-bottom: 15vh;
  }
  &__item-inner {
    display: flex;
    justify-content: space-between;
  }
  &__item-img {
    width: 502px;
    height: 502px;
    background-size: 190%;
    border-radius: 44px;
    @include adaptive-value('margin-bottom', 77, 9, 1);
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

@media (max-width: 550px) {
  .how {
    &__item {
      display: none;
    }
    ._mobile {
      display: block;
    }
    &__item-info {
      flex: 0 1 auto;
      margin-right: 0;
    }
    &__item-desc {
      max-width: 100%;
      text-align: center;
      @include adaptive-value('margin-bottom', 47, 30, 1);
    }
    &__item-title {
      max-width: 100%;
      text-align: center;
      margin-bottom: 33px;
      line-height: calc(36 / 34);
    }
    &__item-inner {
      flex-direction: column;
    }
    &__item-img {
      max-width: 100%;
      width: 100%;
      border-radius: 44px;
      @include adaptive-value('margin-bottom', 77, 30, 1);
    }
    &__item-img-text {
      max-width: 321px;
      text-align: center;
    }
  }
}
</style>
