<template>
  <layout-default>
    <div class="storage">
      <div class="value">{{ value }}</div>
      <br />
      <sh-countdown :second="second" />
      <br />
      <sh-button @click="save">存储一个值</sh-button>
      <br />
      <sh-button @click="get">读取一个值</sh-button>
    </div>
  </layout-default>
</template>

<script>
import { storage } from '@/utils/index'

export default {
  data() {
    return {
      second: 0,
      value: '',
    }
  },
  methods: {
    save() {
      const second = 5
      this.second = second
      storage.setItem('name', '小明', second)
    },
    get() {
      this.value = storage.getItem('name')
    },
  },
}
</script>

<style lang="scss" scoped>
.storage {
  transform: scale(1.5);
  text-align: center;
  .value {
    border: 1px dashed black;
    min-width: 100px;
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
