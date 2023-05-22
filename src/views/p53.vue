<template>
  <div class="page-main">
    <br />
    <sh-button @click="nextPage">下一页</sh-button>
    <br />
    <div class="card">
      <div
        v-waterfall="el => updateLayout(el)"
        class="card-item"
        v-for="(item, index) in cardList"
        :key="index"
        :style="{ background: item.color, height: item.height }"
      >
        <p class="text">{{ item.id }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cardData: [
        { id: 1, color: '#76da6e', height: '100px' },
        { id: 2, color: '#57c797', height: '80px' },
        { id: 3, color: '#54cac7', height: '70px' },
        { id: 4, color: '#b16dc7', height: '120px' },
        { id: 5, color: '#dc933d', height: '130px' },
        { id: 6, color: '#b74acf', height: '90px' },
        { id: 7, color: '#d93e5a', height: '80px' },
        { id: 8, color: '#5474dd', height: '100px' },
        { id: 9, color: '#e42526', height: '120px' },
        { id: 10, color: '#e86c92', height: '90px' },
      ],
      cardList: [],
      columnHeights: [0, 0, 0], // 每列元素的高度，本例为3列
    }
  },
  directives: {
    waterfall: {
      inserted(el, binding) {
        const callback = binding.value || {}
        callback(el)
      },
    },
  },
  methods: {
    // 下一页
    nextPage() {
      this.cardList.push(...this.cardData)
    },
    // 更新布局
    updateLayout(item) {
      const column = this.getMinColumnHeights(this.columnHeights)

      const itemTop = this.columnHeights[column]
      const itemLeft = column * item.clientWidth
      item.style.transform = `translate(${itemLeft}px, ${itemTop}px)`

      //  当前高度加上新增的元素高度
      this.columnHeights[column] += item.offsetHeight
    },
    // 找到所有列中高度最小的一列
    getMinColumnHeights(arr) {
      let min = Math.min(...arr)
      return arr.indexOf(min) !== -1 ? arr.indexOf(min) : 0 //  默认第一列
    },
  },
}
</script>
<style lang="scss" scoped>
.page-main {
  min-height: 100vh;
  padding: 0 30px;
  .card {
    position: relative;
    .card-item {
      width: 200px;
      text-align: center;
      color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
</style>
