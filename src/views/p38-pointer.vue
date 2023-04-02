<template>
  <layout-default>
    <div class="content">
      <div class="container" v-html="content"></div>
      <div class="area"></div>
    </div>
  </layout-default>
</template>

<script>
export default {
  data: function () {
    return {
      content:
        '在过去几十年里，传媒圈活跃了上百年的媒体品牌基本上都在忙着同一件事情：拥抱互联网，然后与搜索引擎巨头扯皮。而现在，具有强大归纳总结能力的AI机器人“从天而降”，使得内容产业与科技巨头的关系更加复杂。在过去一个多月时间里，微软、谷歌都像外界展示了“搜索引擎的新时代”：相较于以往展现一个列表，需要用户点进网站阅读全文，现在AI机器人已经能归纳总结媒体报道的文章，给一段简单但大致符合需求的答案。',
    }
  },
}
</script>

<style lang="scss" scoped>
.content {
  position: relative;
  margin-top: -200px;
  .container {
    width: 240px;
    height: 200px;
    font-size: 16px;
    overflow: auto;
    background: rgba(255, 145, 145, 0.4);
  }
  .area {
    position: absolute;
    top: 50px;
    left: 50px;
    width: 240px;
    height: 200px;
    background: rgba(114, 236, 255, 0.4);
    pointer-events: none;
  }
}
</style>
