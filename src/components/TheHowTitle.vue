<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <div class="how__sticky">
    <div v-for="(title, idx) in items" :key="`how-title-${idx}`" :style="idx === 0 ? 'opacity: 1;' : 'opacity: 0;'" :class="`how__item-info how__item-info-${idx}`">
      <p class="how__item-desc animate__animated animate__fadeIn">{{ title.desc }}</p>
      <h2 class="how__item-title animate__animated animate__fadeIn" data-wow-delay=".3s">
        {{ title.title }}
      </h2>
    </div>
  </div>
</template>

<style lang="scss">
.how {
  &__sticky {
    width: 50%;
    height: 300px;
    position: sticky;
    top: 50%;
    transform: translateY(-50%);
  }
  &__item-info {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
  &__item-desc {
    font-size: 25px;
    line-height: calc(34 / 24);
    max-width: 200px;
    letter-spacing: 0.48px;
    margin-bottom: 30px;
  }
  &__item-title {
    font-family: 'Atyp Display', sans-serif;
    font-size: 64px;
    line-height: calc(58 / 64);
    max-width: 360px;
    transform: translateX(-3px);
    font-weight: 400;
    letter-spacing: -0.6px;
  }
}
</style>