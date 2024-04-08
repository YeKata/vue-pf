<template>
  <NavigationBar />
  <div class="home-flex">
    <ModalPage v-if="store.modal" />
    <BasicScreen />
    <RouterView v-slot="{ Component }">
      <component :is="Component" />
    </RouterView>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
import BasicScreen from './components/BasicScreen.vue'
import ModalPage from './components/ModalPage.vue'
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
</script>

<style scoped></style>
