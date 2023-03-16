<template>
  <input :value="value" @input="input" v-bind="attr" v-on="listener" class="input" />
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  computed: {
    attr() {
      return this.$attr
    },
    listener() {
      return Object.fromEntries(
        Object.entries(this.$listener || {}).filter(([key]) => key !== 'input'),
      )
    },
  },
  methods: {
    input(e) {
      this.$emit('input', e.target.value)
    },
  },
}
</script>

<style lang="scss" scoped>
.input {
  width: 200px;
  height: 30px;
  border-radius: 6px;
  padding: 6px 10px;
  border: 1px solid #e3e8f7;
  font-size: 12px;
}
</style>
