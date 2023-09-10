<template>
  <div class="v-model">
    <button @click="show = true">显示弹窗</button>
    <sh-dialog v-model="show" />
    <!-- <sh-dialog :show="show" @change="val => (show = val)" />  -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
}
</script>

<style scoped lang="scss">
.v-model {
  max-width: 600px;
  margin: 0 auto;
  min-height: 100vh;
  font-size: 20px;
  padding: 20px;
}
</style>
