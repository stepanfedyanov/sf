<script>
export default {
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
}
</script>

<template>
<div class="menu_item">
  <a href="'/category/' + item.category.slug}" class="item_title">
    {item.category.title}
  </a>
    <div class="item_products" v-show="!!item.products?.length">
      
        <a 
        v-for="product in item.products"
        href="'/product/' + product.slug" 
        class="item_product" 
        :key="product.slug">
          {product.title}
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
  // font-family: $articulat;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  // color: $navyBlue;
}

.item_products {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.item_product {
  // font-family: $articulat;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  // color: opacify($color: $navyBlue, $amount: 0.8);
}
</style>
