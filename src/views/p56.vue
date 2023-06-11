<template>
  <div class="content">
    <br />
    <canvas id="canvas" :width="width" :height="height" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      width: 300,
      height: 200,
    }
  },
  mounted() {
    const canvas = document.querySelector('#canvas')
    const ctx = canvas.getContext('2d')
    this.drawImage(ctx)
    this.drawPath(ctx)
  },
  methods: {
    // canvas上加图片
    drawImage(ctx) {
      // 生成image对象
      const img = new Image()
      // 解决跨域问题
      img.crossOrigin = 'Annoymous'
      img.src =
        'https://fastly.picsum.photos/id/314/300/200.jpg?hmac=QFEMlYqoyXcLosQEI07YQ2aKFnsumE2BDtUQfjn6vew'
      img.onload = () => {
        ctx.drawImage(img, 0, 0)
      }
    },
    // 画出遮罩&滑块
    drawPath(ctx) {
      // beginPath() 开始路径绘制
      // moveTo() 移动笔触到指定点
      // arc() 画弧形
      // lineTo() 画直线
      // stroke() 描边
      // fill() 填充

      //   const x = 50,
      //     y = 50,
      //     l = 42,
      //     r = 9

      ctx.beginPath()

      ctx.moveTo(50, 50)
      //   ctx.moveTo(x, y)

      // 第一个圆
      ctx.arc(71, 43, 9, 0.72 * Math.PI, 2.26 * Math.PI)
      // ctx.arc(x + l / 2, y - r + 2, r, 0.72 * Math.PI, 2.26 * Math.PI)

      ctx.lineTo(92, 50)
      // ctx.lineTo(x + l, y)

      // 第二个圆
      ctx.arc(99, 71, 9, 1.21 * Math.PI, 2.78 * Math.PI)
      // ctx.arc(x + l + r - 2, y + l / 2, r, 1.21 * Math.PI, 2.78 * Math.PI)

      ctx.lineTo(92, 92)
      // ctx.lineTo(x + l, y + l)

      ctx.lineTo(50, 92)
      // ctx.lineTo(x, y + l)

      // counterclockwise为一个布尔值。为true时，是逆时针方向，否则顺时针方向
      ctx.arc(57, 71, 10, 2.76 * Math.PI, 1.24 * Math.PI, true)
      // ctx.arc(x + r - 2, y + l / 2, r + 1, 2.76 * Math.PI, 1.24 * Math.PI, true)

      ctx.lineTo(50, 50)
      // ctx.lineTo(x, y)

      // 线宽
      ctx.lineWidth = 1
      // 填充颜色
      ctx.fillStyle = 'rgba(255, 255, 255, 1)'
      // 轮廓颜色
      ctx.strokeStyle = 'rgba(255, 255, 255, 1)'
      // 绘制
      ctx.stroke()
      // 叠在原图像上方
      ctx.globalCompositeOperation = 'destination-over'
      // 填充
      ctx.fill()
    },
  },
}
</script>
<style scoped lang="scss">
.content {
  width: fit-content;
  margin: 0 auto;
}
.slidingWrap {
  position: relative;
}
.canvas-bg {
  //   position: absolute;
}
.block {
  position: relative;
}
.sliderWrap {
  height: 40px;
  box-sizing: border-box;
  margin-top: 5px;
  background-color: #efefef;
  border: 1px solid #cbcbcb;
}
.sliderWrap .slider-block {
  width: 40px;
  height: 100%;
  box-shadow: 0 0 5px rgb(209, 209, 209);
  background-color: #fff;
  font-weight: bold;
  text-align: center;
  line-height: 40px;
  font-size: 20px;
  cursor: pointer;
  user-select: none;
  position: relative;
}
.sliderWrap .progress {
  position: absolute;
  box-sizing: border-box;
  height: 38px;
}
/* 不同状态显示不同的颜色 */
.wait .progress {
  background-color: #c7defb;
  border: 1px solid #3554cb;
}
.wait .slider-block {
  background-color: #3554cb;
  border: 1px solid #3554cb;
  color: #fff;
}
.fail .progress {
  background-color: #f9d8d6;
  border: 1px solid #ef636a;
}
.fail .slider-block {
  border: 1px solid #ef636a;
  background-color: #ef636a;
  color: #fff;
}
.success .progress {
  background-color: #d2f1eb;
  border: 1px solid #3e8f44;
}
.success .slider-block {
  border: 1px solid #3e8f44;
  background-color: #3e8f44;
  color: #fff;
}
.refresh {
  width: 20px;
  height: 20px;
  position: absolute;
  right: 10px;
  top: 10px;
  background-image: url('https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/41c7d56e9cd34ac997b94142b212dbc3~tplv-k3u1fbpfcp-watermark.image');
  background-size: 100% 100%;
}
.loading {
  position: absolute;
  box-sizing: border-box;
  top: 0%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  text-align: center;
  color: #303030;
  font-size: 14px;
  border: 1px solid rgb(209, 209, 209);
}
.loading img {
  width: 40px;
  height: 40px;
  display: block;
  margin: 30px auto;
  margin-bottom: 15px;
}
</style>
