<template>
  <div>
    <div class="html">
      <br />
      <h1>关于侵权知识课程的警告函</h1>
      <br />
      <div>侵权账号名：<span contenteditable>it学习站</span></div>
      <div>
        侵权所在平台：<span contenteditable>闲鱼（阿里巴巴旗下交易平台）</span>
      </div>
      <br />
      <p>
        我们通过监测和投诉了解到，侵权账号您或您的公司（以下简称“您”）正在未经授权的情况下，销售名为《<span
          contenteditable
          >七天从0实现低代码平台</span
        >》的课程。这一课程由程序员少北晨（以下简称“课程创作者”）创作并拥有完全的版权和知识产权。
      </p>
      <p>
        您未经许可销售该课程的行为不仅侵犯了课程创作者的版权，还违反了相关的知识产权法律法规。此行为对课程创作者造成了极大的经济损失和声誉损害，且有可能对广大消费者产生误导。
      </p>
      <p>
        我们已经掌握了您侵害课程创作者的实际证据，在此，我们正式要求您立即采取以下措施：
      </p>
      <ul>
        <li>
          1.
          立即停止所有与该课程相关的盗版销售活动，包括但不限于删除所有涉及该课程的在线广告、销售页面和任何形式的宣传材料。
        </li>
        <li>
          2.
          立即删除所有与该课程相关的盗版资料，包括但不限于删除所有涉及该课程的网盘资料、文本资料和任何形式的课程材料。
        </li>
        <li>3. 不再继续销售或传播该课程的盗版内容及任何形式的课程资料。</li>
        <li>
          4.
          确认您已采取上述措施，并提供相关证明材料，包括已删除盗版课程的删除过程或其他证据。
        </li>
      </ul>
      <br />
      <p>
        如果您未在收到本函后的三（3）个工作日内采取必要的行动，我们将不得不采取进一步的法律措施，包括但不限于报警立案、诉讼、索赔及寻求法律手段，以保护课程创作者的合法权益。
      </p>
      <p>
        请您对此事给予高度重视，立即停止侵权行为，并尽快做出回应。我们希望能够友好解决此事，否则，我们将视情况决定启动法律途径（含一切行政、司法措施）维护合法权益。
      </p>
      <br />
      <br />
      <p>特此函告！</p>
      <br />
      <div class="right">程序员少北晨</div>
      <div class="right" contenteditable>2024年9月24日</div>
      <br />
      <br />
      <br />
      <br />
    </div>
    <br />
    <sh-button @click="handleClick" class="button">生成</sh-button>
    <br />
    <br />
    <br />
  </div>
</template>

<script setup>
import html2canvas from 'html2canvas'

const handleClick = () => {
  html2canvas(document.querySelector('.html')).then(canvas => {
    const img = canvas.toDataURL('image/png')
    const a = document.createElement('a')
    a.href = img
    a.download = '警告函.png'
    a.click()
    a = null
  })
}
</script>

<style scoped lang="scss">
.html {
  max-width: 750px;
  margin: 0 auto;
  font-size: 16px;
  width: 100%;
  padding: 0 50px;
  h1 {
    text-align: center;
    font-size: 30px;
  }
  [contenteditable]:focus {
    outline: none;
  }
  div {
    font-size: 16px;
  }
  p {
    font-size: 16px;
    line-height: 30px;
    text-indent: 2em;
  }
  ul {
    li {
      font-size: 16px;
      text-indent: 2em;
      list-style-type: none;
    }
  }
  .right {
    font-size: 16px;
    width: 100%;
    text-align: right;
  }
}
.button {
  margin: 0 auto;
}
</style>
