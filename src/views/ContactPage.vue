<template>
  <div class="container contact" :class="store.screenMode ? 'container-night' : 'container-light'">
    <div class="base contact-box">
      <div class="contact-content">
        <div class="contact-header">
          <span>Contact</span>
        </div>
        <div class="contact-list">
          <ul class="ul-column">
            <li>
              <div :class="store.screenMode ? 'border-night' : 'border-light'">E-Mail</div>
              ysj7933@gmail.com
            </li>
            <li>
              <div :class="store.screenMode ? 'border-night' : 'border-light'">GitHub</div>
              https://github.com/YeKata
            </li>
            <li>
              <div :class="store.screenMode ? 'border-night' : 'border-light'">KaKao</div>
              ID: ysj7933
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
</script>

<style scoped></style>
