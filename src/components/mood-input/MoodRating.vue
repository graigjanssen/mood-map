<template>
  <div class="mood-rating">
    <v-btn
      v-for="num in 7"
      :key="num"
      :class="{ selected: selectedMood === num }"
      class="mood-btn"
      :color="colors[num - 1]"
      @click="selectMood(num)">
      {{ num }}
    </v-btn>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue';
const emit = defineEmits(['moodSelected']);
const selectedMood = ref<number | null>(null);
const colors = ['#ac140a', '#9e4c0a', '#967b0a', '#98990a', '#7b960a', '#4c9e0a', '#14ac0a'];
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
    border-radius: 8px;
    min-height: 54px;
    font-size: 1.7rem;
    transition: all .25s;
    &:hover {
      transform: translateY(-4px) scale(103%);
      box-shadow: 0 3px 10px rgba(175, 175, 175, .7);
    }
    &.selected {
      font-weight: bold;
      font-size: 2.3rem;
    }
  }
}
</style>
