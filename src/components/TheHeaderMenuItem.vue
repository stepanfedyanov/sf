<script>
export default {
  data() {
    return {
      isMfo: ''
    }
  },
    props: {
        item: {
            type: Object,
            required: true,
        },
  },
  created() {
    this.isMfo = this.item.tag.isMfo ? '/mfo' : '/'
  },
}
</script>

<template>
<div class="menu_item">
  <a :href="'https://app.skyfort.capital' + isMfo + '?tag=' + item.tag.slug" class="item_title">
    {{item.tag.title}}
  </a>
    <div class="item_products" v-show="!!item.products?.length">
        <a 
        v-for="product in item.products"
        :href="'https://app.skyfort.capital/product/' + product.slug" 
        class="item_product" 
        :key="product.slug">
          {{product.title}}
        </a>
    </div>
</div>
</template>

<style lang="scss">
.menu_item {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 336px;
  width: 100%;
}

.item_title {
  font-family: "Articulat CF";
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: rgb(5, 46, 62);
  cursor: pointer;
}

.item_products {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.item_product {
  font-family: "Articulat CF";
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: opacify($color: rgb(5, 46, 62), $amount: 0.8);
}
</style>
