<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="how__sticky">
    <div
      v-for="(title, idx) in items"
      :key="`how-title-${idx}`"
      :style="idx === 0 ? 'opacity: 1;' : 'opacity: 0;'"
      :class="`how__item-info how__item-info-${idx}`"
    >
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
    @media (max-width: 500px) {
      display: none;
    }
  }
  &__item-info {
    @media (min-width: 499px) {
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
    }
  }
  &__item-desc {
    font-size: 25px;
    line-height: calc(34 / 24);
    max-width: 250px;
    letter-spacing: 0.48px;
    margin-bottom: 25px;
    font-size: 25px;
  }
  &__item-title {
    font-family: 'Atyp Display', sans-serif;
    font-size: 64px;
    line-height: calc(58 / 64);
    max-width: 350px;
    transform: translateX(-3px);
    font-weight: 300;
    letter-spacing: -0.6px;
  }
}

@media (max-width: 550px) {
  .how {
    &__item-desc {
      @include adaptive-value('font-size', 25, 19, 1);
      font-weight: 300;
      @include adaptive-value('line-height', 34, 23, 1);
      @include adaptive-value('letter-spacing', 0.48, 0.6, 1);
      max-width: 250px !important;
      @include adaptive-value('margin-bottom', 25, 28, 1);
    }

    &__item {
      &:last-child {
        .how__item-desc {
          max-width: 160px;
        }
        .how__item-title {
          max-width: 250px;
        }
      }
    }
  }

  .how {
    &__item-title {
      @include adaptive-value('font-size', 64, 34, 1);
      @include adaptive-value('line-height', 58, 36, 1);
      max-width: 350px;
      transform: translateX(0);
      @include adaptive-value('letter-spacing', -0.6, 0.28, 1);
      text-align: center;
      max-width: 100%;
      @include adaptive-value('margin-bottom', 50, 36, 1);
    }
  }
}
</style>
