<template>
  <div class="home">
    <div class="container">
      <home-introduce />
      <div class="list">
        <home-link v-for="(item, index) in list" :key="index" :item="item" />
      </div>
    </div>
    <v-footer />
  </div>
</template>

<script>
import homeIntroduce from '@/components/home/home-introduce.vue'
import homeLink from '@/components/home/home-link.vue'
import vFooter from '@/components/footer/v-footer.vue'

export default {
  components: {
    homeIntroduce,
    homeLink,
    vFooter,
  },
  data() {
    return {
      list: [
        {
          link: '/filter',
          chapter: '第三期',
          title: '如何优雅的实现价格千位添加逗号？',
        },
        {
          link: '/toast',
          chapter: '第二期',
          title: '如何实现一个命令式toast组件？',
        },
        {
          link: '/toast',
          chapter: '第一期',
          title: '如何2分钟写一个toast组件？',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .container {
    max-width: 600px;
    padding: 0 20px;
    margin: 0 auto;
  }
}
</style>
