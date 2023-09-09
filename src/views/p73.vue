<template>
  <div>
    <div v-html="content" class="content" />
    <img v-expo :src="src" class="image" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: `
        ● 活动期间，限定5星武器「弓·最初的大魔术」「弓·若水」的祈愿获取概率将大幅提升！<br />
        ● 活动期间，4星武器「单手剑·祭礼剑」「双手剑·西风大剑」「长柄武器·西风长枪」「法器·祭礼残章」「弓·祭礼弓」的祈愿获取概率将大幅提升！<br />
        ● 活动期间，可使用「神铸定轨」对本期5星UP武器「弓·最初的大魔术」或「弓·若水」进行定轨，更多「神铸定轨」详细规则可点击祈愿界面左下角【详情】按钮进行查询。<br />
        ※ 以上武器中，限定武器不会进入「奔行世间」常驻祈愿。<br />
        <br />
        ※ 更多祈愿信息可点击祈愿界面左下角【详情】按钮进行查询。<br />
        <br />
        关于《原神》<br />
        <br />
        《原神》是由米哈游自研的一款开放世界冒险RPG。你将在游戏中探索一个被称作「提瓦特」的幻想世界。
        在这广阔的世界中，你可以踏遍七国，邂逅性格各异、能力独特的同伴，与他们一同对抗强敌，踏上寻回血亲之路；也可以不带目的地漫游，沉浸在充满生机的世界里，让好奇心驱使自己发掘各个角落的奥秘……直到你与分离的血亲重聚，在终点见证一切事物的沉淀。《原神》现已登录PS平台、iOS、Android、PC平台，并支持移动端、PC端以及PS平台数据互通，旅行者可自由选择平台和设备开启冒险。
        `,
      src: 'https://webstatic.mihoyo.com/upload/contentweb/2022/06/30/300df2aed5060579f08d7db601d8710d_118206614584398576.png',
    }
  },
  directives: {
    expo: {
      bind(el) {
        const observer = new IntersectionObserver(
          entries => {
            if (entries[0].intersectionRatio === 1) {
              alert('曝光了')
              observer.unobserve(el)
            }
          },
          { threshold: 1 },
        )
        observer.observe(el)
      },
    },
  },
}
</script>

<style scoped lang="scss">
.content {
  width: 60%;
  margin: 50px auto;
  overflow: hidden;
}
.image {
  position: relative;
  width: 40%;
  display: block;
  margin: 50px auto;
  border: 2px dashed red;
}
</style>
