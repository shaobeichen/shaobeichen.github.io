<template>
  <div v-if="show" v-html="text" class="toast" />
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: '',
    },
    duration: {
      type: Number,
      default: 1500,
    },
  },
  watch: {
    show(value) {
      if (value) {
        setTimeout(() => {
          this.$emit('update:show', false)
        }, this.duration)
      }
    },
  },
}
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  padding: 10px 20px;
  text-align: center;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  font-size: 20px;
  border-radius: 12px;
}
</style>
