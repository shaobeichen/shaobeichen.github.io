<template>
  <div class="margin-center" style="width: fit-content">
    <br />
    <div class="slidingWrap">
      <!-- 画布区域 -->
      <div class="canvasArea">
        <!-- 主要渲染整体背景及镂空图案 -->
        <canvas class="canvas-bg" :width="width" :height="height"></canvas>
        <canvas class="block" :height="height" :style="{ left: `${blockLeft}px` }"></canvas>
      </div>
      <!-- 底部滑块 -->
      <div
        :class="['sliderWrap', status]"
        :style="{ width: `${width}px` }"
        @mouseleave="handleDrapUp"
      >
        <div
          class="progress"
          :style="{
            width: `${blockLeft}px`,
          }"
        ></div>
        <div
          class="slider-block"
          ref="slider"
          :style="{ left: `${blockLeft}px` }"
          @mousedown="handleDrapDown"
          @mouseup="handleDrapUp"
          @mousemove="handleDragMove"
        >
          &rarr;
        </div>
      </div>
      <!-- 刷新按钮 -->
      <div class="refresh" @click="onRefreshBtnClick"></div>
      <!-- 加载中提示 -->
      <div
        class="loading"
        v-show="isLoading"
        :style="{ width: `${width}px`, height: `${height}px` }"
      >
        加载中...
      </div>
    </div>
    <br />
    <sh-button class="margin-center" @click="show = true">拆解</sh-button>
    <sh-dialog v-model="show" title="拆解">
      <ul style="text-align: left">
        <li>1. 滑块验证码整体思路</li>
        <li>2. Canvas如何画一个拼图</li>
        <li>3. Canvas如何做一个假镂空效果</li>
        <li>4. 如何随机生成滑块的目标位置</li>
        <li>5. 滑块操作及判断回调</li>
        <br />
      </ul>
    </sh-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      // 是否出现loading
      isLoading: true,
      // 是否可以拖拽
      isDrop: false,
      // 滑块的位置
      blockLeft: 0,
      // 滑块的状态
      status: '',
      // 滑块移动的目标位置
      x: 0,
      blockInitLeft: 0,
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
    this.initCanvas()
    this.blockInitLeft = this.$refs.slider.getBoundingClientRect().left
  },
  methods: {
    // 初始化canvas画布，主要功能：
    /**
     * 1. 随机获取到图片
     * 2. 随机生成图片滑块位置
     * 3. 截取图片并移动到初始位置
     * 4. 画出镂空图案
     * 5. 拿到下方滑块的初始位置
     */
    initCanvas() {
      // 拿到canvas对象
      let canvas = document.querySelector('.canvas-bg')
      let blockcanvas = document.querySelector('.block')
      // 画笔
      let ctx = canvas.getContext('2d')
      let blockCtx = blockcanvas.getContext('2d')
      // 每次重新绘制图片时，清除画布原有内容
      ctx.clearRect(0, 0, this.width, this.height)
      blockcanvas.width = this.width

      // x y 位置随机
      let { x, y } = this.getXY()
      this.drawPath(x, y, this.l, this.r, ctx, 'fill')
      // 裁剪前保存状态
      blockCtx.save()
      this.drawPath(x, y, this.l, this.r, blockCtx, 'clip')
      // 根据图形减去一个圆的高度
      const y1 = y - this.r * 2 - 1

      // 生成image对象
      let img = new Image()
      // 解决跨域问题
      img.crossOrigin = ''
      // 图片访问地址
      //   img.src = `https://picsum.photos/${this.width}/${this.height}`
      img.src =
        'https://fastly.picsum.photos/id/314/300/200.jpg?hmac=QFEMlYqoyXcLosQEI07YQ2aKFnsumE2BDtUQfjn6vew'
      img.onload = () => {
        this.isLoading = false
        ctx.drawImage(img, 0, 0)
        blockCtx.drawImage(img, 0, 0)
        // 实现镂空效果
        const ImageData = blockCtx.getImageData(
          x,
          y1,
          this.l + 2 * this.r + 3,
          this.l + 2 * this.r + 3,
        )
        // 裁剪后恢复状态
        blockCtx.restore()
        blockcanvas.width = this.l + 2 * this.r
        // 再往block画布上填充数据
        blockCtx.putImageData(ImageData, 0, y1)
      }
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
      ctx.moveTo(x, y)
      // 第一个圆
      ctx.arc(x + l / 2, y - r + 2, r, 0.72 * Math.PI, 2.26 * Math.PI)
      ctx.lineTo(x + l, y)
      // 第二个圆
      ctx.arc(x + l + r - 2, y + l / 2, r, 1.21 * Math.PI, 2.78 * Math.PI)
      ctx.lineTo(x + l, y + l)
      ctx.lineTo(x, y + l)
      // counterclockwise为一个布尔值。为true时，是逆时针方向，否则顺时针方向
      ctx.arc(x + r - 2, y + l / 2, r + 0.4, 2.76 * Math.PI, 1.24 * Math.PI, true)
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
    // 重置按钮
    onRefreshBtnClick() {
      this.onRefresh()
      this.handleRefresh()
    },
    handleRefresh() {
      this.isLoading = true
      this.blockLeft = 0
      this.status = ''
      this.initCanvas()
    },
    handleDragMove(e) {
      if (!this.isDrop) return
      e.preventDefault()
      const eventX = e.clientX || e.touches[0].clientX
      let moveX = eventX - this.blockInitLeft - 20
      if (moveX < 0 || moveX + 40 + 2 * this.r > this.width) return
      // 设置滑块的的位置及进度条的宽度
      this.blockLeft = moveX
    },
    handleDrapDown() {
      // 初始化未完成时,不可滑动
      // 滑动开始时,将状态置为等待状态
      if (this.isLoading) return
      this.isDrop = true
      this.status = 'wait'
    },
    handleDrapUp() {
      if (!this.isDrop) return
      this.isDrop = false
      let val = Math.abs(this.x - this.blockLeft)
      this.status = val > this.tolerant ? 'fail' : 'success'
      if (this.status === 'fail') {
        this.onFail()
      } else {
        this.onSuccess()
      }
      setTimeout(() => {
        this.handleRefresh()
      }, 1000)
    },
    // 随机生成滑块的目标位置
    getXY() {
      let x = this.width / 3 + Math.random() * ((this.width * 3) / 4 - this.width / 3)
      let y = this.height / 3 + Math.random() * ((this.height * 3) / 5 - this.height / 3)
      this.x = x
      return { x, y }
    },
    onSuccess() {},
    onFail() {},
    onRefresh() {},
  },
}
</script>

<style scoped lang="scss">
.slidingWrap {
  position: relative;
}
.canvas-bg {
  position: absolute;
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

// 参考文章：https://juejin.cn/post/7017640232765898789
