<template>
  <div class="port container" :class="store.screenMode ? 'container-night' : 'container-light'">
    <div class="port-container">
      <div class="about-title port-title">Project</div>
      <div class="port-content">
        <div class="port-thum-wrap">
          <div
            v-for="(slide, i) in link"
            :key="i"
            class="port-thum"
            @mouseover="changeModal(i)"
            @mouseleave="changeModal(i)"
          >
            <div class="img-slide" @click="openModal(i)">
              <img :src="slide.img" :class="{ 'black-img': modal[i] }" class="slide-img" />
              <transition name="modal">
                <div class="port-modal" v-if="modal[i]">{{ slide.name }}</div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import link from '@/assets/link.json'
import { useCounterStore } from '@/stores/counter'
import { reactive } from 'vue'

const store = useCounterStore()
const modal = reactive(Array(link.length).fill(false))

const changeModal = (i: number) => {
  if (modal[i] == false) {
    modal[i] = true
  } else {
    modal[i] = false
  }
}

const openModal = (i: number) => {
  store.modalControll(i)
}
</script>

<style scoped></style>
