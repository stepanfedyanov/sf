<script setup>
import TheContainer from './TheContainer.vue'
import TheSectionTitle from './TheSectionTitle.vue'
import TheCommunitySlider from './TheCommunitySlider.vue'
import TheArchitecture from './TheArchitecture.vue'
import { onMounted, ref } from 'vue';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const staff = [
  {
    img: '/img/TheCommunitySection/staff/1.jpg',
    name: 'Ilya Oprenko',
    position: 'Founder / CEO',
    desc: 'Dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper tempor egestas diam.',
    href: '#'
  },
  {
    img: '/img/TheCommunitySection/staff/1.jpg',
    name: 'Sergey Ishkov',
    position: 'Co-founder / CFO',
    desc: 'Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper tempor egestas diam. Nisl ut ut ut',
    href: '#'
  },
  {
    img: '/img/TheCommunitySection/staff/1.jpg',
    name: 'Ilya Oprenko',
    position: 'Founder / CEO',
    desc: 'Dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper tempor egestas diam.',
    href: '#'
  },
  {
    img: '/img/TheCommunitySection/staff/1.jpg',
    name: 'Sergey Ishkov',
    position: 'Co-founder / CFO',
    desc: 'Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper tempor egestas diam. Nisl ut ut ut',
    href: '#'
  }
]

const stars = ref([]);

const startAppearTime = 1500;
const maxStarsCount = 20;

onMounted(() => {
  const opacityTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.advantages',
      start: 'bottom bottom',
      end: '+=100%',
      scrub: true,
    }
  });

  opacityTimeline
    .to('.advantages', { opacity: 0 }, '+=0.2')
    .fromTo('.community', { opacity: 0 }, { opacity: 1 }, '+=0.4')

  setInterval(() => {
    stars.value.push({
      x: `${Math.ceil(Math.random() * 100)}%`,
      y: `${Math.ceil(Math.random() * 100)}%`,
    });

    if (stars.value.length > maxStarsCount) stars.value.shift()
  }, startAppearTime);
});
</script>

<template>
  <section class="community">
    <div class="community__stars">
      <TransitionGroup name="fade">
        <span v-for="star in stars" :key="`star-${star.x}-${star.y}`" class="community__star" :style="`left: ${star.x}; top: ${star.y}`" />
      </TransitionGroup>
    </div>
    <TheContainer>
      <div class="community__inner">
        <TheSectionTitle class="community__title" color="#052E3E"
          >Founding Community</TheSectionTitle
        >
        <p class="community__desc">
          Skyfort is being developed in cooperation with top tier wealth managers, private bankers
          and financial advisors from around the globe
        </p>
      </div>
    </TheContainer>
    <TheCommunitySlider :staff="staff" />
    <TheArchitecture />
    <img class="community__clouds" src="/img/TheCommunitySection/clouds.png" alt="" />
  </section>
</template>

<style lang="scss">
.community {
  padding-top: 67px;
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
    margin-bottom: 50px;
    text-align: center;
    letter-spacing: -1.92px;
  }
  &__desc {
    font-size: 18px;
    line-height: calc(24 / 18);
    letter-spacing: 0.36px;
    text-align: center;
    max-width: 794px;
    margin: 0 auto;
    margin-bottom: 108px;
  }
  &__clouds {
    position: absolute;
    top: 900px;
    left: 50%;
    transform: translateX(-50%);
    width: 3638px;
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
