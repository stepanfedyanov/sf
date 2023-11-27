<script setup>
import TheContainer from './TheContainer.vue'
import TheSectionTitle from './TheSectionTitle.vue'
import TheVideo from './TheVideo.vue'
import TheVideoSlider from './TheVideoSlider.vue'
</script>

<template>
  <section class="intro">
  <TheContainer>
      <TheSectionTitle
        color="#052E3E"
        class="intro__title wow animate__animated animate__fadeInUp"
        data-wow-duration="1.4s"
        >Watch intro</TheSectionTitle
      >
      <TheVideo class="wow animate__animated animate__fadeIn" />
      <TheVideoSlider class="wow animate__animated animate__fadeIn" data-wow-delay="0.3s" />
    </TheContainer>
  </section>
</template>

<style lang="scss">
.intro {
  padding-bottom: 100px;
  &__title {
    margin-bottom: 40px;
  }
}
</style>
