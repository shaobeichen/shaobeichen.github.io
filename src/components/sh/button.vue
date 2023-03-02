<template>
  <button class="button" v-bind="$attrs" @click="buttonClick">
    <slot />
  </button>
</template>

<script>
export default {
  props: {},
  methods: {
    buttonClick(e) {
      this.$emit('click', e)
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
  margin: 0 auto;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  border: 0;
  background: #4187f2;
  color: white;
  cursor: pointer;
  &:hover {
    background: #2a589d;
  }
}
</style>
