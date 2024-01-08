<template>
  <div class="content-container">
    <quick-entry :today="today" />
    <mood-snapshot />
  </div>
</template>

<script lang="ts" setup>
import { useDate } from 'vuetify';
import QuickEntry from '@/components/mood-input/QuickEntry.vue';
import MoodSnapshot from '@/components/mood-history/MoodSnapshot.vue';
const adapter = useDate();
const today = adapter.date(new Date()) as Date;

// When ready for real app flow, import the store and computed, uncomment and add v-if/else
// const isTodayEntered = computed(() => {
//   return store.latestEntry && adapter.isSameDay(store.latestEntry.date, today);
// });
</script>

<style lang="scss">
.content-container {
  width: 95%;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .content-container {
    width: 60%;
  }
}
</style>
