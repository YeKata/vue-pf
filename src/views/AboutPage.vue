<template>
  <div class="container about" :class="store.screenMode ? 'container-night' : 'container-light'">
    <div class="about-wrap">
      <div class="about-text">
        <div class="about-header">
          <p class="about-title" :class="store.screenMode ? 'border-night' : 'border-light'">
            ABOUT ME
          </p>
          안녕하세요 프론트엔드 개발자를 희망하는 예성준입니다. 귀한시간 내어 제 포트폴리오를
          봐주셔서 감사합니다.
        </div>
        <div class="about-main">
          <p class="about-title" :class="store.screenMode ? 'border-night' : 'border-light'">
            EDUCATION
          </p>
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
          <p class="about-title" :class="store.screenMode ? 'border-night' : 'border-light'">
            CERTIFICATE
          </p>
          <ul class="about-list">
            <li>정보처리산업기사(2022)</li>
            <li>컴퓨터활용능력 2급(2020)</li>
            <li>직업상담사 2급(2020)</li>
            <li>1종 보통 운전면허(2014)</li>
          </ul>
        </div>

        <div class="about-tmi about-visible">
          <div>
            <p class="about-title" :class="store.screenMode ? 'border-night' : 'border-light'">
              REASON
            </p>
            컴퓨터 정보과 전공으로 대학을 다니면서 다양한 프로그래밍 언어를 접했습니다.<br />
            그중 HTML로 마크업을 하고 JavaScript와 CSS를 다루는 과정이 가장 흥미로웠습니다.<br />
            이런 경험을 통해 프론트엔드 개발에 대한 열정과 흥미를 더욱 갖게 되었고,<br />
            프론트엔드 개발자로의 진로를 선택하게 되었습니다.
          </div>
          <div>
            <p class="about-title" :class="store.screenMode ? 'border-night' : 'border-light'">
              PURPOSE
            </p>
            '완벽한 코드' 와 'UI'는 없다고 생각하지만 사용자의 취향과 요구사항에 맞는<br />
            완벽한 코드와 UI 를 만들도록 계속해서 발전하는 개발자가 되겠습니다.<br />
            <p />
          </div>
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
