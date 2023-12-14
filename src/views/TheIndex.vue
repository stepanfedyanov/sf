<script setup>
import TheJoinSection from '../components/TheJoinSection.vue'
import TheHowSection from '../components/TheHowSection.vue'
import TheIntroSection from '../components/TheIntroSection.vue'
import TheJoinUpsideTitle from '../components/TheJoinUpsideTitle.vue'
import TheAdvantagesSection from '../components/TheAdvantagesSection.vue'
import TheFAQSection from '../components/TheFAQSection.vue'
import TheFooterSection from '../components/TheFooterSection.vue'
import TheCommunitySection from '../components/TheCommunitySection.vue'
import TheLibertySection from '../components/TheLibertySection.vue'
import TheForSection from '../components/TheForSection.vue'

import TheMainLoader from '../components/TheMainLoader.vue'
import { useGlobalStore } from '../stores/global'
import { storeToRefs } from 'pinia'
import ThePopup from '../components/ThePopup.vue'

const globalStore = useGlobalStore()
const { pageIsLoaded } = storeToRefs(globalStore)
</script>

<template>
  <main>
    <ThePopup />
    <TheMainLoader />
    <TheJoinSection v-if="pageIsLoaded" />
    <div v-else class="replacer" />
    <TheJoinUpsideTitle />
    <TheHowSection />
    <TheIntroSection />
    <TheAdvantagesSection />
    <TheCommunitySection />
    <TheForSection />
    <TheLibertySection />
    <TheFAQSection />
    <TheFooterSection />
  </main>
</template>

<style lang="scss">
.replacer {
  width: 100vw;
  min-height: 890px;
  @media (max-width: 500px) {
    min-height: 800px;
  }
}
</style>
