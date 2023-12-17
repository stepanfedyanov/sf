<script setup>
defineProps({
  color: String,
  size: String,
  href: String,
  target: String,
  flex: String
})

defineEmits(['tap'])
</script>

<template>
  <div class="btn-wrapper">
    <a
      v-if="href || target"
      class="btn"
      :href="href"
      :target="target"
      :class="{
        white: color === 'white',
        black: color === 'black',
        blue: color === 'blue',
        small: size === 'small',
        medium: size === 'medium',
        big: size === 'big',
        flex: flex === 'flex',
      }"
    >
      <span>
        <slot />
      </span>
    </a>

    <button
      v-else
      class="btn"
      @click="$emit('tap')"
      :href="href"
      :target="target"
      :class="{
        white: color === 'white',
        black: color === 'black',
        blue: color === 'blue',
        small: size === 'small',
        medium: size === 'medium',
        big: size === 'big',
        flex: flex === 'flex',
      }"
    >
      <span>
        <slot />
      </span>
    </button>
  </div>
</template>

<style lang="scss">
.btn-wrapper.flex {
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn {
  position: relative;
  cursor: pointer;
  outline: none;
  border-radius: 34px;
  border: 0px;
  // p-filter: blur(15px);
  transition: 0.2s;
  display: inline-block;
  text-align: center;
  position: relative;
  &.flex {
    span {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  svg {
    margin-right: 7px;
  }
  span {
    position: relative;
    display: inline-block;
    z-index: 3;
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
    // border: 1px solid rgba(255, 255, 255, 0.5);
    background: linear-gradient(93deg, #fff 12%, rgba(255, 255, 255, 0.26) 94.33%);
    color: #000;
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
  &.blue {
    color: #052e3e;
    // border: 1px solid rgba(255, 255, 255, 0.5);
    background-color: #a5cce0;
    transition: 0.2s;
    @media (hover: hover) {
      &:hover {
        background-color: #7db5d1;
      }
    }
  }
  &.small {
    letter-spacing: -0.165px;
    line-height: calc(24 / 11);
    font-size: 11px;
    padding: 4px 22px;
  }
  &.medium {
    letter-spacing: -0.165px;
    line-height: calc(24 / 14);
    @include adaptive-value('font-size', 14, 11.55, 1);
    @include adaptive-value('padding-left', 50, 26.5, 1);
    @include adaptive-value('padding-right', 50, 26.5, 1);
    @include adaptive-value('padding-top', 4, 5, 1);
    @include adaptive-value('padding-bottom', 4, 5, 1);
    span {
      min-width: 60px;
    }
  }
  &.big {
    line-height: calc(24 / 14);
    @include adaptive-value('font-size', 16, 13, 1);
    @include adaptive-value('padding-top', 10, 4, 1);
    @include adaptive-value('padding-bottom', 10, 4, 1);
    @include adaptive-value('padding-left', 50, 28, 1);
    @include adaptive-value('padding-right', 50, 28, 1);
    span {
      min-width: 116px;
    }
  }
}
</style>
