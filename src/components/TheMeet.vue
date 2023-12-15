<script setup>
import TheButton from './TheButton.vue'
import TheContainer from './TheContainer.vue'
import { useGlobalStore } from '../stores/global'

const globalStore = useGlobalStore()
</script>

<template>
  <section class="meet">
    <TheContainer>
      <div class="meet__inner">
        <h1 class="meet__title wow animate__animated animate__fadeIn" data-wow-delay="0.6s">
          Управление капиталом 3.0
        </h1>
        <p class="meet__text wow animate__animated animate__fadeIn" data-wow-delay="0.8s">
          Международная цифровая экосистема управления благосостоянием, строящаяся профессиональным
          сообществом
        </p>
        <TheButton
          class="meet__btn wow animate__animated animate__fadeIn"
          data-wow-delay="1s"
          color="white"
          size="big"
          @tap="globalStore.changeModalOpened(true)"
          >Получить доступ</TheButton
        >
      </div>
    </TheContainer>
  </section>
</template>

<style lang="scss">
.meet {
  @include adaptive-value('padding-top', 186, 147, 1);
  &__inner {
  }
  &__title {
    font-family: 'Atyp Display', sans-serif;
    @include adaptive-value('font-size', 71, 34, 1);
    transform: translateX(-3px);
    line-height: calc(74 / 70);
    @include adaptive-value('letter-spacing', 0.7, 0, 1);
    max-width: 580px;
  }
  &__text {
    @include adaptive-value('max-width', 400, 250, 1);
    @include adaptive-value('font-size', 18, 14.4, 1);
    @include adaptive-value('line-height', 25, 21, 1);
    letter-spacing: 0.66px;
    font-weight: 300;
    @include adaptive-value('margin-top', 52, 37, 1);
    @include adaptive-value('margin-bottom', 37, 37, 1);
  }
  &__btn {
    .big {
      @include adaptive-value('padding-top', 7, 4, 1);
      @include adaptive-value('padding-bottom', 7, 4, 1);
    }
    span {
      font-weight: 400;
      font-size: 5px;
      @include adaptive-value('font-size', 14, 13, 1);
      letter-spacing: 0.42px;
    }
  }
}

@media (max-width: 1000px) {
  .meet {
    @include adaptive-value('padding-top', 194, 127, 1);
    &__title {
      text-align: center;
      margin-left: auto;
      margin-right: auto;
      transform: translateX(0px);
    }
    &__text {
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }
    &__inner {
    }
    .btn {
      display: block;
      margin: 0 auto;
      font-size: 14px;
      padding: 3px 28.5px;
    }
  }
}

@media (max-width: 490px) {
  .meet {
    &__text {
      font-weight: 300;
    }
    &__btn {
      .btn {
        padding-top: 2px;
        padding-bottom: 2px;
        padding-left: 26px;
        padding-right: 26px;
        span {
          font-weight: 300;
          font-size: 14px;
          letter-spacing: 0.6px;
        }
      }
    }
  }
}
</style>
