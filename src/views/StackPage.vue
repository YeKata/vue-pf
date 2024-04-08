<template>
  <div class="container stack" :class="store.screenMode ? 'container-night' : 'container-light'">
    <div class="base">
      <div class="content-header">
        <span>My Skill</span>
      </div>
      <div class="content-box">
        <ol class="li-style stick">
          <li>
            <div class="li-box">
              <div class="img-box">
                <div class="js svg-box" />
                &
                <div class="ts svg-box" />
              </div>
              <div
                class="progressbar"
                :class="store.screenMode ? 'progress-night' : 'progress-light'"
              >
                <div class="progress bar1">
                  <div class="percent">
                    <span class="percent-text">70</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="li-box">
              <div class="img-box">
                <div class="vue svg-box" />
                &
                <div class="nuxt svg-box" />
              </div>
              <div
                class="progressbar"
                :class="store.screenMode ? 'progress-night' : 'progress-light'"
              >
                <div class="progress bar2">
                  <div class="percent">
                    <span class="percent-text">60</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="li-box">
              <div class="img-box">
                <div class="html svg-box" />
                &
                <div class="css svg-box" />
              </div>
              <div
                class="progressbar"
                :class="store.screenMode ? 'progress-night' : 'progress-light'"
              >
                <div class="progress bar2">
                  <div class="percent">
                    <span class="percent-text">60</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="li-box">
              <div class="img-box">
                <div class="react svg-box" />
              </div>
              <div
                class="progressbar"
                :class="store.screenMode ? 'progress-night' : 'progress-light'"
              >
                <div class="progress bar3">
                  <div class="percent">
                    <span class="percent-text">40</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="li-box">
              <div class="img-box">
                <div class="mongo svg-box2" />
              </div>
              <div
                class="progressbar"
                :class="store.screenMode ? 'progress-night' : 'progress-light'"
              >
                <div class="progress bar4">
                  <div class="percent">
                    <span class="percent-text">40</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
</script>

<style scoped></style>
