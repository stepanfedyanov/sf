<script setup>
import TheHeaderMenuItem from './TheHeaderMenuItem.vue'
import { ref, watch, toRefs, computed } from 'vue'
import { gsap } from 'gsap'

const props = defineProps({
    isShow: Boolean,
    items: Array,
})
const { isShow, items } = toRefs(props)

const sortedItems = computed(()=> items.value.slice().sort((a, b) => {
                return b?.products?.length ?? 0 - a?.products?.length ?? 0;
}))


const menuRef = ref(null);

function splitArrayIntoParts(arr, numParts){
  const length = arr.length;
  const partSize = Math.floor(length / numParts);
  const remainder = length % numParts;

  const parts = [];
  let start = 0;

  for (let i = 0; i < numParts; i++) {
    const end = start + partSize + (i < remainder ? 1 : 0);
    parts.push(arr.slice(start, end));
    start = end;
  }
  return parts;
};

let [column1, column2, column3] = splitArrayIntoParts(sortedItems.value, 3);
watch(sortedItems, () => {
    [column1, column2, column3] = splitArrayIntoParts(sortedItems.value, 3);
})

watch(isShow, () => {
    const duration = 0.3;
    if (sortedItems.value.length) {
        if (isShow.value) {
        gsap.to( menuRef.value, {
        opacity: 1,
        display: 'block',
        duration,
        });
      } else {
        gsap.to( menuRef.value, {
        opacity: 0,
        duration,
        });
          gsap.to( menuRef.value, {
          display: 'none',
          delay: duration,
        });
      }
    }
});

</script>
<template>
    <div class="box" ref="menuRef">
      <div class="menu">
        <div class="column">
            <TheHeaderMenuItem 
                v-for="item in column1"
                :key="item.tag.slug"
                :item="item" 
            />
        </div>
        <div class="column">
            <TheHeaderMenuItem  
                v-for="item in column2"
                :key="item.tag.slug"
                :item="item" 
            />
        </div>
        <div class="column">
            <TheHeaderMenuItem
                v-for="item in column3"
                :key="item.tag.slug"
                :item="item" 
            />
        </div>
      </div>
    </div>
</template>

<style lang="scss">
.box {
  padding: 32px 38px;
  border-radius: 34px;
  backdrop-filter: blur(10px);
  background: linear-gradient(
    92.45deg,
    rgba(255, 255, 255, 0.69) -36.65%,
    rgba(255, 255, 255, 0.37) 140.09%
  );

  border: 1px solid #dbecf5;
  display: none;
  opacity: 0;
}

.menu {
  display: flex;
  justify-content: space-between;
  gap: 32px;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
</style>