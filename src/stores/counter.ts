import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const udCount = ref(0)
  const modal = ref(false)
  const screenMode = ref(false)
  const pjNum: number = ref(0)

  const changeMode = () => {
    if (screenMode.value == false) {
      screenMode.value = true
    } else {
      screenMode.value = false
    }
  }

  const modalControll = (i: number) => {
    if (modal.value == false) {
      modal.value = true
      pjNum.value = i
    } else {
      modal.value = false
    }
  }

  const setudCount = (num: number) => {
    udCount.value = num
  }

  // const wheel = () => {
  //   const ud = ref()
  //   if (!modal.value) {
  //     addEventListener(
  //       'wheel',
  //       (e: WheelEvent) => {
  //         if (!timer) {
  //           timer = setTimeout(() => {
  //             timer = null
  //             ud.value = e.deltaY > 0 ? 'D' : 'U'
  //             if (ud.value == 'D') {
  //               countUp()
  //               move()
  //               console.log('up')
  //             } else {
  //               countDown()
  //               move()
  //               console.log('down')
  //             }
  //           }, 300)
  //         }
  //       },
  //       { once: true }
  //     )
  //   }
  // }
  return {
    udCount,
    setudCount,
    pjNum,
    modal,
    modalControll,
    screenMode,
    changeMode
  }
})
