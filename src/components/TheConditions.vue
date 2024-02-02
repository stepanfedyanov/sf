<script setup>
import TheContainer from './TheContainer.vue'
import TheHeader from './TheHeader.vue'
</script>

<template>
  <TheHeader/>
  <div class="information-bg"></div>
  <TheContainer class="information">
    <h1 class="information__title">Условия обслуживания</h1>
    <div class="cap">
      <span>Раздел находится в процессе разработки</span>
    </div>
  </TheContainer>
</template>

<style lang="scss">
.information{
  .cap{
    min-height: 578px;
    border-radius: 40px;
    background: linear-gradient(180deg, #FFF 0%, #FFF 100%);
    display: flex;
    justify-content: center;
    span{
      @include adaptive-value('font-size', 18, 13, 1);
      color: #052E3E;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 133.333% */
      letter-spacing: 0.36px;
      opacity: 0.5;
      margin-top: 116px;
    }
  }
}
</style>
