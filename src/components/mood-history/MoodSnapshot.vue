<template>
  <div class="mood-snapshot">
    <div
      v-for="(entry, index) of snapshotEntries"
      :key="index">
      <mood-tile :entry="entry" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useDate } from 'vuetify';
import { useAppStore } from '@/store/app';
import MoodTile from './MoodTile.vue';

const adapter = useDate();
const today = adapter.date(new Date());

const { entries } = useAppStore();

const lastTwoWeeks = Array.from({ length: 14 }, (_, i) =>
  adapter.addDays(today, -(13 - i))
);

const recentEntries = computed(() => entries.slice(-14));

const snapshotEntries = computed(() => {
  return lastTwoWeeks.map((date) => {
    const entry = recentEntries.value.find((entry) =>
      adapter.isSameDay(date, entry.date)
    );
    return entry || null;
  });
});
</script>
