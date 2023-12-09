<script setup>
import TheAccordion from './TheAccordion.vue'
import TheAccordionItem from './TheAccordionItem.vue'

const items = [
  {
    header: 'Question #1',
    body: 'Lorem ipsum dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper tempor egestas diam. Vel placerat eu ullamcorper pellentesque laoreet euismod.Lorem ipsum dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper tempor egestas diam. Vel placerat eu ullamcorper pellentesque laoreet euismod.'
  },
  {
    header: 'Question #2',
    body: 'Lorem ipsum dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper tempor egestas diam. Vel placerat eu ullamcorper pellentesque laoreet euismod.Lorem ipsum dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper tempor egestas diam. Vel placerat eu ullamcorper pellentesque laoreet euismod.'
  },
  {
    header: 'Question #3',
    body: 'Lorem ipsum dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper tempor egestas diam. Vel placerat eu ullamcorper pellentesque laoreet euismod.Lorem ipsum dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper tempor egestas diam. Vel placerat eu ullamcorper pellentesque laoreet euismod.'
  },
  {
    header: 'Question #4',
    body: 'Lorem ipsum dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper tempor egestas diam. Vel placerat eu ullamcorper pellentesque laoreet euismod.Lorem ipsum dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper tempor egestas diam. Vel placerat eu ullamcorper pellentesque laoreet euismod.'
  }
]
</script>

<template>
  <section class="accordion">
    <TheAccordion>
      <TheAccordionItem class="wow animate__animated animate__fadeIn" v-for="(item, idx) in items" :data-wow-delay="parseFloat(`${0.2 * idx}`) + 's'" :key="item.header">
        <template v-slot:accordion-trigger>
          <h3>{{ item.header }}</h3>
          <button class="accordion__arrow-btn">
            <img src="/img/global/arrow.svg" class="accordion__arrow" />
          </button>
        </template>
        <template v-slot:accordion-content>
          <span>
            {{ item.body }}
          </span>
        </template>
      </TheAccordionItem>
    </TheAccordion>
  </section>
</template>

<style lang="scss">
.accordion__content {
  span {
    @include adaptive-value('padding-top', 24, 14, 1);
    @include adaptive-value('padding-bottom', 24, 14, 1);
    display: inline-block;
    @media (max-width: 800px) {
      padding-bottom: 0;
    }
  }
}
.accordion {
  @include adaptive-value('padding-top', 42, 32, 1);
  @include adaptive-value('padding-bottom', 42, 32, 1);
  @include adaptive-value('padding-left', 36, 27, 1);
  @include adaptive-value('padding-right', 36, 27, 1);
  border-radius: 40px;
  background: #f2f3f5;
  &__arrow-btn {
    background: transparent;
    outline: none;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }
  &__arrow {
    transform: rotate(90deg);
    transition: 0.3s;
    @include adaptive-value('width', 24, 16, 1);
  }
  &__trigger_active {
    .accordion__arrow {
      transform: rotate(270deg);
    }
  }
}

@media (max-width: 800px) {
  .faq {
    &__title {
      text-align: center;
    }
  }
}
</style>
