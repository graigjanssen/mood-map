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
import { reactive } from 'vue';
import { useDate } from 'vuetify';
import MoodRating from '@/components/MoodRating.vue';
import MoodSuggestions from './MoodSuggestions.vue';
import { DailyEntry } from '@/types';

const adapter = useDate();
const today = new Date().toISOString();

const entry = reactive<DailyEntry>({
  date: adapter.parseISO(today) as string,
  moodRating: null,
  moodDescription: '',
});
const submitQuickEntry = () => {
  console.log('entry to submit: ', entry);
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
