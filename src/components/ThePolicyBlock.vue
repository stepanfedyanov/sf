<script setup>
defineProps({
  title: HTMLElement,
  subTitles: [],
})
</script>

<template>
  <div class="policyBlock">
    <div class="title" v-html="title"></div>
    <div class="subTitles">
      <div class="subTitle" v-for="subTitle in subTitles" :key="subTitle" v-html="subTitle">
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.policyBlock{
 display: flex;
  flex-direction: column;
  gap: 24px;
  .title{
    color: #052E3E;
    @include adaptive-value('font-size', 40, 18, 1);
    font-family: "Atyp Display", sans-serif;
    line-height: 46px;
    span{
      display: flex;
      flex-direction: row;
      gap:8px;
    }
  }
  .subTitles{
    display: flex;
    flex-direction: column;
    gap: 24px;
    .subTitle{
      @include adaptive-value('font-size', 18, 14, 1);
      color: #052E3E;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      ul{
        list-style-type: disc;
        margin-left: 30px;
        margin-top: -20px;
        margin-bottom: -15px;
        li{
          padding-left: 5px;
          margin-bottom: 15px;
        }
      }
    }
  }
}
@media (max-width: 426px) {
  .policyBlock:nth-child(5) {
    .subTitles{
      gap: 2px;
    }
  }
  .policyBlock{
    gap: 18px;
    .title{
      line-height: 120%;
      letter-spacing: -0.18px;
    }
    .subTitles{
      .subTitle{
        line-height: 130%;
        letter-spacing: 0.28px;
        ul{
          list-style-type: none;
          margin-left: 0;
          margin-top: -20px;
          margin-bottom: -15px;
          li{
            padding-left: 0;
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
</style>