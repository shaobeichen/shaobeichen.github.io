<template>
  <div class="scale-image">
    <!-- <img :src="image" style="width: 300px; height: 300px" /> -->
    <sh-scale-image :src="image" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: 'https://img-baofun.zhhainiao.com/fs/70de9ab37f342963b6b144f47b1a7140.jpg',
    }
  },
}
</script>

<style scoped lang="scss">
.scale-image {
  max-width: 600px;
  min-height: 100vh;
  margin: 0 auto;
  font-size: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
