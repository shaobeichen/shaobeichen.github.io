<template>
  <layout-default>
    <div class="vuex-storage">
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
    </div>
  </layout-default>
</template>

<script>
import { sleep } from '@/utils/utils'
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  data() {
    return {
      customer: {
        head: 'https://via.placeholder.com/320x320/999999/ff4400.png&text=user',
        name: '游客',
      },
    }
  },
  computed: {
    ...mapState('user', ['token', 'userInfo']),
    ...mapGetters('user', ['loginStatus']),
    user() {
      const { loginStatus, userInfo, customer } = this
      return loginStatus ? userInfo : customer
    },
  },
  created() {
    this.init()
  },
  methods: {
    ...mapMutations('user', ['setUserInfo']),
    init() {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'))
      this.setUserInfo(userInfo)
    },
    async login() {
      this.$toast('登录中...')
      await sleep(1500)

      const result = this.loginRequest()
      this.setUserInfo(result)
    },
    logout() {
      this.setUserInfo()
    },
    loginRequest() {
      return {
        head: 'https://img1.baidu.com/it/u=2149269757,2708063245&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=509',
        name: '哆啦A梦',
        token: 'dsfar24fas9fjakj124131hedd8au2j13k2jk',
      }
    },
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
