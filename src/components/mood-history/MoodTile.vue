<template>
  <div
    v-if="props.entry"
    class="tile tile--mood"
    :style="{ backgroundColor: ratingColors[props.entry.moodRating] }">
    <h3>{{ props.entry.date }}</h3>
    <p>{{ props.entry.moodRating }}: {{ props.entry.moodDescription }}</p>
  </div>
  <div
    v-else
    class="tile tile--empty">
    <p class="text-center">No Data</p>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, type PropType } from 'vue';
import { ratingColors } from '@/utilities/constants';
import { DailyEntry } from '@/types';

const props = defineProps({
  entry: Object as PropType<DailyEntry | null>,
});
</script>

<style lang="scss">
.tile {
  aspect-ratio: 1 / 1;
  overflow: hidden;
  &--empty {
    background-color: #2c2c2c;
    color: #9a9a9a;
  }
}
</style>
