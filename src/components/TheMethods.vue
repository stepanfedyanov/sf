<script setup>
import { onMounted } from 'vue'
import TheContainer from './TheContainer.vue'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const cards = [
  [
    {
      img: './img/TheCommunitySection/methods/main.jpg',
      title: 'Analytics',
      desc: 'Lorem ipsum dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat'
    },
    {
      img: './img/TheCommunitySection/methods/main.jpg',
      title: 'Strategy',
      desc: 'Lorem ipsum dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat'
    }
  ],
  [
    {
      img: './img/TheCommunitySection/methods/main.jpg',
      title: 'Analytics',
      desc: 'Lorem ipsum dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat'
    },
    {
      img: './img/TheCommunitySection/methods/main.jpg',
      title: 'Strategy',
      desc: 'Lorem ipsum dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat'
    }
  ],
  [
    {
      img: './img/TheCommunitySection/methods/main.jpg',
      title: 'Analytics',
      desc: 'Lorem ipsum dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat'
    },
    {
      img: './img/TheCommunitySection/methods/main.jpg',
      title: 'Strategy',
      desc: 'Lorem ipsum dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat'
    }
  ]
]

gsap.registerPlugin(ScrollTrigger)

</script>

<template>
  <section class="methods">
    <TheContainer>
      <div class="methods__inner">
        <ul class="methods__cards" v-for="block in cards" :key="block[0].title">
          <li
            class="methods__card wow animate__animated animate__fadeIn"
            data-wow-duration="0.5s"
            :data-wow-delay="parseFloat(`${0.3 * idx}`) + 0.2 + 's'"
            v-for="(card, idx) in block"
            :key="card.title"
          >
            <div class="methods__card-img-wrapper">
              <img class="methods__card-img" :src="card.img" :alt="`Icon ${card.title}`" />
            </div>
            <h3 class="methods__title">
              {{ card.title }}
            </h3>
            <p class="methods__desc">
              {{ card.desc }}
            </p>
          </li>
        </ul>
      </div>
    </TheContainer>
  </section>
</template>

<style lang="scss">
.methods {
  position: relative;
  z-index: 100;
  margin-bottom: 90px;
  @include adaptive-value('margin-top', 78, 12, 1);
  &__cards {
    display: flex;
    max-width: 950px;
    margin: 0 auto;
  }
  &__cards + &__cards {
    margin-top: 50px;
  }
  &__card {
    @include adaptive-value('padding-top', 73, 32, 1);
    @include adaptive-value('padding-bottom', 73, 32, 1);
    @include adaptive-value('padding-left', 72, 20, 1);
    @include adaptive-value('padding-right', 72, 20, 1);
    @include adaptive-value('border-radius', 50, 30, 1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    background: linear-gradient(168deg, #fff -5.86%, rgba(255, 255, 255, 0) 96.08%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
  }
  &__card + &__card {
    @include adaptive-value('margin-left', 40, 6, 1);
  }
  &__card-img-wrapper {
    text-align: center;
    @include adaptive-value('padding-top', 42, 16, 1);
    @include adaptive-value('padding-bottom', 42, 16, 1);
    @include adaptive-value('padding-left', 64, 23, 1);
    @include adaptive-value('padding-right', 64, 23, 1);
    @include adaptive-value('border-radius', 130.909, 43.636, 1);
    background: #fff;
    display: inline-block;
    @include adaptive-value('margin-bottom', 42, 16, 1);
  }
  &__card-img {
    @include adaptive-value('width', 106, 33, 1);
  }
  &__title {
    @include adaptive-value('margin-bottom', 35, 12, 1);
    font-family: 'Atyp Display', sans-serif;
    @include adaptive-value('font-size', 40, 20, 1);
    line-height: normal;
    letter-spacing: -0.1px
  }
  &__desc {
    @include adaptive-value('font-size', 15, 11, 1);
    line-height: 1.1;
    max-width: 270px;
    letter-spacing: -0.2px;
    margin: 0 auto;
  }
}
</style>
