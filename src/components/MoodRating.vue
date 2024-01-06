<template>
  <div class="mood-rating">
    <v-btn
      v-for="num in 7"
      :key="num"
      :class="{ selected: selectedMood === num }"
      class="mood-btn"
      :color="colors[num - 1]"
      @click="selectMood(num)"
    >
      {{ num }}
    </v-btn>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue';
const emit = defineEmits(['moodSelected']);
const selectedMood = ref<number | null>(null);
const colors = [
  '#b40',
  '#951',
  '#862',
  '#773',
  '#682',
  '#591',
  '#4b0'
];
const selectMood = (num: number) => {
  selectedMood.value = num;
  emit('moodSelected', num);
};
</script>
<style lang="scss">
  .mood-rating {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    .mood-btn {
      border-radius: 50%;
      min-height: 52px;
      font-size: 1.6rem;
      &.selected {
        font-weight: bold;
        font-size: 1.9rem;
        box-shadow: 0 2px 10px rgba(255, 255, 255, .7)
      }
    }
  }
</style>
