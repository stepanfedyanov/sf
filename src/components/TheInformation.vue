<script setup>
import TheContainer from './TheContainer.vue'
import TheHeader from './TheHeader.vue'
const items = [
  {
    titles: {
      name: 'Полное наименование',
      date: 'Дата раскрытия',
      period: 'Период актуальности'
    },
    main: {
      name: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ “КЭПИТАЛ БОРД”',
      date: '13.09.2023',
      period: 'По настоящее время'
    }
  },
  {
    titles: {
      name: 'Краткое наименование',
      date: 'Дата раскрытия',
      period: 'Период актуальности'
    },
    main: {
      name: 'ООО “КЭПИТАЛ БОРД”',
      date: '13.09.2023',
      period: 'По настоящее время'
    }
  },
  {
    titles: {
      name: 'Полное наименование на английском языке',
      date: 'Дата раскрытия',
      period: 'Период актуальности'
    },
    main: {
      name: 'LIMITED LIABILITY COMPANY "CAPITAL BORD”',
      date: '13.09.2023',
      period: 'По настоящее время'
    }
  },
  {
    titles: {
      name: 'Краткое наименование на английском языке',
      date: 'Дата раскрытия',
      period: 'Период актуальности'
    },
    main: {
      name: 'LLC "CAPITAL BORD”',
      date: '13.09.2023',
      period: 'По настоящее время'
    }
  },
  {
    titles: {
      name: 'Юридический адрес',
      date: 'Дата раскрытия',
      period: 'Период актуальности'
    },
    main: {
      name: '125047, город Москва, вн. тер. г. муниципальный округ Тверской, ул. Бутырский вал, д. 10',
      date: '26.01.2024',
      period: 'По настоящее время'
    }
  },
  {
    titles: {
      name: 'Фактический адрес',
      date: 'Дата раскрытия',
      period: 'Период актуальности'
    },
    main: {
      name: '125047, город Москва, вн. тер. г. муниципальный округ Тверской, ул. Бутырский вал, д. 10',
      date: '13.09.2023',
      period: 'По настоящее время'
    }
  },
  {
    titles: {
      name: 'Телефон',
      date: 'Дата раскрытия',
      period: 'Период актуальности'
    },
    main: {
      name: '+7 929 6969 418',
      date: '13.09.2023',
      period: 'По настоящее время'
    }
  },
  {
    titles: {
      name: 'Сайт в сети интернет',
      date: 'Дата раскрытия',
      period: 'Период актуальности'
    },
    main: {
      name: 'https://skyfort.capital',
      date: '13.09.2023',
      period: 'По настоящее время'
    }
  },
  {
    titles: {
      name: 'ИНН',
      date: 'Дата раскрытия',
      period: 'Период актуальности'
    },
    main: {
      name: '9704220707',
      date: '13.09.2023',
      period: 'По настоящее время'
    }
  },
  {
    titles: {
      name: 'КПП',
      date: 'Дата раскрытия',
      period: 'Период актуальности'
    },
    main: {
      name: '770401001',
      date: '13.09.2023',
      period: 'По настоящее время'
    }
  },
  {
    titles: {
      name: 'ОКПО',
      date: 'Дата раскрытия',
      period: 'Период актуальности'
    },
    main: {
      name: '96460806',
      date: '13.09.2023',
      period: 'По настоящее время'
    }
  },
  {
    titles: {
      name: 'Адрес электронной почты',
      date: 'Дата раскрытия',
      period: 'Период актуальности'
    },
    main: {
      name: 'info@skyfort.capital',
      date: '13.09.2023',
      period: 'По настоящее время'
    }
  },
]
</script>

<template>
  <TheHeader/>
  <div class="information-bg"></div>
  <TheContainer class="information">
    <h1 class="information__title">Раскрытие информации</h1>
    <ul class="information__list">
      <div class="information__subTitle">Юридическая информация</div>
      <li class="information__item" v-for="item in items" :key="item.main.name">
        <div class="information__item-column">
          <div class="information__item-column-title">
            {{ item.titles.name }}
          </div>
          <div class="information__item-column-info">
            {{ item.main.name }}
          </div>
        </div>
        <div class="information__item-column">
          <div class="information__item-column-title">
            {{ item.titles.date }}
          </div>
          <div class="information__item-column-info">
            {{ item.main.date }}
          </div>
        </div>
        <div class="information__item-column">
          <div class="information__item-column-title">
            {{ item.titles.period }}
          </div>
          <div class="information__item-column-info">
            {{ item.main.period }}
          </div>
        </div>
      </li>
    </ul>
    <div class="documents">
      <h2 class="documents__title">Документы, относящиеся к деятельности компании</h2>
      <div class="liberty__link-wrapper wow animate__animated animate__fadeIn">
        <a class="liberty__main-link" href="/files/policy_KI.pdf" target="_blank">
          <span class="liberty__main-link-left">
            <img
              class="liberty__link-img"
              src="/img/TheLibertySection/link-img.svg"
              alt="Политика по выявлению и контролю конфликта интересов"
            />
            <a class="liberty__link-text" href="/files/policy_KI.pdf" target="_blank">
              Политика по выявлению и контролю конфликта интересов
            </a>
          </span>
        </a>
        <div class="liberty__link-info">
          <div>
            <span>Название</span>
            <span>Политика по выявлению и контролю конфликта интересов</span>
          </div>
          <div>
            <span>Дата раскрытия</span>
            <span>13.09.2023</span>
          </div>
          <div>
            <span>Период актуальности</span>
            <span>По настоящее время</span>
          </div>
        </div>
      </div>
    </div>
  </TheContainer>
</template>

<style lang="scss">
.information-bg {
  z-index: -1;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 790px;
  background: linear-gradient(
    180deg,
    #a5cce0 0%,
    #a6cce0 11.79%,
    #a8cee1 21.38%,
    #abd0e2 29.12%,
    #b0d2e4 35.34%,
    #b5d5e6 40.37%,
    #bcd9e8 44.56%,
    #c3ddea 48.24%,
    #cae1ed 51.76%,
    #d2e5ef 55.44%,
    #daeaf2 59.63%,
    #e2eef5 64.66%,
    #eaf3f8 70.88%,
    #f1f7fa 78.62%,
    #f8fbfd 88.21%,
    #fff 100%
  );
}
.information {
  @include adaptive-value('padding-top', 186, 147, 1);
  &__title {
    text-align: center;
    @include adaptive-value('font-size', 96, 50, 1);
    line-height: 1;
    letter-spacing: 0.96px;
    color: #fff;
    @include adaptive-value('margin-bottom', 56, 36, 1);
  }

  &__subTitle {
    @include adaptive-value('font-size', 32, 24, 1);
    line-height: 46px;
    letter-spacing: -0.32px;
    color: #052E3E;
    @include adaptive-value('margin-bottom', 15, 10, 1);
  }

  &__list {
    @include adaptive-value('padding', 39, 24, 1);
    @include adaptive-value('border-radius', 40, 32, 1);
    background-color: #fff;
    margin-left: -39px;
    margin-right: -39px;
    @include adaptive-value('margin-bottom', 89, 64, 1);
  }
  &__item {
    display: flex;
  }
  &__item + &__item {
    @include adaptive-value('margin-top', 40, 20, 1);
  }
  &__item-column {
    display: flex;
    flex-direction: column;
    width: 100%;
    &:nth-child(2) {
      max-width: 152px;
    }
    &:nth-child(3) {
      max-width: 236px;
    }
  }
  &__item-column + &__item-column {
    @include adaptive-value('margin-left', 20, 10, 1);
  }
  &__item-column-title {
    @include adaptive-value('font-size', 13, 12, 1);
    line-height: calc(24 / 13);
    @include adaptive-value('letter-spacing', 0.26, 0.26, 1);
    opacity: 0.5;
    @include adaptive-value('margin-bottom', 8, 4, 1);
  }
  &__item-column-info {
    @include adaptive-value('font-size', 18, 14, 1);
    line-height: calc(24 / 18);
    @include adaptive-value('letter-spacing', 0.36, 0.36, 1);
    max-width: 430px;
  }
}
.documents {
  &__title {
    @include adaptive-value('font-size', 32, 24, 1);
    line-height: calc(46 / 40);
    letter-spacing: -0.4px;
    @include adaptive-value('margin-bottom', 32, 24, 1);
  }
  .liberty__link-wrapper {
    @include adaptive-value('margin-bottom', 128, 78, 1);
    background: #f2f3f5;
    border-radius: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    //justify-content: space-between;
    gap:100px;
    padding: 0 32px;
    .liberty__link-info {
      display: flex;
      flex-direction: row;
      gap:80px;
      div{
        display: flex;
        flex-direction: column;
        gap: 8px;
        span:first-child{
          @include adaptive-value('font-size', 18, 14, 1);
          color: #052E3E;
          font-size: 13px;
          line-height: 24px;
          letter-spacing: 0.26px;
          opacity: 0.5;
        }
        span:last-child{
          @include adaptive-value('font-size', 18, 14, 1);
          color: #052E3E;
          font-size: 18px;
          line-height: 24px;
          letter-spacing: 0.36px;
        }
      }
      div:first-child{
        display: none;
      }
    }
    .liberty__main-link {
      width: 50%;
      background: #f2f3f5;
    }
  }
}
.footer {
  @include adaptive-value('padding-top', 48, 43, 1);
  @include adaptive-value('padding-bottom', 48, 43, 1);
  &__top {
    display: none;
  }
  &__bottom {
    padding: 0;
  }
}

@media (max-width: 1120px) {
  .information {
    &__list {
      margin-right: 0;
      margin-left: 0;
    }
  }
}

@media (max-width: 800px) {
  .information {
    &__item {
      flex-direction: column;
      border-top: 1px rgba(5, 46, 62, 0.1) solid;
      padding-top: 16px;
    }
    &__list {
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }
    &__item + &__item {
      @include adaptive-value('margin-top', 40, 26, 1);
    }
    &__item-column {
      &:nth-child(2) {
        max-width: 100%;
      }
      &:nth-child(3) {
        max-width: 100%;
      }
    }
    &__item-column + &__item-column {
      @include adaptive-value('margin-left', 0, 0, 1);
      margin-top: 9px;
    }
    &__item-column-title {
      @include adaptive-value('margin-bottom', 0, 0, 1);
    }
    &__item-column-info {
      @include adaptive-value('font-size', 18, 14, 1);
      line-height: calc(24 / 18);
      @include adaptive-value('letter-spacing', 0.36, 0.36, 1);
      max-width: 430px;
    }
  }
}


@media (max-width: 380px){
  .information__list{
    margin-bottom: 32px;
  }
  .documents{
    padding: calc(24px + 15 * (100vw - 375px) / 669);
    &__title{
      width: 85%;
    }
    .liberty__link-wrapper{
      a{
        display: none;
      }
      .liberty__link-info{
        padding: 20px 0;
        flex-direction: column;
        gap:16px;
        div:first-child{
          display: flex;
        }
      }
    }


  }
}
</style>
