<template>
  <div>{{ isOpen }}</div>
  <LottieAnimation
    :animation-data="AnimatedToggle"
    :auto-play="false"
    :loop="false"
    :speed="1"
    ref="anim"
    @click="buttonClicked"
  />
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { LottieAnimation } from 'lottie-web-vue'
import AnimatedToggle from '@/utils/mocks/AnimatedToggle.json'

let anim = ref()
let isOpen = ref(false)

const buttonClicked = () => {
  if (!isOpen.value) {
    anim.value.stop()
    anim.value.play()
    setTimeout(() => {
      anim.value.pause()
    }, 400)
    isOpen.value = true
  } else {
    anim.value.goToAndPlay(100, true)
    isOpen.value = false
  }
}
</script>
