<script setup>
import TheContainer from './TheContainer.vue'
import TheFooterSection from './TheFooterSection.vue'
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
      name: 'Полное наименование',
      date: 'Дата раскрытия',
      period: 'Период актуальности'
    },
    main: {
      name: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ “КЭПИТАЛ БОРД”',
      date: '13.09.2023',
      period: 'По настоящее время'
    }
  }
]
</script>

<template>
  <TheHeader />
  <div class="information-bg"></div>
  <TheContainer class="information">
    <h1 class="information__title">Общая информация</h1>
    <ul class="information__list">
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
            <span class="liberty__link-text"
              >Политика по выявлению и контролю конфликта интересов</span
            >
          </span>
          <img class="liberty__link-arrow" src="/img/global/arrow.svg" alt="Arrow" />
        </a>
      </div>
    </div>
  </TheContainer>
  <TheFooterSection />
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
  &__list {
    @include adaptive-value('padding', 39, 24, 1);
    @include adaptive-value('border-radius', 40, 20, 1);
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
    @include adaptive-value('font-size', 40, 26, 1);
    line-height: calc(46 / 40);
    letter-spacing: -0.4px;
    @include adaptive-value('margin-bottom', 32, 24, 1);
  }
  .liberty__link-wrapper {
    @include adaptive-value('margin-bottom', 128, 78, 1);
    .liberty__main-link {
      background: #f2f3f5;
    }
  }
  .liberty__link-img {
    @include adaptive-value('margin-right', 20, 12, 1);
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
      margin-right: 0px;
      margin-left: 0px;
    }
  }
}

@media (max-width: 800px) {
  .information {
    &__item {
      flex-direction: column;
    }
    &__list {
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }
    &__item + &__item {
      @include adaptive-value('margin-top', 40, 20, 1);
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
</style>
