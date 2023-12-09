<script>
export default {
  props: {},
  inject: ['Accordion'],
  data() {
    return {
      index: null
    }
  },
  computed: {
    visible() {
      return this.index == this.Accordion.active
    }
  },
  methods: {
    open() {
      if (this.visible) {
        this.Accordion.active = null
      } else {
        this.Accordion.active = this.index
      }
    },
    start(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    end(el) {
      el.style.height = ''
    }
  },
  created() {
    this.index = this.Accordion.count++
  }
}
</script>

<template>
  <li class="accordion__item">
    <div class="accordion__trigger" :class="{ accordion__trigger_active: visible }" @click="open">
      <!-- This slot will handle the title/header of the accordion and is the part you click on -->
      <slot name="accordion-trigger"></slot>
    </div>

    <transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
    >
      <div class="accordion__content" v-show="visible">
        <ul>
          <!-- This slot will handle all the content that is passed to the accordion -->
          <slot name="accordion-content"></slot>
        </ul>
      </div>
    </transition>
  </li>
</template>

<style lang="scss" scoped>
.accordion__item {
  position: relative;
}

.accordion {
  &__item + &__item {
    @include adaptive-value('margin-top', 24, 14, 1);
  }
}

.accordion__trigger {
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  font-family: 'Atyp Display', sans-serif;
  @include adaptive-value('font-size', 20, 10, 1);
  line-height: calc(24 / 20);
  border-bottom: 1px solid #000;
  @include adaptive-value('padding-bottom', 24, 14, 1);
}

.accordion__item:last-child {
  .accordion__trigger {
    border-bottom: 0px;
    padding-bottom: 0;
  }
}

.accordion__content {
  @include adaptive-value('font-size', 13, 10, 1);
  line-height: calc(21 / 13);
}

.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition:
    height 0.3s ease,
    opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}
</style>
