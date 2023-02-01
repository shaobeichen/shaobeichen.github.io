<template>
  <div class="home">
    <button @click="showToast" class="button">显示提示消息</button>
    <toast :show.sync="show" :text="text" />
  </div>
</template>

<script>
import toast from '../components/toast.vue'

export default {
  components: {
    toast,
  },
  data() {
    return {
      show: false,
      text: '',
    }
  },
  methods: {
    showToast() {
      this.show = true
      this.text = '这是一个提示'
    },
  },
}
</script>

<style scoped>
.home {
  width: 100%;
}
.button {
  margin: 10% 40%;
}
</style>
