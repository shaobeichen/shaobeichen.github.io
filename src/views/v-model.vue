<template>
  <div class="v-model">
    <button @click="show = true">显示弹窗</button>
    <v-model-dialog v-model="show" />
    <v-model-dialog :show="show" @change="val => (show = val)" />
  </div>
</template>

<script>
import vModelDialog from '@/components/v-model/v-model-dialog.vue'

export default {
  components: {
    vModelDialog,
  },
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
