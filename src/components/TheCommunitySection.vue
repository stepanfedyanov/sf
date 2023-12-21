<script setup>
import TheContainer from './TheContainer.vue'
import TheSectionTitle from './TheSectionTitle.vue'
import TheCommunitySlider from './TheCommunitySlider.vue'
import TheArchitecture from './TheArchitecture.vue'
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const staff = [
  {
    img: './img/TheCommunitySection/staff/1.png',
    name: 'Илья Опренко',
    position: 'Co-founder, CEO',
    desc: '16+&nbsp;лет в&nbsp;индустрии инвестиций и&nbsp;управления капиталом (UBS, Tinkoff Private, Deloitte, Sber). Топ-3&nbsp;в рейтинге профессионалов&nbsp;WM &amp;&nbsp;PB',
    href: '#'
  },
  {
    img: './img/TheCommunitySection/staff/2.png',
    name: 'Сергей Ишков',
    position: 'Co-founder, COO/CFO',
    desc: '17+&nbsp;лет в&nbsp;международном консалтинге и&nbsp;финансах (ex&nbsp;управляющий директор BCG в&nbsp;России и&nbsp;Латинской Америке, Oliver Wyman)',
    href: '#'
  },
  {
    img: './img/TheCommunitySection/staff/3.png',
    name: 'Игорь Смирнов',
    position: 'Co-founder, CPO/CMO',
    desc: '20+&nbsp;лет в&nbsp;маркетинге, цифровом продакшене и&nbsp;развитии бизнеса, Венчурный билдер, выпускник Singularity University',
    href: '#'
  },
  {
    img: './img/TheCommunitySection/staff/4.png',
    name: 'Николай Буров',
    position: 'Head of partner Family office',
    desc: '13+&nbsp;лет в&nbsp;индустрии управления капиталом и&nbsp;private banking (UBS, Tinkoff Private). Руководитель семейного офиса',
    href: '#'
  },
  {
    img: './img/TheCommunitySection/staff/5.png',
    name: 'Павел Бережной, CFA',
    position: 'Director of client relations',
    desc: '20+&nbsp;лет опыта работы в&nbsp;сфере управления частным капиталом (Nuveen, Тройка-диалог, ING, Ренессанс Капитал)',
    href: '#'
  },
  {
    img: './img/TheCommunitySection/staff/6.png',
    name: 'Анастасия Воропаева',
    position: 'Senior Investment Advisor',
    desc: '15+&nbsp;лет опыта в&nbsp;качестве частного банкира в&nbsp;Швейцарии по&nbsp;вопросам wealth management, опыт работы в&nbsp;Harbor и&nbsp;UBS Moscow',
    href: '#'
  },
  {
    img: './img/TheCommunitySection/staff/7.png',
    name: 'Дмитрий Золотков',
    position: 'Director of Strategy',
    desc: '12+&nbsp;лет опыта консультирования по&nbsp;вопросам M&amp;A в&nbsp;Big4. финансового структурирования, создания крупных&nbsp;PE фондов (до&nbsp;$2bln)',
    href: '#'
  },
  {
    img: './img/TheCommunitySection/staff/8.png',
    name: 'Максим Вежевич',
    position: 'Director of Strategy',
    desc: '14+&nbsp;лет опыта работы на&nbsp;финансовых рынках, руководства отделом аналитики в&nbsp;Multi-family office, создания инвестиционных стратегий',
    href: '#'
  },
  {
    img: './img/TheCommunitySection/staff/9.png',
    name: 'Тимур Аманов',
    position: 'External Advisor',
    desc: '6+&nbsp;лет опыта работы в&nbsp;сфере управления частным капиталом (UBS, Tinkoff Private, лондонский офис UniCredit)',
    href: '#'
  }
]

const random = (min, max) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const stars = ref([])

const startAppearTime = 1000
const maxStarsCount = 5
let lastHalf = 0

onMounted(() => {
  if (screen && screen.width >= 1024) {
    setInterval(() => {
      stars.value.push({
        x: `${lastHalf === 1 ? random(1, 20) : random(80, 100)}%`,
        y: `${Math.ceil(Math.random() * 100)}%`
      })

      lastHalf = lastHalf === 1 ? 0 : 1

      if (stars.value.length > maxStarsCount) stars.value.shift()
    }, startAppearTime)
  }
})
</script>

<template>
  <section class="community">
    <div class="community__stars">
      <TransitionGroup name="fade">
        <span
          v-for="star in stars"
          :key="`star-${star.x}-${star.y}`"
          class="community__star"
          :style="`left: ${star.x}; top: ${star.y}`"
        />
      </TransitionGroup>
    </div>
    <TheContainer>
      <div class="community__inner">
        <TheSectionTitle class="community__title wow animate__animated animate__fadeInUp">
          Сообщество лидеров
        </TheSectionTitle>
        <p class="community__desc wow animate__animated animate__fadeIn" data-wow-delay=".3s">
          Экосистема Skyfort строится на&nbsp;базе профессионального сообщества и&nbsp;создается совместно с&nbsp;ведущими экспертами индустрии wealth management
        </p>
      </div>
    </TheContainer>
    <TheCommunitySlider
      class="wow animate__animated animate__fadeIn"
      data-wow-delay="0.5s"
      data-wow-duration="1.4s"
      :staff="staff"
    />
    <TheArchitecture />
  </section>
</template>

<style lang="scss">
.community {
  @include adaptive-value('padding-top', 145, 80, 1);
  background: #a5cce0;
  overflow: hidden;
  &__stars {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 35vh;
    z-index: -1;
  }
  &__star {
    height: 10px;
    width: 10px;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
  }
  &__title {
    @include adaptive-value('margin-bottom', 65, 65, 1);
    color: #fff;
    text-align: center;
    @include adaptive-value('letter-spacing', 1, 0.75, 1);
    @include adaptive-value('line-height', 52, 52, 1);
    @include adaptive-value('font-size', 88, 50, 1);
  }
  &__desc {
    @include adaptive-value('font-size', 18, 20, 1);
    @include adaptive-value('line-height', 24, 30, 1);
    @include adaptive-value('letter-spacing', 0.25, 0.55, 1);
    text-align: center;
    max-width: 794px;
    font-weight: 400;
    margin: 0 auto;
    @include adaptive-value('margin-bottom', 108, 70, 1);
    @media (max-width: 490px) {
      max-width: 280px;
      font-weight: 300;
    }
  }
  &__clouds {
    position: absolute;
    top: 900px;
    left: 50%;
    transform: translateX(-50%);
    @include adaptive-value('width', 3638, 800, 1);
    @include adaptive-value('height', 2092, 460, 1);
    height: 2092px;
    max-width: initial;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
