<template>
  <button class="button" v-bind="$attrs">
    <slot />
  </button>
</template>

<script>
export default {
  props: {},
}
</script>

<style lang="scss" scoped>
.button {
  width: 100px;
  height: 40px;
  border-radius: 20px;
  border: 0;
  background: #4187f2;
  color: white;
  cursor: pointer;
  display: block;
  font-size: 14px;
  &:hover {
    background: #2a589d;
  }
}
</style>
