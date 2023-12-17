<script setup>
import TheAdvantage from './TheAdvantage.vue'

const sections = [
  {
    title: 'Продукты и сервисы',
    id: 'Маркетплейс',
    style: 'blue',
    desc: 'Premium curated Skyfort Marketplace offers top quality vetted products and services from our internal WM team, Skyfort Product Lab and third-party providers within our global professional community.',
    btnText: 'Смотреть все',
    cardStyle: 'bottom-image',
    cards: [
      {
        tag: '',
        date: '',
        desc: '',
        title: 'Семейный офис',
        href: '',
        imgSrc: './img/TheAdvantagesSection/1/1.jpg',
        columns: [
          {
            items: [
              'financial checkup',
              'asset aggregation',
              'macro analysis ',
              'strategic advisory '
            ]
          },
          {
            items: ['wealth planning', 'asset management', 'wealth transfer']
          }
        ]
      },
      {
        tag: '',
        date: '',
        desc: '',
        title: 'Финансовая инфраструктура',
        href: '',
        imgSrc: './img/TheAdvantagesSection/1/2.jpg',
        columns: [
          {
            items: ['bank accounts', 'broker accounts ', 'international transfers']
          },
          {
            items: ['daily banking', 'settlements on transactions']
          }
        ]
      },
      {
        tag: '',
        date: '',
        desc: '',
        title: 'Эксклюзивные инвестиции',
        href: '',
        imgSrc: './img/TheAdvantagesSection/1/3.jpg',
        columns: [
          {
            items: ['PE & VC deals', 'real estate', 'private debt', 'commodities']
          },
          {
            items: ['hedge funds', 'digital assets', 'structured products']
          }
        ]
      },
      {
        tag: '',
        date: '',
        desc: '',
        title: 'Корпоративные финансы',
        href: '',
        imgSrc: './img/TheAdvantagesSection/1/4.jpg',
        columns: [
          {
            items: ['reporting consolidation', 'management optimisation']
          },
          {
            items: ['independent board of directors', 'M&A, project financing']
          }
        ]
      },
      {
        tag: '',
        date: '',
        desc: '',
        title: 'Lifestyle сервисы',
        href: '',
        imgSrc: './img/TheAdvantagesSection/1/5.jpg',
        columns: [
          {
            items: ['citizenship & visas', 'education', 'personal security']
          },
          {
            items: ['healthcare', 'events', 'forensic & GR']
          }
        ]
      }
    ]
  },

  {
    title: 'Аналитика и инсайты',
    id: 'Аналитика',
    style: 'white',
    desc: 'Skyfort Analytics is a community-driven think tank and curated media platform that brings together top tier experts from wealth management & private banking industry',
    btnText: 'Читать больше',
    cardStyle: 'top-image',
    cards: [
      {
        tag: 'Report',
        date: 'Январь 2024',
        desc: 'Управление капиталом и инвестиции в условиях глобальной турбулентности. Макротренды, взгляды ведущих инвестдомов',
        title: 'Skyfort Outlook 2024: финансы и геополитика',
        href: '',
        imgSrc: './img/TheAdvantagesSection/2/1.jpg',
        columns: []
      },
      {
        tag: 'Alternatives',
        date: 'Январь 2024',
        desc: 'Анализ возможностей инвестирования в private markets - демократизация и портфельный подход для affluent сегмента',
        title: 'Альтернативные инвестиции: тренды и демократизация',
        href: '',
        imgSrc: './img/TheAdvantagesSection/2/2.jpg',
        columns: []
      },
      {
        tag: 'Real Estate',
        date: 'Февраль 2024',
        desc: 'Исследование рынка доходной недвижимости в дружественных географиях: Тайланд, Индонезия, ОАЭ, Катар, Латинская Америка',
        title: 'Зарубежная недвижимость для российских инвесторов',
        href: '',
        imgSrc: './img/TheAdvantagesSection/2/3.jpg',
        columns: []
      },
      {
        tag: 'Lifestyle',
        date: 'Январь 2024',
        desc: 'Сравнительный анализ возможностей по релокации. Интервью с Дмитрием Халиным, основателем компании Intermark',
        title: 'Второе гражданство и ВНЖ: лучшие решения в 2024 г.',
        href: '',
        imgSrc: './img/TheAdvantagesSection/2/4.jpg',
        columns: []
      },
    ]
  }
]
</script>

<template>
  <section class="advantages">
    <TheAdvantage
      class="advantage"
      v-for="(section, idx) in sections"
      :id="section.id"
      :idx="idx"
      :key="section.title"
      :settings="section"
    />
  </section>
</template>

<style lang="scss">
</style>
