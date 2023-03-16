<template>
  <button class="button" v-bind="$attrs" @click="click">
    <slot />
  </button>
</template>

<script>
export default {
  props: {},
  methods: {
    click(e) {
      this.$emit('click', e)
    },
  },
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
