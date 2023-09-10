<template>
  <div class="onbeforeunload">
    <div>
      <unload-border>
        <input type="text" v-model="number" />
        <button @click="save">保存</button>
      </unload-border>

      <unload-border>
        <div><b>情况一</b> 离开当前路由页面去到别的路由页面</div>
        <br />
        <div>使用 beforeRouteLeave 钩子判断一下即可。</div>
        <br />
        <div>如果你在上方输入值，回退时就会触发自定义弹窗。</div>
      </unload-border>

      <unload-border>
        <div><b>情况二</b> 直接关闭标签页或关闭浏览器</div>
        <br />
        <div>使用 window.onbeforeunload 处理。</div>
        <br />
        <div>如果你在上方输入值，关闭标签页时就会触发弹窗。</div>
        <br />
        <b>注意：</b>
        <br />
        <br />
        <p>1. 除非页面已与之交互，否则浏览器可能不会显示提示。</p>
        <br />
        <p>2. 浏览器基于安全原因没有开放returnValue自定义消息内容，避免滥用。</p>
      </unload-border>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: '',
    }
  },
  created() {
    window.onbeforeunload = () => {
      // 要注意刷新也会触发
      console.warn('我发送请求了')
      return ''
    }
  },
  beforeDestroy() {
    window.onbeforeunload = () => {}
  },
  beforeRouteLeave(to, from, next) {
    if (this.number) {
      alert('你还没保存呢！别走！')
      next(false)
    } else {
      next(true)
    }
  },
  methods: {
    save() {
      if (this.number) {
        this.number = ''
        this.$toast('已保存')
      }
    },
  },
}
</script>

<style scoped lang="scss">
.onbeforeunload {
  max-width: 600px;
  margin: 0 auto;
  min-height: 150vh;
  font-size: 20px;
}
</style>
