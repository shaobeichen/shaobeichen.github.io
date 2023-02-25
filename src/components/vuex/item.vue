<template>
  <div class="item">
    <sh-scale-image class="image" :src="product.image" />
    <div class="content">
      <div class="title" v-html="product.title" />
      <div class="price">{{ product.price | price }}</div>
      <sh-stepper :value="totalNumber" class="stepper" @change="numberChange" />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      product: {
        title: 'Apple Watch S8 引领潮流',
        price: 13999,
        image:
          'https://img12.360buyimg.com/n1/jfs/t1/192205/26/1163/205592/609001f5E42716e70/49431fd41932600e.jpg',
      },
    }
  },
  computed: {
    ...mapState('cart', ['totalNumber']),
  },
  methods: {
    ...mapMutations('cart', ['setTotalNumber']),
    numberChange(value) {
      this.setTotalNumber(value)
    },
  },
}
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 320px;
  border-radius: 10px;
  padding: 10px;
  background: #e6f0ff;
  .image {
    width: 100px;
    border-radius: 10px;
    overflow: hidden;
  }
  .content {
    padding-left: 10px;
    .title {
      font-size: 16px;
    }
    .price {
      padding-top: 10px;
      font-size: 16px;
    }
    .stepper {
      padding-top: 10px;
    }
  }
}
</style>
