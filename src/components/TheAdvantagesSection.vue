<script setup>
import TheAdvantage from './TheAdvantage.vue'

const sections = [
  {
    title: 'Продукты и сервисы',
    id: 'Маркетплейс',
    style: 'blue',
    desc: 'Качественные инвестиционные продукты и&nbsp;сервисы от&nbsp;собственной продуктовой фабрики Skyfort Product Lab и&nbsp;проверенных поставщиков&nbsp;&mdash; резидентов международного сообщества Skyfort',
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
              'диагностика',
              'агрегация активов',
              'аналитика',
              'сопровождение'
            ]
          },
          {
            items: ['планирование', 'портфельное управление', 'наследование']
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
            items: ['открытие счетов', 'структурирование активов', 'международные переводы']
          },
          {
            items: ['разблокировка активов', 'расчеты<br> по&nbsp;сделкам']
          }
        ]
      },
      {
        tag: '',
        date: '',
        desc: '',
        title: 'Альтернативные инвестиции',
        href: '',
        imgSrc: './img/TheAdvantagesSection/1/3.jpg',
        columns: [
          {
            items: ['PE & VC сделки', 'private credit', '<p>прямые</p> <p>инвестиции</p> в бизнес']
          },
          {
            items: ['недвижимость', 'mutual &<br>hedge funds', 'цифровые активы']
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
            items: ['M&A, аудит<br> и оценка бизнеса,<br>due diligence', 'независимый<br> совет директоров']
          },
          {
            items: ['tax & legal', 'акционерные соглашения<br> и отчетность']
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
            items: ['паспорта и ВНЖ', 'безопасность и GR', 'консьерж-сервис']
          },
          {
          items: ['образование', 'медицина и&nbsp;страхование']
          }
        ]
      }
    ]
  },

  {
    title: 'Аналитика и инсайты',
    id: 'Аналитика',
    style: 'white',
    desc: 'Исследования, инсайты и экспертные комментарии по инвестициям и управлению капиталом от сообщества ведущих профессионалов-практиков',
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
