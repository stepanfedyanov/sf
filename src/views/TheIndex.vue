<script setup>
import TheJoinSection from '../components/TheJoinSection.vue'
import TheHowSection from '../components/TheHowSection.vue'
import TheIntroSection from '../components/TheIntroSection.vue'
import TheAdvantagesSection from '../components/TheAdvantagesSection.vue'
import TheFAQSection from '../components/TheFAQSection.vue'
import TheFooterSection from '../components/TheFooterSection.vue'

import 'swiper/css'
import { register } from 'swiper/element/bundle'
register();
</script>

<template>
  <main>
    <TheJoinSection />
    <TheHowSection />
    <TheIntroSection />
    <TheAdvantagesSection />
    <TheFAQSection />
    <TheFooterSection />
  </main>
</template>
