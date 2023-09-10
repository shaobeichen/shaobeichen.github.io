<template>
  <layout-default>
    <div class="content">
      <div>筛选前：{{ oldObj }}</div>
      <div>筛选后：{{ newObj }}</div>
    </div>
  </layout-default>
</template>

<script>
export default {
  data() {
    return {
      oldObj: {},
      newObj: {},
    }
  },
  mounted() {
    const oldObj = {
      a: 1,
      b: 2,
      c: 3,
    }
    this.oldObj = oldObj

    const filterKeys = ['b', 'c']

    const newObj = Object.fromEntries(Object.entries(oldObj).filter(v => filterKeys.includes(v[0])))
    this.newObj = newObj
  },
}
</script>
