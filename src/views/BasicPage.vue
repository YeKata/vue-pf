<template>
  <div class="basic container" :class="store.screenMode ? 'container-night' : 'container-light'">
    <div class="center-box">
      <div class="main">
        <div class="home-title">YE SUNGJUN</div>
        <span class="home-line" :class="store.screenMode ? 'home-line-night' : 'home-line-light'" />
        <div class="home-title">PORTFOLIO</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
</script>

<style scoped></style>
