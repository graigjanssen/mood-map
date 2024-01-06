<template>
  <div class="quick-entry">
    <h1 class="text-center mb-5">How's it going today?</h1>
    <mood-rating @mood-selected="(num) => (entry.moodRating = num)" />
    <div v-if="entry.moodRating !== null" class="submit-entry">
      <mood-suggestions
        :mood-rating="entry.moodRating"
        @suggestion-selected="
          (description) => (entry.moodDescription = description)
        "
      />
      <v-text-field
        class="mood-description-field"
        label="Additional Description (optional)"
        v-model="entry.moodDescription"
      ></v-text-field>
      <v-btn
        class="cta-btn mb-1"
        size="large"
        color="primary"
        @click="submitQuickEntry"
      >
        Submit
      </v-btn>
      <v-btn class="cta-btn" size="large" variant="outlined" color="#ddd">Enter Full Entry</v-btn>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import MoodRating from '@/components/MoodRating.vue';
import MoodSuggestions from './MoodSuggestions.vue';
import { DailyEntry } from '@/types';

const entry = reactive<DailyEntry>({
  date: new Date(),
  moodRating: null,
  moodDescription: '',
});
const submitQuickEntry = () => {
  console.log('entry to submit: ', entry);
};
</script>

<style lang="scss">
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
