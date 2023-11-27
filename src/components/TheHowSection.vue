<script setup>
import TheContainer from './TheContainer.vue'
import TheHowItem from './TheHowItem.vue'
const items = [
  {
    desc: 'For mindful private investors',
    title: 'Digital multi-family office',
    img: '/img/TheHowSection/investors.jpg',
    texts: [
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
      'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla',
      'Facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet, cons ectetuer adipisc'
    ]
  },
  {
    desc: 'For next-gen wealth managers',
    title: 'Infrastructure as a service',
    img: '@/../public/img/TheHowSection/managers.jpg',
    texts: [
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
      'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla',
      'Facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet, cons ectetuer adipisc'
    ]
  }
]
</script>

<template>
  <section class="how">
    <TheContainer>
      <div class="how__inner">
        <ul class="how__list">
          <TheHowItem :info="item" class="how__item" v-for="item in items" :key="item.desc" />
        </ul>
      </div>
    </TheContainer>
  </section>
</template>

<style lang="scss">
.how {
  position: relative;
  margin: 100px 0;
  &__item + &__item {
    margin-top: 94px;
  }
}
</style>
