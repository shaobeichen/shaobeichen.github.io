<template>
  <layout-default>
    <div class="content">
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
    </sh-dialog>
  </layout-default>
</template>

<script>
import { cookie, sleep } from '@/utils/index'
import { mapGetters, mapMutations } from 'vuex'

export default {
  data() {
    return {
      userInfo: {},
      show: false,
    }
  },
  computed: {
    ...mapGetters('user', ['loginStatus']),
  },
  created() {
    this.init()
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (!vm.$store.getters['user/loginStatus'] && !cookie.getItem('token')) {
        vm.$router.replace('/p28-login')
        return
      }
      if (!vm.$store.getters['user/loginStatus'] && cookie.getItem('token')) {
        vm.setToken(cookie.getItem('token'))
      }
    })
  },
  methods: {
    ...mapMutations('user', ['setToken']),
    logout() {
      this.setToken()
      this.$router.replace('/p28-login')
    },
    async init() {
      this.$toast('获取信息中...')
      await sleep(1500)

      const result = await this.fetchUserInfo()

      if (result) {
        this.userInfo = result
      }
    },
    async fetchUserInfo() {
      try {
        const result = await this.fetch('https://shaobeichen.com/v1/userinfo', {
          method: 'GET',
          header: {
            token: cookie.getItem('token'),
          },
        })
        return result
      } catch (error) {
        console.warn(error)
      }
      return {
        head: 'http://dingyue.ws.126.net/2021/1115/c6fb31e2j00r2lr470026c000hs00voc.jpg',
        name: '萧炎',
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
