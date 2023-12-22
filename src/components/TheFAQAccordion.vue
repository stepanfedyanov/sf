<script setup>
import TheAccordion from './TheAccordion.vue'
import TheAccordionItem from './TheAccordionItem.vue'

const items = [
  {
    header: 'Как получить ранний доступ?',
    body: 'Платформа Skyfort находится в процессе разработки. Проект стартовал осенью 2023 года, первый релиз запланирован на 1 квартал 2024 года. Если вы хотите присоединиться к команде Skyfort, стать ранним клиентом или партнером - оставьте заявку на сайте и напишите кратко о себе.'
  },
  {
    header: 'Каков минимальный чек входа?',
    body: 'Миссия Skyfort - сделать качественные продукты и сервисы, ориентированные на ультрабогатых людей, доступными максимально широкому кругу инвесторов. На первом этапе мы стремимся снизить минимальный чек входа до 1 млн руб. для инвестиций и до 100 тыс. руб. для сервисов. Большая часть инвестиционных продуктов, согласно законодательству РФ, пока доступна только для квалифицированных инвесторов.'
  },
  {
    header: 'Как выставить продукт на полку?',
    body: 'Ассортимент маркетплейса Skyfort формируется из трех источников: собственная продуктовая фабрика Skyfort Product Lab, внешние продуктовые фабрики и резиденты профессионального сообщества. Приоритет отдается эксклюзивным сделкам и фондам в сфере Private Equity, Private Credit и Real Estate в России и дружественных географиях. Предложения о сотрудничестве направляйте на <a href="mailto:igor.smirnov@skyfort.capital">igor.smirnov@skyfort.capital</a> или в Telegram <a href="https://t.me/harrybright" target="_blank">@harrybright</a>.'
  },
  {
    header: 'Что дает участие в сообществе?',
    body: 'Сообщество Skyfort - это профессиональная ассоциация ведущих экспертов в области wealth management и private banking. Наша миссия - способствовать формированию нового класса независимых управляющих капиталом и финансовых советников в России и за рубежом, помогать банкирам и финансовым консультантам создавать и развивать собственный бизнес. Для подачи заявки на раннее участие пишите в Telegram <a href="https://t.me/harrybright" target="_blank">@harrybright</a>.'
  }
]
</script>

<template>
  <section class="accordion">
    <TheAccordion>
      <TheAccordionItem
        class="wow animate__animated animate__fadeIn"
        v-for="(item, idx) in items"
        :data-wow-delay="parseFloat(`${0.2 * idx}`) + 's'"
        :key="item.header"
        :prevent-open="idx === 0"
      >
        <template v-slot:accordion-trigger>
          <h3>{{ item.header }}</h3>
          <button class="accordion__arrow-btn">
            <img src="/img/global/arrow.svg" class="accordion__arrow" />
          </button>
        </template>
        <template v-slot:accordion-content>
          <span v-html="item.body"> </span>
        </template>
      </TheAccordionItem>
    </TheAccordion>
  </section>
</template>

<style lang="scss">
.accordion__content {
  span {
    @include adaptive-value('padding-top', 25, 18, 1);
    @include adaptive-value('padding-bottom', 15, 14, 1);
    display: inline-block;
    @include adaptive-value('letter-spacing', 0.2, 0.37, 1);
    @include adaptive-value('line-height', 21, 13, 1);
    max-width: 880px;
    @media (max-width: 800px) {
      padding-bottom: 0;
    }
    a {
      position: relative;
      &::before {
        content: '';
        position: absolute;
        bottom: 0px;
        width: 100%;
        height: 1px;
        background-color: #000;
        transition: 0.2s;
      }
      transition: 0.2s;
      &:hover {
        color: #00488b;
        &::before {
          background-color: #00488b;
        }
      }
    }
  }
}

.accordion__item {
  &:last-child {
    span {
      @include adaptive-value('padding-top', 24, 14, 1);
    }
  }
}

@media (max-width: 530px) {
  .accordion__content {
    span {
      font-weight: 300;
    }
  }
}
.accordion {
  @include adaptive-value('padding-top', 38, 25, 1);
  @include adaptive-value('padding-bottom', 44, 25, 1);
  @include adaptive-value('padding-left', 41, 25, 1);
  @include adaptive-value('padding-right', 48, 25, 1);
  @include adaptive-value('border-radius', 40, 27, 1);
  background: #f2f3f5;
  &__arrow-btn {
    background: transparent;
    outline: none;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }
  &__arrow {
    transform: rotate(90deg);
    transition: 0.3s;
    @include adaptive-value('width', 26, 16, 1);
  }
  &__trigger {
    h3 {
      font-family: 'Atyp Display', sans-serif;
      @include adaptive-value('font-size', 20, 12, 1);
      @include adaptive-value('line-height', 24, 20, 1);
      @include adaptive-value('letter-spacing', 0, 0.1, 1);
    }
  }
  &__trigger_active {
    .accordion__arrow {
      transform: rotate(270deg) translateY(2px) translateX(0px);
    }
  }
}

@media (max-width: 800px) {
  .faq {
    &__title {
      text-align: center;
    }
  }
}

@media (max-width: 490px) {
  .accordion {
    max-width: 314px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
