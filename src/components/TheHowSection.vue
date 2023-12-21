<script setup>
import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

import TheContainer from './TheContainer.vue'
import TheHowItem from './TheHowItem.vue'
import TheHowTitle from './TheHowTitle.vue'
import { onMounted, ref } from 'vue'

const items = [
  {
    desc: 'Для финансовых советников и&nbsp;частных инвесторов',
    title: 'Маркетплейс инвестиций и&nbsp;сервисов',
    img: './img/TheHowSection/investors.webp',
    backgroundPosition: '30% -80px',
    texts: [
      'Широкий выбор качественных инвестиционных продуктов и&nbsp;сервисов со&nbsp;всего мира: эксклюзивные сделки, доступ в&nbsp;закрытые фонды, премиальные услуги.',
      'Демократизация альтернативных инвестиций за&nbsp;счет дробления (прямые инвестиции и&nbsp;частное кредитование бизнеса, доходная недвижимость, фонды): входной чек от&nbsp;500&nbsp;тыс. руб.',
      'Полный цикл ведения сделок на&nbsp;платформе: удобный подбор и&nbsp;исполнение за&nbsp;счет развитой финансовой и&nbsp;юридической инфраструктуры в&nbsp;дружественных географиях.'
    ]
  },
  {
    desc: 'Для осознанных владельцев капитала',
    title: 'Цифровой семейный офис',
    img: './img/TheHowSection/managers.webp',
    backgroundPosition: '25% -10px',
    texts: [
      'Единое окно управления благосостоянием: полная картина всех активов, финансовое планирование и&nbsp;ведение портфеля на&nbsp;базе лучших практик глобальных лидеров индустрии.',
      'Персональный управляющий и&nbsp;экспертная поддержка: Skyfort объединяет ведущих управляющих капиталом, финансовых советников и&nbsp;экспертов по&nbsp;всему миру.',
      'Доступность за&nbsp;счет цифровизации: управляйте капиталом так, как это делают ультрабогатые семьи. Без необходимости создавать свой семейный офис, от&nbsp;30&nbsp;тыс. руб.&nbsp;в&nbsp;месяц.'
    ]
  }
]

const howItemsContainer = ref(null)

onMounted(() => {
  if (screen && screen.width >= 1024) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.how',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: true
      }
    })

    // GSAP timeline with labels:
    // 1. Label first, get first element in how sticky and change opacity to 1 on 30% of scroll
    // 2. with this change opacity for photo and title in first how item (10% of scrolling) from 0 to 1
    // 3. after showing the photo and title (5% of scrolling after) show the text
    // 4. Label second, change opactity for first element and get second element in how stickt and change opacity to 1 on 60% of scroll
    // 5. With this animation, change opacity for first how item to 0
    // 6. After a. animation change opacity for photo and title in first how item (10% of scrolling) from 0 to 1
    // 7. After showing the photo and title (5% of scrolling after) show the text

    tl.addLabel('first')
      .to('.how__item-info-0', { opacity: 1 }, 'first+=0.5')
      .fromTo(
        '#how-item-0 .how__item-img',
        { x: '100%', opacity: 0 },
        { x: '0%', opacity: 1 },
        'first+=0.3'
      )
      .fromTo('#how-item-0 .how__item-img-text', { opacity: 0 }, { opacity: 1 })
      .addLabel('second')
      .to('.how__item-info-0', { opacity: 0 })
      .to('#how-item-0 .how__item-img', { opacity: 0 }, 'second+=0.1')
      .to('#how-item-0 .how__item-img-text', { opacity: 0 }, 'second+=0.1')
      .to('.how__item-info-1', { opacity: 1 }, 'second+=0.5')
      .fromTo(
        '#how-item-1 .how__item-img',
        { x: '100%', opacity: 0 },
        { x: '0%', opacity: 1 },
        'second+=0.2'
      )
      .fromTo('#how-item-1 .how__item-img-text', { opacity: 0 }, { opacity: 1 })
  }
})
</script>

<template>
  <section class="how" ref="howItemsContainer" id="Компания">
    <TheContainer>
      <div class="how__inner">
        <!-- The How Titles: sticky container with 2 title (we will chagne opacity for each item by scrolling) -->
        <TheHowTitle :items="items" />

        <!-- The How Items: 2 items with image and text -->
        <ul class="how__list">
          <TheHowItem
            :info="item"
            class="how__item"
            v-for="(item, idx) in items"
            :key="item.desc"
            :id="`how-item-${idx}`"
          />
        </ul>
      </div>
    </TheContainer>

  </section>
</template>

<style lang="scss">
.how {
  background: #f2f3f5;
  padding: 100px 0;
  @media (max-width: 500px) {
    padding: 0;
  }
  min-height: 100vh;
  position: relative;
  &__list {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  &__inner {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  &__item + &__item {
    margin-top: 94px;
    @media (max-width: 500px) {
      margin-top: 0;
    }
  }
}
</style>
