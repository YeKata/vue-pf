<template>
  <div class="container basic" id="basic" @wheel="store.wheel()">
    <div class="center-box">
      <div class="main">
        <div class="home-title">YE SUNGJUN</div>
        <span class="home-line" />
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
