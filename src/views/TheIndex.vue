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
import ThePopup from '../components/ThePopup.vue'

</script>

<template>
  <main>
    <ThePopup />
    <TheMainLoader />
    <TheJoinSection />
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
