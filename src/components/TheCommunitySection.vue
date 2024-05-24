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
    position: 'Ко-фаундер и СЕО',
    desc: '17+ лет в индустрии управления капиталом и инвестиционно-банковских услуг в России, Юго-Восточной Азии, Швейцарии и ОАЭ (Tinkoff Private, UBS, Sberbank Private Banking и Deloitte)',
    href: 'https://ru.linkedin.com/in/ilya-oprenko-b6215237'
  },
  {
    img: './img/TheCommunitySection/staff/2.png',
    name: 'Сергей Ишков',
    position: 'Ко-фаундер и исполнительный директор',
    desc: '17+ лет в управленческом консалтинге для банков и финтех компаний в России, СНГ, Европе и Латинской Америке (BCG, Oliver Wyman)',
    href: 'https://pa.linkedin.com/in/sergeyishkov'
  },
  {
    img: './img/TheCommunitySection/staff/3.png',
    name: 'Игорь Смирнов',
    position: 'Ко-фаундер, CMO & CBDO',
    desc: '20+ лет в маркетинге, Digital production и развитии бизнеса. Венчурный билдер и выпускник Singularity University. ',
    href: 'https://uk.linkedin.com/in/insmirnov'
  },
  {
    img: './img/TheCommunitySection/staff/5.png',
    name: 'Павел Бережной',
    position: 'Старший банкир, CFA',
    desc: '20+ лет опыта в планировании и управлении благосостоянием клиентов в ведущих финансовых организациях РФ и США (Nuveen, Тройка-Диалог, ING,  Ренессанс Капитал)',
    href: 'https://ru.linkedin.com/in/павел-бережной-04059088'
  },
  {
    img: './img/TheCommunitySection/staff/10.webp',
    name: 'Андрей Тынков',
    position: 'Старший банкир',
    desc: '15+ лет опыта в индустрии управления капиталом и инвестиционно-банковских услуг. Более 12 лет руководил российскими отделениями Citibank по работе с состоятельными клиентами.',
    href: '',
  },
  {
    img: './img/TheCommunitySection/staff/6.png',
    name: 'Анастасия Воропаева',
    position: 'Старший инвестиционный советник',
    desc: 'Частный банкир с 15+ лет опыта в области управления частным капиталом, разработке и ведению инвестиционных портфелей в России и ОАЭ (UBS, Harbor)',
    href: 'https://www.linkedin.com/in/anastasia-voropaeva-57366846?trk=contact-info'
  },
  {
    img: './img/TheCommunitySection/staff/7.png',
    name: 'Дмитрий Золотков',
    position: 'Директор Skyfort Product Lab',
    desc: '12+ лет опыта консультирования по вопросам M&A, финансового структурирования и создания крупных PE фондов в Big 4 и в крупных российских банках. ',
    href: 'https://ru.linkedin.com/in/zolotkov'
  },
  {
    img: './img/TheCommunitySection/staff/8.png',
    name: 'Максим Вежевич',
    position: 'Инвестиционный директор ',
    desc: '14+ лет опыта инвестиционного консультирования и анализа в международных банках и брокерах, а также мультисемейном офисе и венчурном фонде. Глубокое понимание рынков капитала, торговых алгоритмов и цифровых активов. ',
    href: 'https://www.linkedin.com/in/vezhevich/'
  },
  {
    img: './img/TheCommunitySection/staff/9.png',
    name: 'Тимур Аманов',
    position: 'Директор по развитию клиентских \n отношений',
    desc: '6+ лет опыта работы в сфере управления частным капиталом (UBS, Tinkoff Private, лондонский офис UniCredit)',
    href: 'https://www.linkedin.com/in/timur-amanov-9a72abba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"'
  },
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
  <section class="community" id="team">
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
          Команда
        </TheSectionTitle>
        <p class="community__desc wow animate__animated animate__fadeIn" data-wow-delay=".3s">
          Экосистема Skyfort строится на&nbsp;базе профессионального сообщества и&nbsp;создается
          совместно с&nbsp;ведущими экспертами индустрии wealth management
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
