<script setup>
import TheAdvantage from './TheAdvantage.vue'

const sections = [
  {
    title: 'Products & Services',
    style: 'blue',
    desc: 'Premium curated Skyfort Marketplace offers top quality vetted products and services from our internal WM team, Skyfort Product Lab and third-party providers within our global professional community.',
    btnText: 'Browse more',
    cardStyle: 'bottom-image',
    cards: [
      {
        tag: '',
        date: '',
        desc: '',
        title: 'Wealth Management',
        href: '',
        imgSrc: './img/TheAdvantagesSection/1/1.jpg',
        columns: [
          {
            items: ['financial checkup', 'wealth planning', 'asset aggregation', 'asset management']
          },
          {
            items: ['macro analysis', 'wealth transfer', 'strategic advisory']
          }
        ]
      },
      {
        tag: '',
        date: '',
        desc: '',
        title: 'Financial Infrastructure',
        href: '',
        imgSrc: './img/TheAdvantagesSection/1/2.jpg',
        columns: [
          {
            items: ['bank accounts', 'daily banking', 'broker accounts']
          },
          {
            items: ['settlements on transactions', 'international transfers']
          }
        ]
      },
      {
        tag: '',
        date: '',
        desc: '',
        title: 'Alternative investments',
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
        title: 'Corporate Finance',
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
        title: 'Lifestyle Services',
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
    title: 'Analytics & Insights',
    style: 'white',
    desc: 'Skyfort Analytics is a community-driven think tank and curated media platform that brings together top tier experts from wealth management & private banking industry',
    btnText: 'Read more',
    cardStyle: 'top-image',
    cards: [
      {
        tag: 'Real Estate',
        date: 'October 20, 2023',
        desc: 'Manulife Investment Management co-strategists Macan Nia and Kevin Headland explain why co-strategists Macan Nia and Kevin Headland...',
        title: 'Economy dodges recession, but warning signs remain',
        href: '',
        imgSrc: './img/TheAdvantagesSection/2/1.jpg',
        columns: []
      },
      {
        tag: 'Real Estate',
        date: 'October 20, 2023',
        desc: 'Manulife Investment Management co-strategists Macan Nia and Kevin Headland explain why co-strategists Macan Nia and Kevin Headland...',
        title: 'Economy dodges recession, but warning signs remain',
        href: '',
        imgSrc: './img/TheAdvantagesSection/2/2.jpg',
        columns: []
      },
      {
        tag: 'Real Estate',
        date: 'October 20, 2023',
        desc: 'Manulife Investment Management co-strategists Macan Nia and Kevin Headland explain why co-strategists Macan Nia and Kevin Headland...',
        title: 'Economy dodges recession, but warning signs remain',
        href: '',
        imgSrc: './img/TheAdvantagesSection/2/3.jpg',
        columns: []
      },
      {
        tag: 'Real Estate',
        date: 'October 20, 2023',
        desc: 'Manulife Investment Management co-strategists Macan Nia and Kevin Headland explain why co-strategists Macan Nia and Kevin Headland...',
        title: 'Economy dodges recession, but warning signs remain',
        href: '',
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
      :id="`advantage-${idx}`"
      :idx="idx"
      :key="section.title"
      :settings="section"
    />
  </section>
</template>

<style lang="scss"></style>
