<template>
  <router-link :to="item.link" class="home-link">
    <div class="chapter-box">
      <div class="chapter" v-html="item.chapter" />
      <div class="tags">
        <div class="tags-item" v-for="(item, index) in item.tags" :key="index" v-html="item" />
      </div>
    </div>
    <div class="link" v-html="item.title" />
  </router-link>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style scoped lang="scss">
.home-link {
  display: block;
  margin: 20px 0;
  border-radius: 24px;
  background: white;
  border: 1px solid #e3e8f7;
  box-shadow: 0 8px 16px -4px #2c2d300c;
  position: relative;
  padding: 1rem 2rem;
  &:hover {
    background: #e3e8f7;
  }
  .chapter-box {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 0.5rem;
    .chapter {
      margin-right: 0.5rem;
      font-weight: bold;
      font-size: 1.2rem;
      color: #307af6;
    }
    .tags {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .tags-item {
        color: #307af6;
        background: #e0e5fb;
        border-radius: 20px;
        padding: 3px 8px;
        font-size: 12px;
        margin-right: 0.5rem;
      }
    }
  }
  .link {
    display: block;
    font-size: 30px;
    font-weight: bold;
    color: #363636;
  }
}
</style>
