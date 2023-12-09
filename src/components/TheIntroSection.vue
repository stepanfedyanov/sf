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
  max-width: 1920px;
  margin: 0 auto;
  overflow: hidden;
  @include adaptive-value('padding-bottom', 100, 60, 1);
  &__title {
    @include adaptive-value('margin-bottom', 40, 49, 1);
  }
}

@media (max-width: 800px) {
  .intro {
    padding-bottom: 140px;
  }
}

@media (max-width: 500px) {
  .intro {
    &__title {
      max-width: 300px;
      margin-left: auto;
      margin-right: auto;
      line-height: calc(52 / 48);
    }
  }
}
</style>
