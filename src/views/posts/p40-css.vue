<template>
  <layout-default>
    <div class="content">
      <p class="item">1</p>
      <p class="item">2</p>
      <p class="item">3</p>
      <div class="item">4</div>
    </div>
  </layout-default>
</template>

<style lang="scss" scoped>
.content {
  .item {
    background: rgb(129, 129, 255);
    width: 200px;
    padding: 5px;
    margin: 5px auto;
  }
  // 表示在父元素中的最后一个子元素。
  p.item:last-child {
    background: rgb(255, 121, 121);
  }
  // 表示在父元素中最后一个给定类型的子元素。
  p.item:last-of-type {
    background: rgb(255, 121, 121);
  }
}
</style>
