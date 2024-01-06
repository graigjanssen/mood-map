<template>
  <div class="quick-entry">
    <h1 class="text-center mb-5">How's it going today?</h1>
    <mood-rating @mood-selected="updateMoodRating" />
  </div>
</template>

<script lang="ts" setup>
import MoodRating from '@/components/MoodRating.vue';

const updateMoodRating = (num: number) => {
  console.log('updateMoodRating: ', num, typeof num);
};
</script>

<style lang="scss">
@media (min-width: 768px) {
  .quick-entry {
    width: 80%;
  }
}
</style>
