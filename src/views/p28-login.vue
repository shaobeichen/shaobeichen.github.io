<template>
  <layout-default>
    <div class="content">
      <sh-form-item label="账号">
        <sh-input v-model="mobile" />
      </sh-form-item>
      <sh-form-item label="验证码">
        <sh-input v-model="code" />
      </sh-form-item>
      <br />
      <sh-button class="button" @click="login">登录</sh-button>
    </div>
  </layout-default>
</template>

<script>
import { cookie, sleep } from '@/utils/index'
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      mobile: '',
      code: '',
    }
  },
  methods: {
    ...mapMutations('user', ['setToken']),
    async login() {
      this.$toast('登录中...')
      await sleep(1500)

      const result = await this.fetchLogin({
        mobile: this.mobile,
        code: this.code,
      })
      if (result) {
        this.setToken(result.token)
        this.$router.push('/p28-login-user')
      }
    },
    async fetchLogin(body) {
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
