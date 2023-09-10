<template>
  <layout-default>
    <div class="all">
      <div>接口一</div>
      <div>{{ title }}</div>
      <br />
      <div>接口二</div>
      <div>{{ title2 }}</div>
    </div>
  </layout-default>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      title2: '',
      img: '',
    }
  },
  async created() {
    const [result, result2] = await Promise.all(
      [
        this.fetch('https://api.uomg.com/api/rand.qinghua'),
        this.fetch('https://api.uomg.co/api/comments.163'),
      ].map(v => v.catch(e => console.log(e))),
    )

    // const result = await this.fetch('https://api.uomg.com/api/rand.qinghua')
    this.title = result.content

    // const result2 = await this.fetch('https://api.uomg.com/api/comments.163')
    this.title2 = result2.data.content

    console.warn('结果：', result, result2)
  },
  methods: {
    async fetch(url) {
      const response = await fetch(url)
      return await response.json()
    },
  },
}
</script>

<style lang="scss" scoped>
.all {
  text-align: center;
}
</style>
