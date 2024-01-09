<template>
  <div class="mood-snapshot">
    <mood-tile
      v-for="(entry, index) of snapshotEntries"
      :key="index"
      :entry="entry" />
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

const recentDates = Array.from({ length: 15 }, (_, i) =>
  adapter.addDays(today, -(14 - i))
);

const recentEntries = computed(() => entries.slice(-15));

const snapshotEntries = computed(() => {
  return recentDates.map((date) => {
    const entry = recentEntries.value.find((entry) =>
      adapter.isSameDay(date, entry.date)
    );
    return entry || null;
  });
});
</script>

<style lang="scss">
.mood-snapshot {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1px;
  justify-content: center;
  width: 100%;
  max-width: 512px;
  margin: 0 auto;
}
</style>
