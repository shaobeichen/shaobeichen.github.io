<template>
  <router-link :to="item.link" class="home-link">
    <div class="chapter">{{ item.chapter }}</div>
    <div class="link">
      {{ item.title }}
    </div>
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
  .chapter {
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: #307af6;
  }
  .link {
    display: block;
    font-size: 30px;
    font-weight: bold;
    color: #363636;
  }
}
</style>
