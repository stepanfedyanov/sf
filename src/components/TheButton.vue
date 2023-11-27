<script setup>
defineProps({
  color: String,
  size: String
})
</script>

<template>
  <button
    class="btn"
    :class="{
      white: color === 'white',
      black: color === 'black',
      small: size === 'small',
      big: size === 'big'
    }"
  >
    <span>
      <slot />
    </span>
  </button>
</template>

<style lang="scss">
.btn {
  font-family: 'Articulat CF';
  cursor: pointer;
  outline: none;
  border-radius: 34px;
  border: 0px;
  backdrop-filter: blur(15px);
  transition: 0.2s;
  span {
    position: relative;
    z-index: 3;
    top: 1px;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    border-radius: 34px;
    z-index: 1;
    transition: 0.2s;
    opacity: 0;
  }
  @media (hover: hover) {
    &:hover {
      &::before {
        opacity: 1;
      }
    }
  }
  &.white {
    border: 1px solid rgba(255, 255, 255, 0.5);
    background: var(--Linear, linear-gradient(93deg, #fff 12%, rgba(255, 255, 255, 0.26) 94.33%));
    &::before {
      background: linear-gradient(0deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%),
        linear-gradient(93deg, #fff 12%, rgba(255, 255, 255, 0) 94.33%);
    }
  }
  &.black {
    color: #fff;
    background: #052e3e;
    &::before {
      background: linear-gradient(0deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%),
        #052e3e;
    }
  }
  &.small {
    letter-spacing: -0.165px;
    line-height: calc(24 / 11);
    font-size: 11px;
    padding: 4px 22px;
  }
  &.big {
    line-height: calc(24 / 14);
    font-size: 14px;
    padding: 10px 50px;
  }
}
</style>
