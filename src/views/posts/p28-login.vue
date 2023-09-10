<template>
  <layout-default>
    <div class="content">
      <sh-form-item label="账号">
        <sh-input v-model="mobile" />
      </sh-form-item>
      <sh-form-item label="验证码">
        <sh-input v-model="code" />
      </sh-form-item>
    </div>
  </layout-default>
</template>

<script>
import { sleep } from '@/utils/index'

export default {
  data() {
    return {
      mobile: '',
      code: '',
    }
  },
}
</script>

<style lang="scss" scoped>
.content {
  transform: scale(1.5);
  text-align: center;
  .head {
    width: 100px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
  }
  .name {
    font-size: 18px;
  }
  .button {
    margin: 0 auto;
  }
}
</style>
