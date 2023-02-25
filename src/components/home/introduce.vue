<template>
  <div class="home-introduce">
    <div>
      <div class="hello">你好，很高兴认识你👋</div>
      <h1 class="title">我是 少北晨</h1>
      <div class="hello">是一名 前端工程师、独立开发者、博主</div>
    </div>
    <footer-deallink />
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.home-introduce {
  border-radius: 24px;
  padding: 1rem 2rem;
  color: white;
  border: 1px solid #e3e8f7;
  box-shadow: 0 8px 16px -4px #2c2d300c;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(150deg, rgba(91, 39, 255, 1) 0%, rgba(0, 212, 255, 1) 100%);
  margin: 20px 0;
  .hello {
    opacity: 0.8;
    line-height: 1.3;
    font-weight: bold;
  }
  .title {
    font-size: 36px;
    font-weight: bold;
    line-height: 1.1;
    margin: 0.5rem 0;
  }
}
</style>
