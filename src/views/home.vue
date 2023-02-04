<template>
  <div class="home">
    <div class="container">
      <home-introduce />
      <div class="list">
        <home-link v-for="(item, index) in list" :key="index" :item="item" />
      </div>
      <copyright />
    </div>
  </div>
</template>

<script>
import homeIntroduce from '@/components/home/home-introduce.vue'
import homeLink from '@/components/home/home-link.vue'
import copyright from '@/components/footer/copyright.vue'

export default {
  components: {
    homeIntroduce,
    homeLink,
    copyright,
  },
  data() {
    return {
      list: [
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
  .container {
    max-width: 40%;
    margin: 0 auto;
  }
}
</style>
