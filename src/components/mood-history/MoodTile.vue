<template>
  <div class="mood-tile mb-3">
    <div v-if="props.entry">
      <h3>{{ props.entry.date }}</h3>
      <p>{{ props.entry.moodRating }}: {{ props.entry.moodDescription }}</p>
    </div>
    <div v-else>No data</div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, type PropType } from 'vue';
import { DailyEntry } from '@/types';

const props = defineProps({
  entry: Object as PropType<DailyEntry | null>,
});
</script>
