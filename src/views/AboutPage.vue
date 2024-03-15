<template>
  <div class="container about" @wheel="store.wheel()">
    <div class="about-wrap">
      <div class="about-text">
        <div class="about-header">
          <p class="about-title about-border">ABOUT ME</p>
          안녕하세요 프론트엔드 개발자를 희망하는 예성준입니다. 귀한시간 내어주셔서 감사합니다.
        </div>
        <div class="about-main">
          <p class="about-title about-border">EDUCATION</p>
          <div>
            <ul class="about-list">
              <li>2022.09 ~ 2023.02 인프런 Vue.js 및 TypeScript 강의 초급 ~ 완벽 가이드 수료</li>
              <li>
                2021.09 ~ 한국기술교육직업전문학교 (스마트웹&콘텐츠개발)반응형 웹&앱 자바(JAVA)
                프로그래밍 개발자A 과정 수료
              </li>
              <li>2014.02 ~ 2019.01 동원과학기술대학 컴퓨터정보과 졸업</li>
            </ul>
          </div>
        </div>
        <div class="about-side">
          <p class="about-title about-border">CERTIFICATE</p>
          <ul class="about-list">
            <li>정보처리산업기사(2022)</li>
            <li>컴퓨터활용능력 2급(2020)</li>
            <li>직업상담사 2급(2020)</li>
            <li>1종 보통 운전면허(2014)</li>
          </ul>
        </div>
        <div v-if="visible" class="about-visible" @click="changeInfo()">
          <p class="about-title about-border">INVISIBLE</p>
        </div>
        <div v-else class="about-tmi about-visible" @click="changeInfo()">
          <div>
            <p class="about-title about-border">REASON</p>
            컴퓨터 정보과 전공으로 대학을 다니는 동안 C언어, Java, Python 등의 언어도 접해봤지만<br />
            HTML로 마크업을 하고 JavaScript와 CSS를 다루던 시간이 가장 즐거웠기 때문에 프론트엔드
            개발자를 목표로 하게 되었습니다.<br />
          </div>
          <div>
            <p class="about-title about-border">PURPOSE</p>
            '완벽한 코드', '완벽한 UI'는 없다고 생각하기 때문에 더 나은 코드와 UI를 만들기 위해
            계속해서 발전하는 개발자가 되고 싶습니다.<br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
const visible = ref(true)

const changeInfo = () => {
  if (visible.value == true) {
    visible.value = false
  } else {
    visible.value = true
  }
}
</script>

<style scoped></style>
