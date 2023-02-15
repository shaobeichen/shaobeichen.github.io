<template>
  <div class="deallink">
    <a :href="item.link" target="_blank" class="list" v-for="(item, index) in list" :key="index">
      <div class="item">
        <img :src="item.icon" class="item-icon" />
      </div>
    </a>
  </div>
</template>

<script>
import bilibili from '@/assets/image/bilibili.png'
import douyin from '@/assets/image/douyin.png'

export default {
  data() {
    return {
      list: [
        {
          icon: douyin,
          link: 'https://www.douyin.com/user/MS4wLjABAAAAGFwkGb3S8UPIB7FhtK7K6n-nCFnPbTTth4HZ2I6Wbv0',
        },
        {
          icon: bilibili,
          link: 'https://space.bilibili.com/13310258',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.deallink {
  padding: 20px 0;
  display: flex;
  justify-content: center;
  .list {
    display: block;
    .item {
      margin-left: 6px;
      .item-icon {
        width: 40px;
        height: 40px;
        background: white;
        border-radius: 50%;
      }
    }
  }
}
</style>
