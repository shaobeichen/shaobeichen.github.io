<template>
  <div class="layout-default">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.layout-default {
  max-width: 600px;
  min-height: 100vh;
  margin: 0 auto;
  font-size: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
