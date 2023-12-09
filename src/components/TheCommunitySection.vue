<script setup>
import TheContainer from './TheContainer.vue'
import TheSectionTitle from './TheSectionTitle.vue'
import TheCommunitySlider from './TheCommunitySlider.vue'
import TheArchitecture from './TheArchitecture.vue'

const staff = [
  {
    img: './img/TheCommunitySection/staff/1.jpg',
    name: 'Ilya Oprenko',
    position: 'Founder / CEO',
    desc: 'Dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper tempor egestas diam.',
    href: '#'
  },
  {
    img: './img/TheCommunitySection/staff/2.jpg',
    name: 'Sergey Ishkov',
    position: 'Co-founder / CFO',
    desc: 'Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper tempor egestas diam. Nisl ut ut ut',
    href: '#'
  },
  {
    img: './img/TheCommunitySection/staff/1.jpg',
    name: 'Ilya Oprenko',
    position: 'Founder / CEO',
    desc: 'Dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper tempor egestas diam.',
    href: '#'
  },
  {
    img: './img/TheCommunitySection/staff/2.jpg',
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
        <TheSectionTitle
          class="community__title wow animate__animated animate__fadeInUp"
          >Founding Community</TheSectionTitle
        >
        <p class="community__desc wow animate__animated animate__fadeIn" data-wow-delay=".3s">
          Skyfort is being developed in cooperation with top tier wealth managers, private bankers
          and financial advisors from around the globe
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
    <img
      class="community__clouds wow animate__animated animate__fadeIn"
      data-wow-delay="0.5s"
      src="/img/TheCommunitySection/clouds.png"
      alt="Clouds"
    />
  </section>
</template>

<style lang="scss">
.community {
  @include adaptive-value('padding-top', 67, 80, 1);
  background: #a5cce0;
  overflow: hidden;
  &__title {
    @include adaptive-value('margin-bottom', 50, 81, 1);
    color: #fff;
    text-align: center;
    letter-spacing: -1.92px;
    line-height: calc(52 / 48);
  }
  &__desc {
    @include adaptive-value('font-size', 18, 20, 1);
    line-height: calc(24 / 18);
    letter-spacing: 0.36px;
    text-align: center;
    max-width: 794px;
    margin: 0 auto;
    @include adaptive-value('margin-bottom', 108, 70, 1);
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
</style>
