<template>
  <div>
    <br />
    <div class="content">
      <canvas id="canvas" :width="width" :height="height" />
      <canvas id="canvas2" :height="height" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ctx: null,
      ctx2: null,
      x: 0,
      y: 0,
    }
  },
  props: {
    // 组件的宽度
    width: {
      type: Number,
      default: 300,
    },
    // 组件的高度
    height: {
      type: Number,
      default: 200,
    },
    // 滑块的长度
    l: {
      type: Number,
      default: 42,
    },
    // 滑块的半径
    r: {
      type: Number,
      default: 9,
    },
    // 滑块的容错值
    tolerant: {
      type: Number,
      default: 5,
    },
  },
  mounted() {
    const canvas = document.querySelector('#canvas')
    const canvas2 = document.querySelector('#canvas2')
    const ctx = canvas.getContext('2d')
    const ctx2 = canvas2.getContext('2d')
    this.ctx = ctx
    this.ctx2 = ctx2

    const { x, y } = this.getXY()

    this.drawPath(x, y, this.l, this.r, ctx, 'fill')
    this.drawPath(x, y, this.l, this.r, ctx2, 'clip')

    this.drawImage(ctx, ctx2, canvas2)
  },
  methods: {
    // canvas上加图片
    drawImage(ctx, ctx2, canvas2) {
      // 生成image对象
      const img = new Image()
      // 解决跨域问题
      img.crossOrigin = 'Annoymous'
      img.src =
        'https://fastly.picsum.photos/id/314/300/200.jpg?hmac=QFEMlYqoyXcLosQEI07YQ2aKFnsumE2BDtUQfjn6vew'
      img.onload = () => {
        ctx.drawImage(img, 0, 0)
        ctx2.drawImage(img, 0, 0)

        // const ImageData = ctx2.getImageData(50, 32, 60, 60)
        // canvas2.width = 60
        // ctx2.putImageData(ImageData, 0, 32)
        const y1 = this.y - this.r * 2 - 1
        const ImageData = ctx2.getImageData(
          this.x,
          y1,
          this.l + 2 * this.r + 3,
          this.l + 2 * this.r + 3,
        )
        canvas2.width = this.l + 2 * this.r
        ctx2.putImageData(ImageData, 0, y1)
      }
    },
    // 随机生成滑块的目标位置
    getXY() {
      const x = (1 + Math.random()) * (this.width / 3)
      const y = (1 + Math.random()) * (this.height / 3)
      this.x = x
      this.y = y
      return { x, y }
    },
    // 画出遮罩&滑块
    drawPath(x, y, l, r, ctx, operation) {
      // beginPath() 开始路径绘制
      // moveTo() 移动笔触到指定点
      // arc() 绘制弧形
      // lineTo() 画线
      // stroke() 描边
      // fill() 填充
      // clip() 裁切路径
      ctx.beginPath()

      //   ctx.moveTo(50, 50)
      ctx.moveTo(x, y)

      // 第一个圆
      // ctx.arc(71, 43, 9, 0.72 * Math.PI, 2.26 * Math.PI)
      ctx.arc(x + l / 2, y - r + 2, r, 0.72 * Math.PI, 2.26 * Math.PI)

      //   ctx.lineTo(92, 50)
      ctx.lineTo(x + l, y)

      // 第二个圆
      //   ctx.arc(99, 71, 9, 1.21 * Math.PI, 2.78 * Math.PI)
      ctx.arc(x + l + r - 2, y + l / 2, r, 1.21 * Math.PI, 2.78 * Math.PI)

      //   ctx.lineTo(92, 92)
      ctx.lineTo(x + l, y + l)

      //   ctx.lineTo(50, 92)
      ctx.lineTo(x, y + l)

      // counterclockwise为一个布尔值。为true时，是逆时针方向，否则顺时针方向
      //   ctx.arc(57, 71, 9, 2.76 * Math.PI, 1.24 * Math.PI, true)
      ctx.arc(x + r - 2, y + l / 2, r + 0.4, 2.76 * Math.PI, 1.24 * Math.PI, true)

      //   ctx.lineTo(50, 50)
      ctx.lineTo(x, y)

      ctx.lineWidth = 2

      ctx.fillStyle = 'rgba(255, 255, 255, 1)'

      ctx.strokeStyle = 'rgba(255, 255, 255, 1)'

      ctx.stroke()
      // 叠在原图像上方
      ctx.globalCompositeOperation = 'destination-over'
      // 判断是填充还是裁切, 裁切主要用于生成图案滑块
      // 设定裁选，只有落在裁选区内的那部分才能得以显示，其余都会被遮蔽掉。
      operation === 'fill' ? ctx.fill() : ctx.clip()
    },
  },
}
</script>
<style scoped lang="scss">
.content {
  position: relative;
  width: fit-content;
  margin: 0 auto;
  #canvas2 {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }
}
</style>
