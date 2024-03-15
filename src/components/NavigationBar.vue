<template>
  <div class="fix">
    <div class="header-box">
      <div class="home" @click="goHome()">YSJ_PF</div>
      <div class="nav-bar">
        <ol class="nav">
          <div
            v-for="(lis, index) in list"
            :key="index"
            class="nav-div"
            @mouseover="stateF(index)"
            @mouseleave="stateT(index)"
            @click="movePage(lis.name)"
          >
            <li v-if="lis.state">
              {{ lis.name }}
            </li>
            <li v-else>
              {{ lis.kname }}
            </li>
          </div>
        </ol>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import li from '@/assets/list.json'
import router from '@/router'
import { useCounterStore } from '@/stores/counter'
import { reactive } from 'vue'

const store = useCounterStore()

const goHome = () => {
  router.push('/')
}

const list = reactive(li)

const stateF = (num: number) => {
  list[num].state = false
}

const stateT = (num: number) => {
  list[num].state = true
}

const movePage = (name: string) => {
  if (name == 'Home') {
    goHome()
    store.setudCount(0)
  } else {
    router.push(name)
    if (name == 'About') {
      store.setudCount(1)
    } else if (name == 'Skill') {
      store.setudCount(2)
    } else if (name == 'Project') {
      store.setudCount(3)
    } else if (name == 'Contact') {
      store.setudCount(4)
    }
  }
}
</script>

<style scoped></style>
