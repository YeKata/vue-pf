<template>
  <div
    class="container left-view"
    :class="store.screenMode ? 'container-night' : 'container-light'"
  >
    <div class="left-img" />
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
</script>

<style scoped></style>
