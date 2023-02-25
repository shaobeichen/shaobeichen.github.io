<template>
  <transition name="fade">
    <div v-if="show" class="v-model-dialog">
      <div class="mask"></div>

      <div class="container">
        <div class="title">弹窗标题</div>
        <div class="content">这里是一个弹窗内容，可以编写很多文字。</div>
        <button class="button" @click="$emit('change', false)">关闭</button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  model: {
    prop: 'show',
    event: 'change',
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.v-model-dialog {
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999;
    background: black;
    opacity: 0.5;
  }
  .container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    border-radius: 24px;
    background: white;
    border: 1px solid #e3e8f7;
    box-shadow: 0 8px 16px -4px #2c2d300c;
    padding: 1.5rem 2rem;
    max-width: 300px;
    width: 100%;
    text-align: center;
    .title {
      font-size: 26px;
      padding-bottom: 10px;
    }
    .content {
      text-align: left;
      font-size: 20px;
      padding-bottom: 10px;
    }
    .button {
      margin: 0 auto;
      width: 100px;
      height: 40px;
      border-radius: 40px;
      border: 0;
      background: #4187f2;
      color: white;
      cursor: pointer;
      &:hover {
        background: #2a589d;
      }
    }
  }
}
</style>
