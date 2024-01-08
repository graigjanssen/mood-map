<template>
  <div class="mood-suggestions">
    <v-btn
      v-for="(suggestion, index) in activeSuggestions"
      :key="index"
      class="suggestion-btn"
      variant="outlined"
      color="#aaaacc"
      @click="emit('suggestionSelected', suggestion)">
      {{ suggestion }}
    </v-btn>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, computed } from 'vue';

const props = defineProps({
  moodRating: {
    type: Number,
    required: true,
  },
});

const suggestionsMap: { [key: string]: string[] } = {
  1: ['Hopeless', 'In Crisis', 'Desperate', 'Helpless'],
  2: ['Gloomy', 'Worried', 'Angry', 'Struggling', 'Lost', 'Overwhelmed'],
  3: ['Resltess', 'Tired', 'Lonely', 'Bored', 'Been Better', 'Meh', 'Discontent'],
  4: ['Undecided', 'So-so', 'Okay', 'Indifferent', "Can't Complain"],
  5: ['Mostly Content', 'Calm', 'Centered', 'Steady', 'Satisfied'],
  6: ['Energized', 'Optimistic', 'Inspired', 'Motivated', 'Upbeat', 'Enthusiastic'],
  7: ['Joyful', 'Grateful', 'Euphoric', 'Thriving', 'Radiant'],
};

const activeSuggestions = computed(() => suggestionsMap[props.moodRating]);

const emit = defineEmits(['suggestionSelected']);
</script>

<style lang="scss">
.mood-suggestions {
  display: flex;
  gap: 1.3rem;
  justify-content: center;
  flex-wrap: wrap;
  .suggestion-btn {
    border-radius: 30px;
  }
}
</style>
