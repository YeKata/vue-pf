<template>
  <div class="fix" :class="store.screenMode ? 'fix-night' : 'fix-light'">
    <div class="header-box">
      <div class="home" @click="goHome()">YSJ</div>
      <div class="nav-bar">
        <ol class="nav">
          <div
            v-for="(lis, index) in list"
            :key="index"
            class="nav-div"
            :class="store.screenMode ? 'night-nav-div' : 'light-nav-div'"
            @mouseover="stateF(index)"
            @mouseleave="stateT(index)"
            @click="movePage(lis.name)"
          >
            <li v-if="lis.state" :class="{ 'nav-selected': index + 1 == store.udCount }">
              {{ lis.name }}
            </li>
            <li v-else :class="{ 'nav-selected': index + 1 == store.udCount }">
              {{ lis.kname }}
            </li>
          </div>
        </ol>
      </div>
      <div
        class="header-menu"
        :class="store.screenMode ? 'header-menu-night' : 'header-menu-light'"
        @click="viewSide()"
        v-if="!side"
      >
        <div class="box-top" />
        <div class="box-bottom" />
      </div>
    </div>
  </div>
  <div class="modal-black" v-if="side">
    <div
      class="side-menubar"
      :class="store.screenMode ? 'side-menubar-night' : 'side-menubar-light'"
    >
      <div
        class="header-menu-x"
        :class="store.screenMode ? 'header-menu-x-night' : 'header-menu-x-light'"
        @click="viewSide()"
      />
      <ol class="side-nav">
        <div
          v-for="(lis, index) in list"
          :key="index"
          class="side-nav-div"
          :class="[store.screenMode ? 'night-nav-div' : 'light-nav-div']"
          @mouseover="stateF(index)"
          @mouseleave="stateT(index)"
          @click="movePage(lis.name)"
        >
          <li v-if="lis.state" :class="{ 'nav-selected': index + 1 == store.udCount }">
            {{ lis.name }}
          </li>
          <li v-else :class="{ 'nav-selected': index + 1 == store.udCount }">
            {{ lis.kname }}
          </li>
        </div>
      </ol>
    </div>
    <div class="modal-side" @click="viewSide()"></div>
  </div>
  <div :class="store.screenMode ? 'mode-night' : 'mode-light'" @click="store.changeMode()" />
</template>

<script setup lang="ts">
import li from '@/assets/list.json'
import router from '@/router'
import { useCounterStore } from '@/stores/counter'
import { reactive, ref } from 'vue'

const store = useCounterStore()
const side = ref(false)
const list = reactive(li)
const goHome = () => {
  router.push('/')
  store.setudCount(0)
}

const viewSide = () => {
  if (side.value == false) {
    side.value = true
  } else {
    side.value = false
  }
}

const stateF = (num: number) => {
  list[num].state = false
}

const stateT = (num: number) => {
  list[num].state = true
}

const movePage = (name: string) => {
  router.push(name)
}
</script>

<style scoped></style>
