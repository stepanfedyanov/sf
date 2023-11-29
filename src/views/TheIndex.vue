<script setup>
import TheJoinSection from '../components/TheJoinSection.vue'
import TheHowSection from '../components/TheHowSection.vue'
import TheIntroSection from '../components/TheIntroSection.vue'
import TheJoinUpsideTitle from '../components/TheJoinUpsideTitle.vue';
import TheAdvantagesSection from '../components/TheAdvantagesSection.vue'
import TheFAQSection from '../components/TheFAQSection.vue'

import { register } from 'swiper/element/bundle'
register();
</script>

<template>
  <main>
    <TheJoinSection />
    <TheJoinUpsideTitle />
    <TheHowSection />
    <TheIntroSection />
    <TheAdvantagesSection />
    <TheFAQSection />
  </main>
</template>
