<template>
  <layout-default>
    <!-- <div class="content">
      <div v-if="loginStatus">
        <sh-scale-image :src="userInfo.head" class="head" />
        <div class="name" v-if="userInfo.name">{{ userInfo.name }}</div>
        <sh-button class="button" @click="logout">退出登录</sh-button>
        <br />
        <sh-button class="button" @click="show = true">知识点</sh-button>
      </div>
    </div>
    <sh-dialog v-model="show" title="知识点">
      <div class="name">
        <div>token存储</div>
        <div>登录状态响应式</div>
        <div>路由守卫拦截</div>
        <div>请求拦截</div>
      </div>
    </sh-dialog> -->
  </layout-default>
</template>

<script>
import { cookie, sleep } from '@/utils/index'

export default {
  data() {
    return {
      userInfo: {},
      show: false,
    }
  },
  computed: {},
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
