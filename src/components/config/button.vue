<template>
  <div class="config-button">
    <el-form-item>
      <el-button type="primary">{{ buttonText }}</el-button>
    </el-form-item>
  </div>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: '',
    },
  },
}
</script>
