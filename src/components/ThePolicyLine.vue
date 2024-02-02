<script setup>
defineProps({
  term: String,
  definition: String,
})
</script>

<template>
  <div class="policyLine">
    <div class="term">
      <span class="top">Термин</span>
      <span class="under">{{term}}</span>
    </div>
    <div class="definition">
      <span class="top">Определение</span>
      <span class="under">{{definition}}</span>
    </div>
  </div>
</template>

<style lang="scss">
  .policyLine:last-child{
    border-bottom: none;
  }
  .policyLine:not(:first-child){
    .top{
      display: none;
    }
  }
  .policyLine{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 0;
    border-bottom: 1px #D7DCDE solid;
    .term{
      width: 37%;
    }
    .definition{
      width: 50%;
    }
    .term,.definition{
      display: flex;
      flex-direction: column;
      gap:10px;
      .top{
        @include adaptive-value('font-size', 16, 13, 1);
        color: #052E3E;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0.32px;
        opacity: 0.5;
      }
      .under{
        color: #052E3E;
        @include adaptive-value('font-size', 18, 14, 1);
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
      }
    }
    .term > .under{
      font-weight: 500;
    }
  }
  @media (max-width: 520px) {
    .policyLine:not(:first-child){
      .top{
        display: flex;
      }
    }
    .policyLine{
      flex-direction: column;
      padding: 16px 0;
      gap:16px;
      .term,.definition{
        width: 90%;
        gap:0;
        .top{
          font-style: normal;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: 0.26px;
        }
        .under{
          font-style: normal;
          font-weight: 400;
          line-height: 130%; /* 20.8px */
          letter-spacing: 0.32px;
        }
      }
    }
  }
</style>