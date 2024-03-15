<template>
  <NavigationBar />
  <RouterView v-slot="{ Component }">
    <transition name="page">
      <component :is="Component" />
    </transition>
  </RouterView>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
</script>

<style scoped></style>
