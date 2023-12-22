<script setup>
import { onMounted } from 'vue'
import TheButton from './TheButton.vue'
import TheContainer from './TheContainer.vue'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const sections = [
  {
    num: 1,
    title: 'Для частных инвесторов и состоятельных семей',
    backgroundColor: '#f9f9f9',
    size: 'small',
    items: [
      {
        img: './img/TheForSection/1/1.svg',
        title: 'Персональный управляющий',
        desc: 'Комплексное сопровождение и&nbsp;помощь по&nbsp;любым вопросам, связанным с&nbsp;управлением капиталом и&nbsp;инвестициями'
      },
      {
        img: './img/TheForSection/1/2.svg',
        title: 'Финансовая инфраструктура',
        desc: 'Открытие банковских и брокерских счетов в разных географиях, переводы средств, структурирование активов, разблокировка'
      },
      {
        img: './img/TheForSection/1/3.svg',
        title: 'Эксклюзивные инвестиции',
        desc: 'Доступ к сделкам и закрытым фондам в сфере альтернативных инвестиций (PE/VC, кредитование, недвижимость, фонды и др.) '
      },
      {
        img: './img/TheForSection/1/4.svg' ,
        title: 'Полная картина всех активов',
        desc: 'Агрегация всех видов активов (ценные бумаги, депозиты, инвестиции в бизнес, недвижимость и др) в единую картину'
      },
      {
        img: './img/TheForSection/1/5.svg',
        title: 'Экспертное сопровождение',
        desc: 'Консультации от резидентов профессионального сообщества Skyfort (финансовые, юридические и налоговые вопросы) '
      },
      {
        img: './img/TheForSection/1/6.svg',
        title: 'Аналитика и&nbsp;инсайты',
        desc: 'Исследования, инсайты и экспертные комментарии по вопросам управления капиталом и инвестиций. Финансовое образование'
      }
    ],
    btnText: 'Получить доступ',
    btnLink: '#'
  },
  {
    num: 2,
    backgroundColor: '#f1f3f5',
    title: 'Для независимых финансовых советников',
    size: 'small',
    items: [
      {
        img: './img/TheForSection/2/1.svg',
        title: 'Профессиональная CRM-система',
        desc: 'Специализированная платформа для ведения клиентов полного цикла: контакты, задачи, сделки, платежи, отчетность'
      },
      {
        img: './img/TheForSection/2/2.svg',
        title: 'Постоянный поток&nbsp;клиентов',
        desc: 'Собственная система маркетинга и продаж с передачей клиентов сертифицированным управляющим Skyfort'
      },
      {
        img: './img/TheForSection/2/3.svg',
        title: 'Инвестиционный маркетплейс',
        desc: 'Эксклюзивные инвестиционные продукты от Skyfort Product Lab и проверенных поставщиков со всего мира'
      },
      {
        img: './img/TheForSection/2/4.svg',
        title: 'Финансовая инфраструктура',
        desc: 'Развитая финансовая инфраструктура для независимых управляющих в ключевых локациях (EU, MENA, ASIA, LATAM)'
      },
      {
        img: './img/TheForSection/2/5.svg',
        title: 'Аналитика<br> и образование',
        desc: 'Исследования, инсайты и экспертная поддержка. Образовательные программы для управляющих и советников'
      },
      {
        img: './img/TheForSection/2/6.svg',
        title: 'Управление<br> портфелями',
        desc: 'Цифровая платформа с агрегацией всех видов активов клиента. Управление, отчетность, рекомендации'
      }
    ],
    btnText: 'Подключиться',
    btnLink: '#'
  },
  {
    num: 3,
    backgroundColor: '#f9f9f9',
    title: 'Для поставщиков продуктов и сервисов',
    bigTitle: true,
    size: 'big',
    items: [
      {
        img: './img/TheForSection/3/1.svg',
        title: 'Глобальная дистрибуция',
        desc: 'Представьте ваш продукт десяткам тысяч потенциальных инвесторов и&nbsp;клиентов по&nbsp;всему миру через развитую партнерскую сеть Skyfort'
      },
      {
        img: './img/TheForSection/3/2.svg',
        title: 'Ведение сделок',
        desc: 'Отслеживайте, оформляйте и&nbsp;исполняйте сделки онлайн с&nbsp;помощью цифровой платформы и&nbsp;бесшовной финансовой инфраструктуры'
      }
    ],
    btnText: 'Стать партнером',
    btnLink: '#'
  }
]

onMounted(() => {
  gsap.set('.for__section-item', { opacity: 0 })

  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: '.for__section-1',
      start: 'top+=15% bottom',
      scrub: false
    }
  })

  tl1.to('.for__section-item-1', { opacity: 1, duration: 0.5, stagger: 0.3 })

  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: '.for__section-2',
      start: 'top+=15% bottom',
      scrub: false
    }
  })

  tl2.to('.for__section-item-2', { opacity: 1, duration: 0.5, stagger: 0.5 })

  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: '.for__section-3',
      start: 'top+=15% bottom',
      scrub: false
    }
  })

  tl3.to('.for__section-item-3', { opacity: 1, duration: 0.5, stagger: 0.5 })
})

import { useGlobalStore } from '../stores/global'
const globalStore = useGlobalStore()
const openModal = () => {
  globalStore.changeModalOpened(true)
}
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
            <div class="for__section-top wow animate__animated animate__fadeIn">
              <span :class="[
                'for__section-num',
                { 'for__section-num-2': section.num === 2 }
              ]">
                {{ section.num }}
              </span>
              <h2 class="for__section-title" :class="{ _big: section.bigTitle }">
                {{ section.title }}
              </h2>
            </div>
          </div>

          <ul
            class="for__section-list"
            :class="{ small: section.size === 'small', big: section.size === 'big' }"
          >
            <li
              :class="`for__section-item for__section-item-${idx + 1}`"
              v-for="item in section.items"
              :key="item.title"
            >
              <img class="for__item-img" :src="item.img" :alt="`Icon ${item.title}`" />
              <h3 class="for__item-title" v-html="item.title"></h3>
              <p class="for__item-desc" v-html="item.desc" />
            </li>
          </ul>
          <TheButton class="for__section-btn" color="black" size="big" @click="openModal">
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
  overflow: hidden;
  // &__inner {
  //   display: flex;
  //   flex-wrap: nowrap;
  //   @media (max-width: 1023px) {
  //     flex-direction: column;
  //   }
  //   width: 600%;
  // }
  &__section {
    width: 100vw;
    @include adaptive-value('padding-top', 120, 70, 1);
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
    @include adaptive-value('margin-right', 40, 20, 1);
    color: #a5cce0;
    font-family: 'Atyp Display', sans-serif;
    @include adaptive-value('font-size', 100, 46, 1);
    @include adaptive-value('line-height', 100, 46, 1);
    @include adaptive-value('height', 100, 46, 1);
    font-weight: 300;
    transform: translateY(4px);
    &-2 {
      transform: translateY(3px);
    }
  }
  &__section-title {
    font-family: 'Atyp Display', sans-serif;
    @include adaptive-value('font-size', 40, 28, 1);
    @include adaptive-value('line-height', 43, 32, 1);
    max-width: 490px;
    &._big {
      max-width: 550px;
    }
    @media (max-width: 490px) {
      font-weight: 300;
      margin-bottom: 0;
    }
  }
  &__section-list {
    //@include adaptive-value('margin-bottom', 62, 27, 1);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    @include adaptive-value('row-gap', 40, 14, 1);
    &.big {
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
    border-image-slice: 1;
  }
  &__item-img {
    @include adaptive-value('width', 64, 45, 1);
    @include adaptive-value('margin-bottom', 30, 9, 1);
  }
  &__item-title {
    font-feature-settings: 'ss06' on;
    font-family: 'Atyp Display', sans-serif;
    @include adaptive-value('font-size', 20, 18, 1);
    @include adaptive-value('letter-spacing', 0, -0.5, 1);
    line-height: calc(24 / 20);
    @include adaptive-value('margin-bottom', 24, 24, 1);
    max-width: 200px;
  }
  &__item-desc {
    @include adaptive-value('font-size', 14, 11, 1);
    line-height: calc(16 / 14);
    max-width: 250px;
    color: #4e575a;
    @include adaptive-value('letter-spacing', 0, -0.04, 1);
  }
  &__section-btn {
    display: block;
    text-align: center;
    @include adaptive-value('margin-top', 68, 28, 1);
    .btn {
      @include adaptive-value('padding-top', 8, 4, 1);
      @include adaptive-value('padding-bottom', 8, 4, 1);
      @include adaptive-value('padding-right', 45, 28, 1);
      @include adaptive-value('padding-left', 45, 28, 1);
      font-weight: 300;
      span {
        font-weight: 300;
      }

    }
  }
}

@media (max-width: 700px) {
  .for {
    &__section-list {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 0;
      justify-content: center;
      justify-items: center;
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
        .for__item-title {
          max-width: 120px;
        }
      }
    }
    &__section-top-wrapper {
      justify-content: center;
    }
    &__section-num {
      display: none;
    }
    &__section-title {
      text-align: center;
      margin-left: auto;
      margin-right: auto;
      max-width: 325px;
      @include adaptive-value('margin-bottom', 34, 7, 1);
    }
    &__item-title {
      font-weight: 200;
    }
    &__item-desc {
      font-weight: 300;
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
      justify-content: center;
      padding-bottom: 30px;
      &:nth-child(2n + 1) {
        border-left-width: 0px;
        padding-left: 0;
        margin-left: 8px;
      }
      &:nth-child(2n) {
        padding-right: 0;
        margin-right: 8px;
      }
    }
  }
}

// Костыли
.for {
  &__section {
    &-2 {
      .for__section-title {
        max-width: 500px;
      }
      .for__section-item:nth-child(3) .for__item-title {
        max-width: 260px;
      }
      .for__section-item:nth-child(5) .for__item-title {
        max-width: 260px;
      }
      .for__section-item:nth-child(6) .for__item-title {
        max-width: 260px;
      }
    }
    &-3 {
      .for__section-top-wrapper {
        @include adaptive-value('margin-bottom', 50, 40, 1);
      }
    }
  }
}
</style>
