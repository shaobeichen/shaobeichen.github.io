<template>
  <div class="stepper">
    <button class="minus" :class="{ disable: minusDisable }" @click="minus">
      -
    </button>
    <div class="number" v-text="modelValue" />
    <button class="plus" :class="{ disable: plusDisable }" @click="plus">
      +
    </button>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Number,
      default: 1,
    },
    min: {
      type: Number,
      default: 1,
    },
    max: {
      type: Number,
      default: 3,
    },
  },
  data() {
    return {}
  },
  computed: {
    minusDisable() {
      return this.min >= this.modelValue
    },
    plusDisable() {
      return this.max <= this.modelValue
    },
  },
  methods: {
    minus() {
      if (!this.minusDisable) {
        this.$emit('update:model-value', this.modelValue - 1)
      }
    },
    plus() {
      if (!this.plusDisable) {
        this.$emit('update:model-value', this.modelValue + 1)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.stepper {
  display: flex;
  .minus,
  .plus {
    width: 34px;
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    border: 1px solid #e3e8f7;
    border-radius: 4px;
    cursor: pointer;
    background: #fff;
    &.disable {
      cursor: not-allowed;
      background: #e3e8f7;
    }
  }
  .number {
    padding: 0 1px;
    min-width: 40px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
