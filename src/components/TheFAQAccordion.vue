<script setup>
import { onMounted } from 'vue'
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'

onMounted(() => {
  const headers = document.querySelectorAll('.p-accordion-header-link')

  headers.forEach((header) => {
    // const arrow = header.querySelector('svg')
    // arrow.style.opacity = '0'
    // arrow.style.visibility = 'hidden'
    // arrow.style.width = '0px'
    // arrow.style.height = '0px'
    // header.removeChild(arrow)

    const current = document.createElement('span')
    current.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="p-icon p-accordion-toggle-icon" data-pc-section="headericon" width="25" height="24" viewBox="0 0 25 24" fill="none"><path d="M2.09608 16.0772L3.01892 17L12.2969 7.72198L11.3741 6.79914L2.09608 16.0772Z" fill="#052E3E"/><path d="M12.2991 7.721L21.5771 16.999L22.5 16.0762L13.222 6.79816L12.2991 7.721Z" fill="#052E3E"/></svg>';

    header.appendChild(current)
  })
})

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
    <Accordion>
      <AccordionTab :header="item.header" v-for="item in items" :key="item.header">
        <p class="m-0">
          {{ item.body }}
        </p>
      </AccordionTab>
    </Accordion>
  </section>
</template>

<style lang="scss">
.accordion {
  padding: 42px 36px;
  border-radius: 40px;
  background: #f2f3f5;
  .p-accordion-tab + .p-accordion-tab {
    margin-top: 12px;
  }
  .p-toggleable-content {
    line-height: calc(21 / 13);
    max-width: 868px;
  }
  .p-accordion-header-link {
    width: 100%;
    outline: none;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    padding-bottom: 48px;
  }
  .p-accordion-header {
    position: relative;
    font-family: 'Atyp Display';
    font-size: 20px;
    line-height: calc(24 / 20);
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: #000;
      bottom: 24px;
      left: 0;
    }
  }
}
</style>
