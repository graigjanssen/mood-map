<template>
  <div class="mood-suggestions">
    <v-btn variant="outlined" color="#ccc" v-for="(suggestion, index) in activeSuggestions" :key="index" @click="emit('suggestionSelected', suggestion)">
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

const suggestionsMap: { [key: string]: string[]} = {
  1: ['Hopeless', 'In Crisis', 'Desperate'],
  2: ['Sad', 'Anxious', 'Angry', 'Lost'],
  3: ['Irritable', 'Tired', 'Lonely', 'Bored', 'Been Better'],
  4: ['Confused', 'Meh', 'Okay', 'Neutral', 'Can\'t Complain'],
  5: ['Mostly Content', 'Calm', 'Centered', 'Mostly Fine'],
  6: ['Energized', 'Optimistic', 'Inspired', 'Motivated'],
  7: ['Joyful', 'Grateful', 'Euphoric', 'Ecstatic'],
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
}
</style>
