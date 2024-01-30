<script setup>
import { useGlobalStore } from '../stores/global';
import TheButton from './TheButton.vue'

const items = ['Компания', 'Маркетплейс', 'Команда', 'Аналитика']

const globalStore = useGlobalStore()
const openModal = () => {
  globalStore.changeModalOpened(true)
}

defineEmits(['openSection']);
</script>

<template>
  <nav class="header__nav">
    <ul class="header__nav-list">
      <li
        class="header__nav-item animate__animated animate__fadeIn"
        :data-wow-delay="`${0.2 * idx}s`"
        v-for="(item, idx) in items"
        :key="item"
      >
        <span class="header__nav-item-link" @click="$emit('openSection', item)">{{ item }}</span>
      </li>
    </ul>
    <div class="header__btns">
      <TheButton
        class="header__btn animate__animated animate__fadeIn"
        data-wow-delay=".2s"
        color="white"
        size="small"
        href="https://app.skyfort.capital"
      >
        Вход
      </TheButton>
      <TheButton
        @tap="openModal"
        class="header__btn animate__animated animate__fadeIn"
        data-wow-delay=".4s"
        color="black"
        size="small"
      >
        Регистрация
      </TheButton>
    </div>
  </nav>
</template>

<style lang="scss">
.header {
  &__nav {
    display: flex;
    align-items: center;
  }
  &__dash {
    display: none;
  }
  &__mobile-btns {
    display: none;
  }
  &__nav-list {
    display: flex;
    align-items: center;
    position: relative;
    top: 2px;
  }
  &__nav-item + &__nav-item {
    @include adaptive-value('margin-left', 43, 0, 1);
  }
  &__nav-item-link {
    cursor: pointer;
    letter-spacing: -0.12px;
    padding: 5px 0;
    line-height: 1;
    position: relative;
    font-size: 13px;
    font-weight: 400;
    transition: 0.15s;
    &::before {
      content: '';
      position: absolute;
      bottom: 1px;
      left: 50%;
      transform: translateX(-50%);
      width: 0%;
      height: 1px;
      background-color: #052e3e;
      transition: 0.2s;
    }
    @media (hover: hover) {
      &:hover {
        &::before {
          width: 100%;
        }
      }
    }
  }
  &__btns {
    @include adaptive-value('margin-left', 41, 0, 1);
    display: flex;
    align-items: center;
  }
  &__btn {
    .btn {
      letter-spacing: 0.66px;
      line-height: calc(24 / 12);
      font-size: 13px;
      padding: 3px 18px;
      font-weight: 300;
      span {
        // transform: translateY(1px);
      }
      &.black {
        padding: 3px 28px;
        font-weight: 100;
        letter-spacing: 1px;
      }
    }
  }
  .btn-wrapper + .btn-wrapper {
    @include adaptive-value('margin-left', 7, 5, 1);
  }
}

@media (max-width: 750px) {
  .header {
    &__nav-list {
      display: none;
    }
    &__btns {
      display: none;
    }
    &__mobile-btns {
      display: none;
      flex-direction: column;
      width: 100%;
    }
    &__mobile-btn {
      button, a {
        width: calc(100% - 46px);
        margin: 0 auto;
        display: block;
        font-size: 14px !important;
        line-height: calc(24 / 14) !important;
        letter-spacing: 0.42px !important;
        padding-top: 4px !important;
        padding-bottom: 4px !important;
        position: relative;
        span {
          svg {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: -20px;
            left: auto;
          }
        }
      }
    }
    &__mobile-btn + &__mobile-btn {
      margin-left: 0 !important;
      margin-top: 14px;
    }
    &__inner-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    &__nav-item-link {
      font-size: 14px;
      line-height: calc(24 / 14);
      letter-spacing: -0.21px;
    }
    &._opened {
      .header {
        &__mobile-btns {
          display: flex;
        }
        &__nav-list {
          margin-top: 48px;
          margin-bottom: 48px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        &__nav-item-link {
          padding: 0;
        }
        &__dash {
          display: block;
          margin-bottom: 40px;
          width: 100%;
          height: 0.5px;
          background-color: #fff;
        }
      }
      .header__nav-item + .header__nav-item {
        margin-left: 0;
        margin-top: 24px;
      }
    }
  }
}

@media (max-width: 370px) {
  .header {
    &__mobile-btn {
      button {
        width: 100%;
      }
    }
  }
}
</style>
