<script setup>
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import TheContainer from './TheContainer.vue';
import TheHowItem from './TheHowItem.vue';
import TheHowTitle from './TheHowTitle.vue';
import { onMounted, ref } from 'vue';

const items = [
  {
    desc: 'For mindful private investors',
    title: 'Digital multi-family office',
    img: './img/TheHowSection/investors.jpg',
    texts: [
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
      'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla',
      'Facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet, cons ectetuer adipisc'
    ]
  },
  {
    desc: 'For next-gen wealth managers',
    title: 'Infrastructure as a service',
    img: './img/TheHowSection/managers.jpg',
    texts: [
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
      'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla',
      'Facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet, cons ectetuer adipisc'
    ]
  }
]

const howItemsContainer = ref(null);

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.how',
      start: "top bottom",
      end: "bottom bottom",
      scrub: true,
    }
  });

  // GSAP timeline with labels:
  // 1. Label first, get first element in how sticky and change opacity to 1 on 30% of scroll
  // 2. with this change opacity for photo and title in first how item (10% of scrolling) from 0 to 1
  // 3. after showing the photo and title (5% of scrolling after) show the text
  // 4. Label second, change opactity for first element and get second element in how stickt and change opacity to 1 on 60% of scroll
  // 5. With this animation, change opacity for first how item to 0
  // 6. After a. animation change opacity for photo and title in first how item (10% of scrolling) from 0 to 1
  // 7. After showing the photo and title (5% of scrolling after) show the text

  tl
  .addLabel('first')
    .to('.how__item-info-0', { opacity: 1 }, 'first+=0.5')
    .fromTo('#how-item-0 .how__item-img', { x: '100%', opacity: 0 }, { x: '0%', opacity: 1 }, 'first+=0.3')
    .fromTo('#how-item-0 .how__item-img-text', { opacity: 0 }, { opacity: 1 })
  .addLabel('second')
    .to('.how__item-info-0', { opacity: 0 })
    .to('#how-item-0 .how__item-img', { opacity: 0 }, 'second+=0.1')
    .to('#how-item-0 .how__item-img-text', { opacity: 0 }, 'second+=0.1')
    .to('.how__item-info-1', { opacity: 1 }, 'second+=0.5')
    .fromTo('#how-item-1 .how__item-img', { x: '100%', opacity: 0 }, { x: '0%', opacity: 1 }, 'second+=0.2')
    .fromTo('#how-item-1 .how__item-img-text', { opacity: 0 }, { opacity: 1 })

  const nextBlockTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.how',
      start: 'bottom bottom',
      end: '+=50%',
      scrub: true,
      pin: true
    }
  });

  gsap.set('.how__next-background', { opacity: 0, visibility: 'hidden', background: gsap.getProperty('.intro', 'background') });

  nextBlockTimeline
  .addLabel('nextBlockFadeIn')
    .to('.how__next-background', { opacity: 1, visibility: 'visible' }, 'nextBlockFadeIn')
    .to('.intro', { opacity: 1 }, 'nextBlockFadeIn')

});
</script>

<template>
  <section class="how" ref="howItemsContainer">
    <TheContainer>
      <div class="how__inner">

        <!-- The How Titles: sticky container with 2 title (we will chagne opacity for each item by scrolling) -->
        <TheHowTitle :items="items" />

        <!-- The How Items: 2 items with image and text -->
        <ul class="how__list">
          <TheHowItem :info="item" class="how__item" v-for="(item, idx) in items" :key="item.desc" :id="`how-item-${idx}`" />
        </ul>
      </div>
    </TheContainer>

    <div class="how__next-background" />
  </section>
</template>

<style lang="scss">
.how {
  background: #fff;
  margin: 100px 0;
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
  }
  &__next-background {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999;
  }
}

@media (max-width: 550px) {
  .how {
    &__item + &__item {
      margin-top: 89px;
    }
  }
}
</style>
