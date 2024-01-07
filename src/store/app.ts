// Utilities
import { defineStore } from 'pinia';
import { DailyEntry } from '@/types';
export const useAppStore = defineStore('app', {
  state: () => ({
    entries: [] as DailyEntry[],
  }),
  getters: {
    latestEntry: (state) => {
      return state.entries.length
        ? state.entries[state.entries.length - 1]
        : null;
    },
  },
  actions: {
    addEntry(entry: DailyEntry) {
      this.entries.push(entry);
    },
    editEntry(updatedEntry: DailyEntry) {
      const index = this.entries.findIndex(
        (entry) => entry.date === updatedEntry.date
      );
      if (index !== -1) {
        this.entries[index] = updatedEntry;
      }
    },
  },
});
