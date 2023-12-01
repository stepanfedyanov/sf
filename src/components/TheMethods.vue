<script setup>
import TheContainer from './TheContainer.vue'

const cards = [
  {
    img: '/img/TheCommunitySection/methods/main.jpg',
    title: 'Analytics',
    desc: 'Lorem ipsum dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat'
  },
  {
    img: '/img/TheCommunitySection/methods/main.jpg',
    title: 'Strategy',
    desc: 'Lorem ipsum dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat'
  }
]
</script>

<template>
  <section class="methods">
    <TheContainer>
      <div class="methods__inner">
        <ul class="methods__cards">
          <li class="methods__card" v-for="card in cards" :key="card.title">
            <div class="methods__card-img-wrapper">
              <img class="methods__card-img" :src="card.img" alt="" />
            </div>
            <h3 class="methods__title">
              {{ card.title }}
            </h3>
            <p class="methods__desc">
              {{ card.desc }}
            </p>
          </li>
        </ul>
      </div>
    </TheContainer>
  </section>
</template>

<style lang="scss">
.methods {
  margin-top: 78px;
  &__cards {
    display: flex;
  }
  &__card {
    padding: 73px 72px;
    border-radius: 60px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    background: linear-gradient(168deg, #fff -5.86%, rgba(255, 255, 255, 0) 96.08%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
  }
  &__card + &__card {
    margin-left: 40px;
  }
  &__card-img-wrapper {
    text-align: center;
    padding: 48px 70px;
    border-radius: 130.909px;
    background: #fff;
    display: inline-block;
    margin-bottom: 42px;
  }
  &__title {
    margin-bottom: 23px;
    font-family: 'Atyp Display', sans-serif;
    font-size: 40px;
    line-height: normal;
  }
  &__desc {
    font-size: 15px;
    line-height: 1.25;
    max-width: 284px;
    margin: 0 auto;
  }
}
</style>
