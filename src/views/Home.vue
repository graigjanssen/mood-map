<template>
  <div class="content-container">
    <quick-entry />
  </div>
</template>

<script lang="ts" setup>
import QuickEntry from '@/components/QuickEntry.vue';
</script>

<style lang="scss">
.content-container {
  width: 95%;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .content-container {
    width: 60%;
  }
}
</style>
