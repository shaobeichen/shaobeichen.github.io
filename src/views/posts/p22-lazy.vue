<template>
  <layout-default>
    <div class="content">
      <div>图片在下面</div>
      <div style="margin-bottom: 100vh">⬇️</div>
      <sh-scale-image :src="image" />
      <sh-scale-image :src="image2" />
    </div>
  </layout-default>
</template>

<script>
export default {
  data() {
    return {
      image: 'https://www.qmbk.com/jingyan/UploadFiles_2374/202001/2020011614325951.jpg',
      image2: 'https://img-baofun.zhhainiao.com/fs/70de9ab37f342963b6b144f47b1a7140.jpg',
    }
  },
}
</script>

<style lang="scss" scoped>
.content {
  min-height: 200vh;
  text-align: center;
  font-size: 40px;
}
</style>
