<script setup>
import TheAdvantage from './TheAdvantage.vue'

const sections = [
  {
    title: 'Продукты и сервисы',
    id: 'products',
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
            items: ['Wealth Check & Wealth Plan', 'Консультации по точечным инвестиционным идеям']
          },
          {
            items: ['Портфельное управление (Advisory)', 'Подписка на выделенную поддержку']
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
            items: ['Паспорта и ВНЖ', 'Разблокировка активов', 'Структурирование активов']
          },
          {
            items: ['Открытие брокерских и банковских счетов', 'Наследственное планирование']
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
            items: ['Еврооблигации и редомициляция', 'Инвестиции в бизнес', 'Фонды VC/PE']
          },
          {
            items: ['Hedge &</br> Mutual funds', 'Частный долг', 'Структурные продукты', 'Недвижимость']
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
            items: [
              'M&A, аудит<br> и оценка бизнеса,<br>due diligence',
              'независимый<br> совет директоров'
            ]
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
            items: ['Консьерж-сервис', 'Образование за рубежом']
          },
          {
            items: ['Семейный доктор', 'Личная безопасность']
          }
        ]
      }
    ]
  },

  {
    title: 'Аналитика и инсайты',
    id: 'analytics',
    style: 'white',
    desc: 'Исследования, инсайты и экспертные комментарии по инвестициям и управлению капиталом от сообщества ведущих профессионалов-практиков',
    btnText: 'Читать больше',
    cardStyle: 'top-image',
    svg: './icons/tg.svg',
    cards: [
      {
        tag: '',
        date: '',
        desc: 'Первый отчет Skyfort об индустрии управления благосостоянием и актуальных стратегиях для клиентов на 2024 год.',
        title: 'Skyfort Outlook 2024: управление<br/> частным капиталом в условиях<br/> глобальной трансформации',
        href: './files/Skyfort_v5_pages.pdf',
        imgSrc: './img/TheAdvantagesSection/2/1.jpg',
        columns: []
      },
      {
        tag: '',
        date: '',
        desc: 'Статья нашего СЕО Ильи Опренко о вызовах индустрии Private Banking и как на них отвечает Skyfort.',
        title: 'Что не так с индустрией<br/> Private Banking?',
        href: 'https://vc.ru/opinions/967953-chto-ne-tak-s-industriey-private-banking',
        imgSrc: './img/TheAdvantagesSection/2/2.jpg',
        columns: []
      },
      {
        tag: '',
        date: '',
        desc: 'Статья СЕО Skyfort Илья Опренко о геополитических рисках и глобальных конкурирующих группах влияния.',
        title: 'Большая игра 2.0',
        href: 'https://vc.ru/opinions/986922-bolshaya-igra-2-0',
        imgSrc: './img/TheAdvantagesSection/2/3.jpg',
        columns: []
      },
      {
        tag: '',
        date: '',
        desc: 'Авторский канал СЕО Ильи Опренко об индустрии управления капиталом, личных вызовах и источниках вдохновения.',
        title: 'Будни банкира',
        href: 'https://t.me/budnybankira',
        imgSrc: './img/TheAdvantagesSection/2/4.jpg',
        columns: []
      }
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

<style lang="scss"></style>
