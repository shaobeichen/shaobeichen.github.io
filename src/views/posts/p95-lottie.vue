<template>
  <div class="text-center">
    <lottie-player autoplay loop />
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import '@lottielab/lottie-player/web'

onMounted(() => {
  const player = document.querySelector('lottie-player')
  player.setAttribute('src', 'https://cdn.lottielab.com/l/APZgbH75p28vej.json')
  player.toInteractive()
})
</script>
