<script setup>
import { onMounted, ref } from 'vue';
import { vueVimeoPlayer } from 'vue-vimeo-player'

const playVideo = ref(false);
const pauseVideo = ref(false);
const vimeo = ref(null);

const play = () => {
  playVideo.value = true;
  pauseVideo.value = true;
  vimeo.value.play();
};

const pause = () => {
  pauseVideo.value = false;
  vimeo.value.pause();
};
</script>

<template>
  <div :class="[
    'intro__video-wrapper',
    { '_played': playVideo },
    { '_paused': pausedVideo }
  ]">
    <div class="intro__video">
      <!-- <div class="intro__video-pause" @click="pause" /> -->
      <vue-vimeo-player
        class="vimeo-video"
        ref="vimeo"
        :video-id="896479554"
        player-width="100%"
        player-height="100%"
        :options="{
          width: '100%',
          height: '100%',
          byline: false,
          title: false
        }"
      />
    </div>
    <Transition name="fade">
      <div v-if="!pauseVideo" class="intro__video-btn-wrapper">
        <svg
          class="intro__video-btn"
          xmlns="http://www.w3.org/2000/svg"
          width="90"
          height="90"
          viewBox="0 0 90 90"
          fill="none"
          @click="play()"
        >
          <g clip-path="url(#clip0_4_1810)">
            <circle cx="45" cy="45" r="45" fill="url(#paint0_linear_4_1810)" fill-opacity="0.5" />
            <path
              d="M36.7898 59C36.4076 59 36.0446 58.9269 35.7006 58.799C35.3567 58.6528 35.0701 58.4701 34.8026 58.2325C34.5541 57.9949 34.344 57.7025 34.1911 57.3918C34.0382 57.0629 33.9809 56.7157 33.9809 56.3502V36.6682C33.9809 36.3027 34.0573 35.9554 34.1911 35.6265C34.344 35.2976 34.535 35.0234 34.7834 34.7859C35.0319 34.5483 35.3185 34.3655 35.6624 34.2193C36.0064 34.0731 36.3503 34.0183 36.7516 34.0183C36.9809 34.0183 37.2102 34.0549 37.4395 34.1097C37.6688 34.1645 37.8981 34.2559 38.0892 34.3655L56.5478 44.1974C56.9873 44.435 57.3503 44.7639 57.5987 45.166C57.8471 45.5863 57.9809 46.0249 57.9809 46.5183C57.9809 47.0117 57.8662 47.4686 57.6178 47.8706C57.3694 48.2727 57.0255 48.6016 56.5669 48.8392L38.1465 58.6711C37.9363 58.7807 37.7261 58.8721 37.4968 58.9269C37.2675 58.9818 37.0382 59.0183 36.8089 59.0183L36.7898 59Z"
              fill="white"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_4_1810"
              x1="-7.875"
              y1="83.8125"
              x2="99.5625"
              y2="83.8125"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop class="play-stop-opacity" offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
            <clipPath id="clip0_4_1810">
              <rect width="90" height="90" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss">
.intro {
  &__video-wrapper {
    pointer-events: all;
    margin-bottom: 80px;
    @include adaptive-value('border-radius', 40, 30, 1);
    overflow: hidden;
    height: auto;
    aspect-ratio: 16 / 9;
    margin: 0 auto;
    position: relative;
    width: 95vw;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url('/img/TheIntroSection/video-poster.png') center / cover no-repeat;
    }
    &._played {
      &::before {
        display: none;
      }
    }
    &._paused {
      &::before {
        display: none;
      }
    }
  }
  &__video {
  position: relative;
    max-width: 100%;
    width: 100%;
    height: 100%;
    display: block;
    .vimeo-video {
      width: 100%;
      height: 100%;
    }
    iframe {
      width: 100%;
      height: 100%;
    }
    &-pause {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  &__video-btn-wrapper {
    z-index: 2;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &__video-btn {
    @include adaptive-value('width', 90, 52, 1);
    cursor: pointer;
    .play-stop-opacity {
      transition: 0.15s;
    }
    @media (hover: hover) {
      &:hover {
        .play-stop-opacity {
          stop-opacity: 0.88;
        }
      }
    }
  }
}

// @media (max-width: 600px) {
//   .intro {
//     &__video-wrapper {
//       &::before {
//         background: url('/img/TheIntroSection/video-poster.png') center / cover no-repeat;
//         background-size: 209%;
//         background-position: -200px -68px;
//       }
//     }
//   }
// }

@media (max-width: 490px) {
  .intro {
    &__video-wrapper {
      width: calc(100% - 42px);
    }
  }
}
// @media (max-width: 374px) {
//   .intro {
//     &__video-wrapper {
//       &::before {
//         background: url('/img/TheIntroSection/video-poster.png') center / cover no-repeat;
//         background-size: initial;
//       }
//     }
//   }
// }
</style>
