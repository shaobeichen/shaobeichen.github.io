<template>
  <lottie-player
    autoplay
    loop
    style="transform: scale(3) translate(300px, 100px)"
  />
</template>
<script setup>
import { onMounted } from 'vue'
import '@lottielab/lottie-player/web'

onMounted(() => {
  const player = document.querySelector('lottie-player')
  player.setAttribute('src', 'https://cdn.lottielab.com/l/8f5sjmB6rfhG1c.json')
  player.toInteractive()
})
</script>
