import { defineStore } from 'pinia'
import { ref } from 'vue';
import Lenis from '@studio-freight/lenis'


function getScrollbarWidth() {

  // Creating invisible container
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll'; // forcing scrollbar to appear
  outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement('div');
  outer.appendChild(inner);

  // Calculating difference between container's full width and the child width
  const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

  // Removing temporary elements from the DOM
  outer.parentNode.removeChild(outer);

  return scrollbarWidth;

}

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useGlobalStore = defineStore('global', () => {
  const pageIsLoaded = ref(false);
  const popupOpened = ref(false);

  const changePageIsLoaded = (state) => {
    pageIsLoaded.value = state;
  };

  const changeModalOpened = (state) => {
    popupOpened.value = state;

    if (state) {
      const header = document.querySelector('.header');
      const popup = document.querySelector('.modal__card');

      window.lenis.stop()
      popup.style.left = '';
      header.style.left = `${Number(window.getComputedStyle(header).left.replace('px', '')) - getScrollbarWidth() / 2}px`;
      document.documentElement.style.paddingRight = `${getScrollbarWidth()}px`;

      document.documentElement.addEventListener('keydown', escape);
    };
    if (!state) {
      const header = document.querySelector('.header');
      const popup = document.querySelector('.modal__card');

      window.lenis.start();
      
      document.documentElement.style.paddingRight = '';
      header.style.left = '';
      popup.style.left = `${getScrollbarWidth() / 2}px`;
      console.log(popup);

      document.documentElement.removeEventListener('keydown', escape);
    };
  }

  const escape = (e) => {
    if (e.keyCode == 27) {
      changeModalOpened(false);
    }
  }

  return {
    changePageIsLoaded,
    changeModalOpened,
    pageIsLoaded,
    popupOpened,
  }
})