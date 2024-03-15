<template>
  <div id="Contact" class="container contact" @wheel="store.wheel()">
    <div class="base contact-box">
      <div class="contact-img" />
      <div class="contact-content">
        <div class="contact-header">
          <span>Contact</span>
        </div>
        <div class="contact-list">
          <ul class="ul-column">
            <li>
              <div class="li-name">E-Mail</div>
              ysj7933@gmail.com
            </li>
            <li>
              <div class="li-name">GitHub</div>
              https://github.com/YeKata
            </li>
            <li>
              <div class="li-name">KaKao</div>
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
