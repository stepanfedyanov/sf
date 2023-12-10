<script setup>
import { onMounted } from 'vue';
import TheButton from './TheButton.vue'
import TheContainer from './TheContainer.vue'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const sections = [
  {
    num: 1,
    title: 'For high-net-worth individuals & families',
    backgroundColor: '#fff',
    size: 'small',
    items: [
      {
        img: './img/TheForSection/1/1.svg',
        title: 'Personal Wealth Manager 24/7',
        desc: 'Lorem ipsum dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper tempor egestas diam'
      },
      {
        img: './img/TheForSection/1/2.svg',
        title: 'Financial & Legal Infrastructure',
        desc: 'Lorem ipsum dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper tempor egestas diam'
      },
      {
        img: './img/TheForSection/1/3.svg',
        title: 'Highly Curated Marketplace',
        desc: 'Lorem ipsum dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper tempor egestas diam'
      },
      {
        img: './img/TheForSection/1/4.svg',
        title: '360° Assets Overview',
        desc: 'Lorem ipsum dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper tempor egestas diam'
      },
      {
        img: './img/TheForSection/1/5.svg',
        title: 'Advisory and Wealthcare',
        desc: 'Lorem ipsum dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper tempor egestas diam'
      },
      {
        img: './img/TheForSection/1/6.svg',
        title: 'Analytics and Insights',
        desc: 'Lorem ipsum dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper tempor egestas diam'
      }
    ],
    btnText: 'Get Access',
    btnLink: '#'
  },
  {
    num: 2,
    backgroundColor: '#F2F3F5',
    title: 'For wealth managers and family offices',
    size: 'small',
    items: [
      {
        img: './img/TheForSection/2/1.svg',
        title: 'Full cycle professional CRM',
        desc: 'Lorem ipsum dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper tempor egestas diam'
      },
      {
        img: './img/TheForSection/2/2.svg',
        title: 'Pipeline of new clients',
        desc: 'Lorem ipsum dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper tempor egestas diam'
      },
      {
        img: './img/TheForSection/2/3.svg',
        title: 'Curated marketplace of investments & services',
        desc: 'Lorem ipsum dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper tempor egestas diam'
      },
      {
        img: './img/TheForSection/2/4.svg',
        title: 'Financial and legal infrastructure',
        desc: 'Lorem ipsum dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper tempor egestas diam'
      },
      {
        img: './img/TheForSection/2/5.svg',
        title: 'Analytics, knowledge base & expert network',
        desc: 'Lorem ipsum dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper tempor egestas diam'
      },
      {
        img: './img/TheForSection/2/6.svg',
        title: 'Wealth planning &&nbsp;assets aggregation',
        desc: 'Lorem ipsum dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper tempor egestas diam'
      }
    ],
    btnText: 'Get Access',
    btnLink: '#'
  },
  {
    num: 3,
    backgroundColor: '#fff',
    title: 'For product factories, brokers & service providers',
    bigTitle: true,
    size: 'big',
    items: [
      {
        img: './img/TheForSection/3/1.svg',
        title: 'Access to new clients',
        desc: 'Lorem ipsum dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper tempor egestas diam'
      },
      {
        img: './img/TheForSection/3/2.svg',
        title: 'Digital deal execution',
        desc: 'Lorem ipsum dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper tempor egestas diam'
      }
    ],
    btnText: 'Get Access',
    btnLink: '#'
  }
]

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  let sections = gsap.utils.toArray(".for__section");

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".for__inner",
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      // base vertical scrolling on how wide the container is so it feels more natural.
      end: "+=3500",
    }
  });
});

</script>

<template>
  <section class="for">
    <div class="for__inner">
      <section
        :class="`for__section for__section-${idx + 1}`"
        :style="`background-color: ${section.backgroundColor}`"
        v-for="(section, idx) in sections"
        :key="section.title"
      >
        <TheContainer>
          <div class="for__section-top-wrapper">
            <div
              class="for__section-top"
            >
              <span class="for__section-num">
                {{ section.num }}
              </span>
              <h2 class="for__section-title" :class="{ _big: section.bigTitle }">
                {{ section.title }}
              </h2>
            </div>
            <TheButton
              class="for__section-btn"
              color="black"
              size="big"
            >
              {{ section.btnText }}
            </TheButton>
          </div>

          <ul
            class="for__section-list"
            :class="{ small: section.size === 'small', big: section.size === 'big' }"
          >
            <li
              class="for__section-item"
              v-for="(item) in section.items"
              :key="item.title"
            >
              <img class="for__item-img" :src="item.img" :alt="`Icon ${item.title}`" />
              <h3 class="for__item-title" v-html="item.title"></h3>
              <p class="for__item-desc">
                {{ item.desc }}
              </p>
            </li>
          </ul>
        </TheContainer>
      </section>
    </div>
  </section>
</template>

<style lang="scss">
@keyframes gradientAnimation {
  0% {
    border-image-source: linear-gradient(to bottom, black, rgba(0, 0, 0, 0));
  }
  100% {
    border-image-source: linear-gradient(to top, black, rgba(0, 0, 0, 0));
  }
}

.for {
  &__inner {
    display: flex;
    flex-wrap: nowrap;
    width: 600%;
  }
  &__section {
    width: 100vw;
    @include adaptive-value('padding-top', 140, 65, 1);
    @include adaptive-value('padding-bottom', 72, 65, 1);
  }
  &__section-top-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include adaptive-value('margin-bottom', 50, 52, 1);
  }
  &__section-top {
    display: flex;
    align-items: center;
  }
  &__section-num {
    @include adaptive-value('margin-right', 36, 20, 1);
    color: #a5cce0;
    font-family: 'Atyp Display', sans-serif;
    @include adaptive-value('font-size', 96, 46, 1);
    line-height: calc(104 / 96);
    font-weight: 300;
    transform: translateY(-4px);
  }
  &__section-title {
    font-family: 'Atyp Display', sans-serif;
    @include adaptive-value('font-size', 40, 28, 1);
    line-height: calc(46 / 40);
    max-width: 450px;
    &._big {
      max-width: 550px;
    }
  }
  &__section-list {
    //@include adaptive-value('margin-bottom', 62, 27, 1);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    @include adaptive-value('row-gap', 40, 14, 1);
    &.big {
      margin-top: 15%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      row-gap: 48px;
      column-gap: 20px;
      .for__section-item {
        padding: 20px 66px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        &:last-child {
          border-right: 1px solid transparent;
          border-image: linear-gradient(to bottom, rgba(#000, 1), rgba(#000, 0));
          border-image-slice: 1;
        }
      }
      .for__item-img {
        @include adaptive-value('margin-bottom', 30, 18, 1);
        @include adaptive-value('width', 64, 60, 1);
      }
      .for__item-title {
        margin-bottom: 24px;
        max-width: 100%;
      }
      .for__item-desc {
        max-width: 100%;
      }
    }
  }
  &__section-item {
    padding: 18px 22px;
    border-left: 1px solid transparent;
    border-image: linear-gradient(to bottom, rgba(#000, 1), rgba(#000, 0));
    animation: gradientAnimation 4s infinite alternate;
    border-image-slice: 1;
  }
  &__item-img {
    @include adaptive-value('width', 64, 45, 1);
    @include adaptive-value('margin-bottom', 30, 18, 1);
  }
  &__item-title {
    font-feature-settings: 'ss06' on;
    font-family: 'Atyp Display', sans-serif;
    @include adaptive-value('font-size', 20, 16, 1);
    line-height: calc(24 / 20);
    @include adaptive-value('margin-bottom', 24, 18, 1);
    max-width: 200px;
  }
  &__item-desc {
    @include adaptive-value('font-size', 14, 11, 1);
    line-height: calc(16 / 14);
    max-width: 260px;
  }
  &__section-btn {
    display: block;
    text-align: center;
  }
}

@media (max-width: 700px) {
  .for {
    &__section-list {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 0;
      &.big {
        column-gap: 0;
        .for__section-item {
          padding-top: 0;
          padding-bottom: 0;
          padding-left: 20px;
          padding-right: 20px;
          padding-bottom: 30px;
        }
        .for__section-item {
          &:last-child {
            border-right-width: 0;
          }
          &:nth-child(2n + 1) {
            padding-left: 0;
          }
          &:nth-child(2n) {
            padding-right: 0;
          }
        }
      }
    }
    &__section-num {
      display: none;
    }
    &__section-title {
      text-align: center;
      margin-left: auto;
      margin-right: auto;
      max-width: 325px;
      @include adaptive-value('margin-bottom', 34, 18, 1);
    }
    &__section-item {
      padding-top: 0;
      padding-bottom: 0;
      padding-left: 20px;
      padding-right: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding-bottom: 30px;
      &:nth-child(2n + 1) {
        border-left-width: 0px;
        padding-left: 0;
      }
      &:nth-child(2n) {
        padding-right: 0;
      }
    }
  }
}
</style>
