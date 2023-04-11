<template>
  <layout-default>
    <div class="content">
      <div class="item">
        <sh-scale-image class="image" :src="product.image" />
        <div class="content">
          <div class="title" v-html="product.title" />
          <div class="desc">
            <div
              class="desc-item"
              v-for="(item, index) in product.categories.split(splitSymbol)"
              :key="index"
            >
              {{ item }}
            </div>
          </div>
          <div class="price">{{ product.price | price }}</div>
        </div>
      </div>
      <br />
      <div class="item">
        <sh-scale-image class="image" :src="product.image" />
        <div class="content">
          <div class="title" v-html="product.title" />
          <div class="desc">
            <div
              class="desc-item"
              v-for="(item, index) in product.categories.split(splitSymbol)"
              :key="index"
            >
              {{ item }}
            </div>
          </div>
          <div class="price">{{ product.price | price }}</div>
        </div>
      </div>
      <br />
      <sh-button @click="change" style="margin: 0 auto">切换</sh-button>
    </div>
  </layout-default>
</template>

<script>
export default {
  data() {
    return {
      product: {
        title: '春季新款连帽卫衣',
        price: 1000,
        categories: '服饰⎸上衣⎸女款⎸春季⎸卫衣',
        image:
          'https://cdn7-static.tshe.com/uploads/images/TopicImage/1631510110757401000021d535f06a190.jpg',
      },
      isTrue: false,
    }
  },
  computed: {
    splitSymbol() {
      return this.isTrue ? '⎸' : '|'
    },
  },
  methods: {
    change() {
      this.isTrue = !this.isTrue
    },
  },
}
</script>

<style lang="scss" scoped>
.content {
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
        font-size: 18px;
      }
      .desc {
        padding-top: 6px;
        font-size: 12px;
        color: rgba($color: #000000, $alpha: 0.6);
        display: flex;
        .desc-item {
          padding-right: 4px;
        }
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
}
</style>
