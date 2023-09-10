<template>
  <layout-default>
    <!-- <div class="vuex-storage">
      <div class="content">
        <div v-if="loginStatus && userInfo">
          <sh-scale-image :src="userInfo.head" class="head" />
          <div class="name" v-if="userInfo.name">{{ userInfo.name }}</div>
          <div class="name" v-if="userInfo.token">{{ userInfo.token }}</div>
          <sh-button @click="logout">退出登录</sh-button>
        </div>
        <div v-else>
          <sh-scale-image :src="customer.head" class="head" />
          <div class="name" v-if="customer.name">{{ customer.name }}</div>
          <sh-button v-if="!loginStatus" @click="login">登录</sh-button>
        </div>
      </div>
    </div> -->
  </layout-default>
</template>

<script>
import { sleep } from '@/utils/utils'

export default {
  data() {
    return {
      customer: {
        head: 'https://via.placeholder.com/320x320/999999/ff4400.png&text=user',
        name: '游客',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.vuex-storage {
  transform: scale(1.5);
  .content {
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
  }
}
</style>
