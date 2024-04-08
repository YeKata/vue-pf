<template>
  <div class="modal-black">
    <div class="modal-white">
      <div class="modal-img" :style="{ backgroundImage: `url(${link[n].img})` }"></div>
      <div class="modal-text">
        <div class="modal-title">
          <h3>{{ link[n].name }}</h3>
        </div>
        <div class="modal-title">
          <div class="modal-list-img" />
          <h4>Description</h4>
        </div>
        <div class="modal-decription">
          {{ link[n].description }}
        </div>
        <div class="modal-title">
          <div class="modal-list-img" />
          <h4>Skill</h4>
        </div>
        <div class="modal-skill">
          <ul class="modal-list-flex">
            <div v-for="(s, i) in link[n].skill" :key="i">- {{ s }}</div>
          </ul>
        </div>
        <div class="modal-site">
          <div class="modal-title">
            <div class="modal-list-img" />
            <h4>Site</h4>
          </div>
          <div class="modal-decription">
            <a :href="link[n].site">{{ link[n].site }}</a>
          </div>
        </div>
        <div class="modal-site">
          <div class="modal-title">
            <div class="modal-list-img" />
            <h4>github</h4>
          </div>
          <div class="modal-decription">
            <a :href="link[n].github">{{ link[n].github }}</a>
          </div>
        </div>
      </div>
      <b class="modal-close-btn" @click="closeModal()">x</b>
    </div>
    <div class="modal-side" @click="closeModal()" />
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import link from '@/assets/link.json'
const store = useCounterStore()
const n = store.pjNum

const closeModal = () => {
  store.modalControll()
}
</script>

<style scoped></style>
