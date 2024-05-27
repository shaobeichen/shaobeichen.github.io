<template>
  <div class="config-input">
    <el-form-item :label="label">
      <el-input v-model="input" class="input" />
    </el-form-item>
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
  data() {
    return {
      input: '',
    }
  },
}
</script>
