<template>
  <layout-default>
    <div class="content">
      <sh-button class="button" @click="show = true">知识点</sh-button>
      <sh-date-picker />
    </div>
    <sh-dialog v-model="show" title="知识点">
      <div class="name">
        <div>滑动切换</div>
        <div>惯性滑动</div>
        <div>吸附效果</div>
        <div>点击触摸事件冲突</div>
      </div>
    </sh-dialog>
  </layout-default>
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

<style lang="scss" scoped>
.content {
  transform: scale(1.5);
}
</style>
