<template>
  <div class="toast">
    <button @click="showToast" class="button">显示提示消息</button>
    <!-- <toast :show.sync="show" :text="text" /> -->
  </div>
</template>

<script>
// import toast from '@/components/toast/toast.vue'

export default {
  //   components: {
  //     toast,
  //   },
  //   data() {
  //     return {
  //       show: false,
  //       text: '',
  //     }
  //   },
  methods: {
    showToast() {
      //   this.show = true
      //   this.text = '这是一个提示'

      this.$toast('这是一个命令式调用提示')

      //   this.$toast({
      //     text: '这是一个命令式调用提示',
      //     duration: 3000,
      //   })
    },
  },
}
</script>

<style scoped>
.toast {
  width: 100%;
}
.button {
  margin: 10% 40%;
}
</style>
