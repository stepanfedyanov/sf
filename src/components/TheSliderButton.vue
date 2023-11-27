<script setup>
defineProps({
  direction: String
})
</script>

<template>
  <svg
    class="swiper-button-img"
    :class="{ reversed: direction === 'prev' }"
    width="54"
    height="54"
    viewBox="0 0 54 54"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_2_395)">
      <path
        d="M27 54C41.9117 54 54 41.9117 54 27C54 12.0883 41.9117 0 27 0C12.0883 0 0 12.0883 0 27C0 41.9117 12.0883 54 27 54Z"
        fill="white"
      />
      <path
        class="hover-path"
        d="M24.4006 16.7973L23.4778 17.7202L32.7558 26.9982L33.6786 26.0753L24.4006 16.7973Z"
        fill="#052E3E"
      />
      <path
        class="hover-path"
        d="M32.7568 27.0004L23.4788 36.2784L24.4016 37.2013L33.6796 27.9233L32.7568 27.0004Z"
        fill="#052E3E"
      />
    </g>
    <defs>
      <clipPath id="clip0_2_395">
        <rect width="54" height="54" fill="white" />
      </clipPath>
    </defs>
  </svg>
</template>

<style lang="scss">
.swiper-button-img {
  position: absolute;
  top: 0;
  right: -64px;
  cursor: pointer;
  path {
    transition: 0.15s;
  }
  @media (hover: hover) {
    &:hover {
      .hover-path {
        fill: #a5cce0;
      }
    }
  }
  &.reversed {
    transform: rotate(180deg);
    right: auto;
    left: -64px;
  }
}
</style>
