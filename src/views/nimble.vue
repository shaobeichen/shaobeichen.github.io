<template>
  <div class="container">
    <canvas id="canvas"></canvas>

    <div class="control">
      <div>高度</div>
      <br />
      <el-slider v-model="config.waveHeight" :min="0" :max="500" :step="10" />
      <br />

      <div>速度</div>
      <br />
      <el-slider v-model="config.speed" :min="0" :max="10" :step="1" />
      <br />

      <div>线宽</div>
      <br />
      <el-slider v-model="config.lineWidth" :min="1" :max="100" :step="1" />
      <br />

      <div>密度</div>
      <br />
      <el-slider v-model="config.size" :min="100" :max="500" :step="10" />
      <br />

      <div>CPU: 70%</div>
      <div>内存：120M</div>
      <div>表现：反复切换数据后卡顿</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: {
        w: 500,
        h: 500,
        waveHeight: 250,
        size: 300,
        speed: 1,
        lineWidth: 30,
      },
      initCount: 0, // 为了解决多次初始化后，前面的初始化还继续运行的问题
    }
  },
  watch: {
    'config.waveHeight'() {
      this.init()
    },
    'config.speed'() {
      this.init()
    },
    'config.lineWidth'() {
      this.init()
    },
    'config.size'() {
      this.init()
    },
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const c = this.config
      const w = c.w
      const h = c.h
      const waveHeight = c.waveHeight
      const size = c.size
      const speed = c.speed
      const lineWidth = c.lineWidth

      this.initCount++
      const currentInitIndex = this.initCount

      const canvas = document.querySelector('#canvas')
      if (!canvas) return
      canvas.width = w
      canvas.height = h

      const context = canvas.getContext('2d')
      context.clearRect(0, 0, w, h)
      context.lineWidth = lineWidth
      context.lineCap = 'round'
      context.lineJoin = 'round'

      const gradient = context.createLinearGradient(0, h / 2, w, h / 2)
      gradient.addColorStop(0, '#6730eb')
      gradient.addColorStop(1, '#667af9')
      context.strokeStyle = gradient

      const preloadOffset = 15 // 预生成的偏移值，防止进入视口时还未生成

      const drawMap = (x = 0) => {
        const p0 = [x + size * 0 + preloadOffset, h * 0.5]
        const p1 = [x + size * 0.4 + preloadOffset, h * 0.5 - waveHeight]
        const p2 = [x + size * 0.6 + preloadOffset, h * 0.5 + waveHeight]
        const p3 = [x + size * 1 + preloadOffset, h * 0.5]

        context.moveTo(...p0)
        context.bezierCurveTo(...p1, ...p2, ...p3)

        if (x + size < w) drawMap(x + size)
        else context.save()
      }

      let time = 0
      const draw = () => {
        if (currentInitIndex < this.initCount) return
        requestAnimationFrame(draw)

        context.clearRect(0, 0, w, h)
        time -= speed
        context.beginPath()
        drawMap(time)
        context.stroke()
      }

      requestAnimationFrame(draw)
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  .control {
    flex-shrink: 0;
    width: 500px;
    margin-left: 40px;
  }
}
</style>
