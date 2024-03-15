import { ref } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'

export const useCounterStore = defineStore('counter', () => {
  const udCount = ref(0)
  const modal = ref(false)
  const pjNum: number = ref(0)
  let timer

  const modalControll = (i: number) => {
    if (modal.value == false) {
      modal.value = true
      pjNum.value = i
    } else {
      modal.value = false
    }
  }

  const countUp = () => {
    if (udCount.value < 4) {
      udCount.value++
    }
  }

  const countDown = () => {
    if (udCount.value > 0) {
      udCount.value--
    }
  }

  const setudCount = (num: number) => {
    udCount.value = num
  }

  const move = () => {
    if (udCount.value == 0) {
      router.push('/')
    } else if (udCount.value == 1) {
      router.push('/About')
    } else if (udCount.value == 2) {
      router.push('/Skill')
    } else if (udCount.value == 3) {
      router.push('/Project')
    } else if (udCount.value == 4) {
      router.push('/Contact')
    }
  }
  const wheel = () => {
    const ud = ref()
    if (!modal.value) {
      addEventListener(
        'wheel',
        (e: WheelEvent) => {
          if (!timer) {
            timer = setTimeout(() => {
              timer = null
              ud.value = e.deltaY > 0 ? 'D' : 'U'
              if (ud.value == 'D') {
                countUp()
                move()
                console.log('up')
              } else {
                countDown()
                move()
                console.log('down')
              }
            }, 300)
          }
        },
        { once: true }
      )
    }
  }
  return {
    udCount,
    countUp,
    countDown,
    move,
    wheel,
    setudCount,
    pjNum,
    modal,
    modalControll
  }
})
