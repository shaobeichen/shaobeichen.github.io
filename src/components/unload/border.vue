<template>
  <div class="unload-border">
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.unload-border {
  padding: 0 0 20px;
  &:first-of-type {
    padding: 20px 0;
  }
  .content {
    border-radius: 24px;
    background: white;
    border: 1px solid #e3e8f7;
    box-shadow: 0 8px 16px -4px #2c2d300c;
    position: relative;
    padding: 1.5rem 2rem;
  }
}
</style>
