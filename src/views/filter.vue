<template>
  <div class="filter">
    <div>
      <div>价格：{{ price }}</div>
      <div>价格：{{ price | thousand }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 9999999,
    }
  },
  filters: {
    thousand(value) {
      if (!value) return '0'
      const valueStr = String(value)

      const reg = /\d{1,3}(?=(\d{3})+$)/g

      // 正则的意思是 查找后面有3个数字的元素，这个元素要是1到3个数字

      // a(?=b)是查找 b 前面的 a

      // d{1,3} 表示数字出现1-3次，后面紧跟着3个数字才加逗号
      // 拿1234567举例
      // 第一次查找发现1后面有234，符合条件所以替换逗号，是1,234
      // 后面567前面是234也符合条件，所以是1,234,567

      // $&    是与正则相匹配的子串

      return '￥' + valueStr.replace(reg, '$&,')
    },
  },
}
</script>

<style scoped>
.filter {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80px;
}
</style>
