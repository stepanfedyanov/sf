<script setup>
import TheButton from './TheButton.vue'

const items = ['About', 'Marketplace', 'Analytics', 'FAQ']
</script>

<template>
  <nav class="header__nav">
    <ul class="header__nav-list">
      <li
        class="header__nav-item wow animate__animated animate__fadeIn"
        :data-wow-delay="`${0.2 * idx}s`"
        v-for="(item, idx) in items"
        :key="item"
      >
        <a class="header__nav-item-link" href="/">{{ item }}</a>
      </li>
    </ul>
    <div class="header__btns">
      <TheButton
        class="wow animate__animated animate__fadeIn"
        data-wow-delay=".2s"
        color="white"
        size="small"
      >
        Log in
      </TheButton>
      <TheButton
        class="wow animate__animated animate__fadeIn"
        data-wow-delay=".4s"
        color="black"
        size="small"
      >
        Register
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
  &__nav-list {
    display: flex;
    align-items: center;
  }
  &__nav-item {
  }
  &__nav-item + &__nav-item {
    margin-left: 40px;
  }
  &__nav-item-link {
    letter-spacing: -0.195px;
    padding: 5px 0;
    line-height: 1;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
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
    margin-left: 40px;
    display: flex;
    align-items: center;
  }
  .btn + .btn {
    margin-left: 6px;
  }
}
</style>
