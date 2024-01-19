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
    font-size: 96px;
    line-height: calc(78 / 96);
    letter-spacing: 0.96px;
    color: #fff;
    margin-bottom: 56px;
  }
  &__list {
    padding: 39px;
    border-radius: 40px;
    background-color: #fff;
    margin-left: -39px;
    margin-right: -39px;
  }
  &__item {
    display: flex;
  }
  &__item + &__item {
    margin-top: 40px;
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
    margin-left: 20px;
  }
  &__item-column-title {
    font-size: 13px;
    line-height: calc(24 / 13);
    letter-spacing: 0.26px;
    opacity: 0.5;
    margin-bottom: 8px;
  }
  &__item-column-info {
    font-size: 18px;
    line-height: calc(24 / 18);
    letter-spacing: 0.36px;
    max-width: 430px;
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
</style>
