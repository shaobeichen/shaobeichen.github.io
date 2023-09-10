<template>
  <layout-default>
    <p class="desc" v-html="desc" />
  </layout-default>
</template>

<script>
export default {
  data() {
    return {
      desc: '自2022年底ChatGPT发布以来，互联网上便充斥着对其几乎相同比例的支持和怀疑的论调。不管你是否喜欢它，AI正在逐步进入你的开发组织。即使你不打算开发人工智能产品，也不打算利用AI工具为你编写代码，它仍可能被集成到用于构建、测试和运行源代码的工具和平台中。',
    }
  },
}
</script>

<style lang="scss" scoped>
.desc {
  &::first-letter {
    font-size: 40px;
    float: left;
    padding-right: 6px;
  }
}
</style>
