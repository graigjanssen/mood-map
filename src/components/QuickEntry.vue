<template>
  <div class="quick-entry">
    <h1 class="text-center">How's it going today?</h1>
    <mood-rating
      class="mb-5"
      @mood-selected="(num) => (entry.moodRating = num)" />
    <div
      v-if="entry.moodRating !== null"
      class="submit-entry">
      <mood-suggestions
        class="mb-3"
        :mood-rating="entry.moodRating"
        @suggestion-selected="(desc) => (entry.moodDescription = desc)" />
      <v-text-field
        class="mood-description-field"
        label="Additional Description (optional)"
        v-model="entry.moodDescription"></v-text-field>
      <v-btn
        class="cta-btn mb-1"
        size="large"
        color="primary"
        @click="submitQuickEntry">
        Submit
      </v-btn>
      <v-btn
        class="cta-btn"
        size="large"
        variant="outlined"
        color="#ddd">
        Full Entry</v-btn
      >
      <v-date-picker v-model="entry.date"></v-date-picker>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, defineProps } from 'vue';
import { useAppStore } from '@/store/app';
import MoodRating from '@/components/MoodRating.vue';
import MoodSuggestions from './MoodSuggestions.vue';
import { DailyEntry } from '@/types';

const store = useAppStore();
const props = defineProps({
  today: {
    type: Date,
    required: true,
  },
});

const entry = reactive<DailyEntry>({
  date: props.today,
  moodRating: null,
  moodDescription: '',
});
const submitQuickEntry = () => {
  store.addEntry({ ...entry }); // using ... to clone entry before storing. Otherwise all entries will be the same
};
</script>

<style lang="scss">
.quick-entry {
  h1 {
    margin-bottom: 3rem;
    font-size: 2.5rem;
  }
}
.submit-entry {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}
.mood-description-field {
  width: 65%;
}
.cta-btn {
  width: 90%;
}

@media (min-width: 768px) {
  .quick-entry {
    width: 80%;
  }

  .mood-description-field {
    width: 30%;
  }
  .cta-btn {
    width: 40%;
  }
}
</style>
