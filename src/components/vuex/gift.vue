<template>
  <div class="item">
    <!-- <sh-scale-image class="image" :src="product.image" />
    <div class="content">
      <div class="title" v-html="product.title" />
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        title: '赠品 表带 满26000即送',
        image:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.alicdn.com%2Fbao%2Fuploaded%2Fi3%2F2260655210%2FO1CN014i70us1oMEGeZ36yI_%21%212260655210.jpg_300x300q90.jpg&refer=http%3A%2F%2Fimg.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1679931173&t=9c01b813d100a9ea9d9fea1a22a73ee0',
      },
    }
  },
  computed: {},
}
</script>

<style lang="scss" scoped>
.item {
  margin-top: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 320px;
  border-radius: 10px;
  padding: 10px;
  background: #e6f0ff;
  .image {
    width: 50px;
    border-radius: 10px;
    overflow: hidden;
  }
  .content {
    padding-left: 10px;
    .title {
      font-size: 12px;
    }
  }
}
</style>
