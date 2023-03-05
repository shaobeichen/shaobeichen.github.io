<template>
  <layout-default>
    <div class="dialog">
      <sh-button @click="buttonClick">显示弹窗</sh-button>
      <div class="content" v-html="content" />
    </div>
    <sh-dialog v-model="show" />
  </layout-default>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      content: `
      今日“狂飙反派戏 香港副导演”登上微博热搜。据网友与陈伟雄的对话，《狂飙》中反派戏份的90%都是香港副导演陈伟雄拍摄的，观众直呼怪不得剧中港味如此浓厚。更令人惊讶的是，这是陈伟雄本人第一次拍摄电视剧作品，他还参与过《无间道》系列的电影拍摄。

《狂飙》讲述了京海市一线刑警安欣，在与黑恶势力的斗争中，不断遭到保护伞的打击，始终无法将犯罪分子绳之以法。全国政法队伍教育整顿工作开展后，临江省派出指导组入驻京海，联合公检法司各部门，清除了政法队伍内部的腐败分子，粉碎了黑恶势力的保护伞，一举铲除了盘踞京海多年的强盛集团。

陈伟雄，4月10日出生于香港，执行导演1990年加入嘉禾电影制片厂工作，从事电影工作超过二十年，执导院线电影达一百多部。代表作品有《无间道Ⅰ》、《上海滩马永贞》等。

《狂飙》除了带火了主角，还带火了拍摄地-广东江门。广东省江门市长堤历史文化街区，不少人千里迢迢来到江门打卡。长堤历史文化街区位于该市莲江河畔，是江门市老商业区和历史街区。包括墟顶老街、启明里等。街区内拥有复古气息的民居旧宅、富含文化底蕴的街景、极具华侨特色的骑楼，传统与现代元素相互融合，成为了江门市一道靓丽的名片。`,
    }
  },

  methods: {
    buttonClick() {
      this.show = true
    },
  },
}
</script>

<style lang="scss" scoped>
.dialog {
  min-height: 120vh;
  .content {
    white-space: pre-line;
  }
}
</style>
