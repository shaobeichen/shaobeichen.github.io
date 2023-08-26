<template>
  <div class="container">
    <h1 style="text-align: center; padding: 15px 0 0">英语二单词</h1>
    <van-tabs v-model="active">
      <van-tab :title="item" v-for="(item, index) in letterToUpper" :key="index">
        <van-list finished-text="没有更多了">
          <van-cell v-for="(item, index) in filterList" :key="index">
            <template #title>
              <div style="display: flex">
                <div style="width: 120px; flex-shrink: 0">{{ item[0] }}</div>
                <div>{{ item[1] }}</div>
              </div>
            </template>
          </van-cell>
        </van-list>
      </van-tab>
    </van-tabs>
    <div style="padding-top: 300px"></div>
  </div>
</template>

<script>
import list from '@/utils/english'

export default {
  data() {
    return {
      list,
      active: 0,
      letters: 'abcdefghijklmnopqrsduvwxyz',
    }
  },
  computed: {
    letterToUpper() {
      return this.letters.toUpperCase().split('')
    },
    filterList() {
      const letter = this.letterToUpper[this.active]
      const upper = letter.toLocaleUpperCase()
      const lower = letter.toLocaleLowerCase()
      return this.list.filter(v => v[0].startsWith(upper) || v[0].startsWith(lower))
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  background: white;
  max-width: 400px;
  margin: 0 auto;
}
</style>
