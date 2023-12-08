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
        <img
          class="how__item-img"
          :src="info.img"
          :alt="info.title"
        />
        <p
          class="how__item-img-text"
          v-for="text in info.texts"
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
  &__item {
    width: 100%;
    padding-bottom: 15vh;
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
