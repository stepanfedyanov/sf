<script setup>
import TheContainer from './TheContainer.vue'
import TheMethods from './TheMethods.vue'
</script>

<template>
  <section class="architecture">
    <TheContainer>
      <div class="architecture__inner">
        <img
          class="architecture__img"
          src="/img/TheCommunitySection/architecture/town.png"
          alt=""
        />
        <h2 class="architecture__title">Ecosystem Architecture</h2>
        <p class="architecture__desc">
          We are building a holistic infrastructure for capital owners and independent professionals
          based on industry’s best practices
        </p>
      </div>
    </TheContainer>
    <TheMethods />
    <TheContainer>
      <div class="community__scroll">
        <span class="community__scroll-text"> Scroll down </span>
        <img class="community__scroll-img" src="/img/TheCommunitySection/arrow.svg" alt="" />
      </div>
    </TheContainer>
  </section>
</template>

<style lang="scss">
.community {
  position: relative;
  z-index: 4;
  &__scroll {
    text-align: center;
    margin-top: 46px;
  }
  &__scroll-text {
    text-align: center;
    font-size: 15px;
    line-height: 1.25;
  }
  &__scroll-img {
    margin: 0 auto;
  }
}
.architecture {
  position: relative;
  padding-top: 276px;
  z-index: 10;
  background: linear-gradient(to bottom, transparent 70%, #fff 95%);
  padding-bottom: 36px;
  &__img {
    position: absolute;
    width: 1440px;
    left: 50%;
    transform: translateX(-50%);
    top: 182px;
    z-index: 5;
  }
  &__title {
    color: #fff;
    text-align: center;
    font-family: 'Atyp Display', sans-serif;
    font-size: 90px;
    line-height: normal;
    font-weight: 300;
    margin-bottom: 491px;
  }
  &__desc {
    text-align: center;
    font-size: 18px;
    line-height: calc(24 / 18);
    letter-spacing: 0.36px;
    max-width: 744px;
    margin: 0 auto;
  }
}
</style>
