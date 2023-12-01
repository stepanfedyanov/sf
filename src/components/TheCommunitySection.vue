<script setup>
import TheContainer from './TheContainer.vue'
import TheSectionTitle from './TheSectionTitle.vue'
import TheCommunitySlider from './TheCommunitySlider.vue'
import TheArchitecture from './TheArchitecture.vue'

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
</script>

<template>
  <section class="community">
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
</style>
