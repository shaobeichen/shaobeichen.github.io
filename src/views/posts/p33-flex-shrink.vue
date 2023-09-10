<template>
  <layout-default>
    <div class="content">
      <div>560</div>
      <div class="list">
        <div class="item" style="background: #ff7b7b; width: 100px">100</div>
        <div class="item" style="background: #80ff80; width: 100px">100</div>
        <div class="item" style="background: #7f7fff; width: 300px">300</div>
        <div class="item" style="background: #ffff7c; width: 300px">300</div>
      </div>
    </div>
  </layout-default>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  text-align: center;
  background: #c9c9c9;
  .list {
    display: flex;
    .item {
      height: 50px;
    }
  }
}
</style>
