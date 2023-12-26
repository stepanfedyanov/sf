import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Lenis from '@studio-freight/lenis'
import VueYandexMetrika from 'vue3-yandex-metrika'      

import VueTelInput from 'vue-tel-input';
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueTelInput);
app.use(VueYandexMetrika, {
	id: 95988158,
	router: router,
	env: process.env.NODE_ENV,
  options: {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true
  }
})

app.mount('#app')

// eslint-disable-next-line no-undef
new WOW().init();
import { register } from 'swiper/element/bundle'
register()

// Smooth scroller
// console.log(navigator.userAgent);

if (!(navigator && navigator.userAgent && navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome'))) {
  const lenis = new Lenis()
  window.lenis = lenis;

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
}


