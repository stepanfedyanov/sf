<script setup>
import TheButton from './TheButton.vue'
import TheContainer from './TheContainer.vue'

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
        img: './img/TheForSection/1/1.svg',
        title: 'Personal Wealth Manager 24/7',
        desc: 'Lorem ipsum dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper tempor egestas diam'
      },
      {
        img: './img/TheForSection/1/1.svg',
        title: 'Personal Wealth Manager 24/7',
        desc: 'Lorem ipsum dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper tempor egestas diam'
      },
      {
        img: './img/TheForSection/1/1.svg',
        title: 'Personal Wealth Manager 24/7',
        desc: 'Lorem ipsum dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper tempor egestas diam'
      },
      {
        img: './img/TheForSection/1/1.svg',
        title: 'Personal Wealth Manager 24/7',
        desc: 'Lorem ipsum dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper tempor egestas diam'
      },
      {
        img: './img/TheForSection/1/1.svg',
        title: 'Personal Wealth Manager 24/7',
        desc: 'Lorem ipsum dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper tempor egestas diam'
      }
    ],
    btnText: 'Get Access',
    btnLink: '#'
  },
  {
    num: 2,
    backgroundColor: '#F2F3F5',
    title: 'For high-net-worth individuals & families',
    size: 'small',
    items: [
      {
        img: './img/TheForSection/1/1.svg',
        title: 'Personal Wealth Manager 24/7',
        desc: 'Lorem ipsum dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper tempor egestas diam'
      },
      {
        img: './img/TheForSection/1/1.svg',
        title: 'Personal Wealth Manager 24/7',
        desc: 'Lorem ipsum dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper tempor egestas diam'
      },
      {
        img: './img/TheForSection/1/1.svg',
        title: 'Personal Wealth Manager 24/7',
        desc: 'Lorem ipsum dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper tempor egestas diam'
      },
      {
        img: './img/TheForSection/1/1.svg',
        title: 'Personal Wealth Manager 24/7',
        desc: 'Lorem ipsum dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper tempor egestas diam'
      },
      {
        img: './img/TheForSection/1/1.svg',
        title: 'Personal Wealth Manager 24/7',
        desc: 'Lorem ipsum dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper tempor egestas diam'
      },
      {
        img: './img/TheForSection/1/1.svg',
        title: 'Personal Wealth Manager 24/7',
        desc: 'Lorem ipsum dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper tempor egestas diam'
      }
    ],
    btnText: 'Get Access',
    btnLink: '#'
  },
  {
    num: 3,
    backgroundColor: '#fff',
    title: 'For high-net-worth individuals & families',
    size: 'big',
    items: [
      {
        img: './img/TheForSection/1/1.svg',
        title: 'Personal Wealth Manager 24/7',
        desc: 'Lorem ipsum dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper tempor egestas diam'
      },
      {
        img: './img/TheForSection/1/1.svg',
        title: 'Personal Wealth Manager 24/7',
        desc: 'Lorem ipsum dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper tempor egestas diam'
      }
    ],
    btnText: 'Get Access',
    btnLink: '#'
  }
]
</script>

<template>
  <section class="for">
    <div class="for__inner">
      <section
        class="for__section"
        :style="`background-color: ${section.backgroundColor}`"
        v-for="section in sections"
        :key="section.title"
      >
        <TheContainer>
          <div class="for__section-top">
            <span class="for__section-num">
              {{ section.num }}
            </span>
            <h2 class="for__section-title">
              {{ section.title }}
            </h2>
          </div>
          <ul
            class="for__section-list"
            :class="{ small: section.size === 'small', big: section.size === 'big' }"
          >
            <li class="for__section-item" v-for="item in section.items" :key="item.title">
              <img class="for__item-img" :src="item.img" alt="" />
              <h3 class="for__item-title">
                {{ item.title }}
              </h3>
              <p class="for__item-desc">
                {{ item.desc }}
              </p>
            </li>
          </ul>
          <TheButton class="for__section-btn" color="black" size="big">
            {{ section.btnText }}
          </TheButton>
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
  }
  &__section {
    padding: 78px 0;
  }
  &__section-top {
    margin-bottom: 62px;
    display: flex;
    align-items: center;
  }
  &__section-num {
    margin-right: 40px;
    color: #a5cce0;
    font-family: 'Atyp Display', sans-serif;
    font-size: 96px;
    line-height: calc(104 / 96);
    font-weight: 300;
    transform: translateY(-5px);
  }
  &__section-title {
    font-family: 'Atyp Display', sans-serif;
    font-size: 40px;
    line-height: calc(46 / 40);
    max-width: 450px;
  }
  &__section-list {
    margin-bottom: 62px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 48px 20px;
    &.big {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 48px 20px;
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
        margin-bottom: 32px;
      }
      .for__item-title {
        margin-bottom: 32px;
        max-width: 100%;
      }
      .for__item-desc {
        max-width: 100%;
        
      }
    }
  }
  &__section-item {
    padding: 20px 22px;
    border-left: 1px solid transparent;
    border-image: linear-gradient(to bottom, rgba(#000, 1), rgba(#000, 0));
    animation: gradientAnimation 4s infinite alternate;
    border-image-slice: 1;
  }
  &__item-img {
    margin-bottom: 46px;
  }
  &__item-title {
    font-feature-settings: 'ss06' on;
    font-family: 'Atyp Display', sans-serif;
    font-size: 20px;
    line-height: calc(24 / 20);
    margin-bottom: 34px;
    max-width: 200px;
  }
  &__item-desc {
    font-size: 14px;
    line-height: calc(16 / 14);
    max-width: 260px;
  }
  &__section-btn {
    margin: 0 auto;
    display: block;
  }
}
</style>
