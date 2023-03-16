<template>
  <layout-default>
    <div class="content">
      <div v-if="loginStatus">
        <sh-scale-image :src="userInfo.head" class="head" />
        <div class="name" v-if="userInfo.name">{{ userInfo.name }}</div>
        <div class="name" v-if="userInfo.token">token: {{ userInfo.token }}</div>
        <sh-button class="button" @click="logout">退出登录</sh-button>
      </div>
      <div v-else>
        <sh-form-item label="账号">
          <sh-input v-model="mobile" />
        </sh-form-item>
        <sh-form-item label="验证码">
          <sh-input v-model="code" />
        </sh-form-item>
        <br />
        <sh-button class="button" @click="login">登录</sh-button>
      </div>
    </div>
  </layout-default>
</template>

<script>
import { cookie, sleep } from '@/utils/index'
import { mapGetters, mapMutations } from 'vuex'

export default {
  data() {
    return {
      mobile: '',
      code: '',
      userInfo: {},
    }
  },
  computed: {
    ...mapGetters('user', ['loginStatus']),
  },
  created() {
    this.init()
  },
  methods: {
    ...mapMutations('user', ['setToken']),
    init() {
      const token = cookie.getItem('token')
      if (token) {
        this.setToken(token)
        this.login()
      }
    },
    async login() {
      this.$toast('登录中...')
      await sleep(1500)

      const result = await this.loginRequest({
        mobile: this.mobile,
        code: this.code,
      })
      if (result) {
        this.userInfo = result
        this.setToken(result.token)
      }
    },
    logout() {
      this.setToken()
    },
    async loginRequest(body) {
      try {
        const result = await this.fetch('https://shaobeichen.com/v1/login', {
          method: 'POST',
          body,
        })
        return result
      } catch (error) {
        console.warn(error)
      }
      this.mobile = ''
      this.code = ''
      return {
        head: 'http://dingyue.ws.126.net/2021/1115/c6fb31e2j00r2lr470026c000hs00voc.jpg',
        name: '萧炎',
        token: 'dsfar24fas9fjakj1241',
      }
    },
    async fetch(url, options) {
      const response = await fetch(url, options)
      return await response.json()
    },
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
