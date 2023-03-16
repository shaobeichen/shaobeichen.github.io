<template>
  <div class="input-box">
    <label v-if="label" class="label">{{ label }}</label>
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.input-box {
  .label {
    font-size: 12px;
    width: 60px;
    display: inline-block;
    text-align: right;
    padding-right: 10px;
  }
  .input {
    width: 200px;
    height: 30px;
    border-radius: 6px;
    padding: 6px 10px;
    border: 1px solid #e3e8f7;
    font-size: 12px;
  }
}
</style>
