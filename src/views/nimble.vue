<template>
  <div class="container">
    <canvas id="canvas" style="margin: 0 auto; display: block"></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    let w, h
    const canvas = document.querySelector('#canvas')
    canvas.width = w = 500
    canvas.height = h = 500

    const context = canvas.getContext('2d')
    context.lineWidth = 30
    context.lineCap = 'round'
    context.lineJoin = 'round'

    const gradient = context.createLinearGradient(0, h / 2, w, h / 2)
    gradient.addColorStop(0, '#6730eb')
    gradient.addColorStop(1, '#667af9')
    context.strokeStyle = gradient

    let percent = 0

    const draw = () => {
      percent += 5
      if (percent > 100) return
      context.clearRect(0, 0, w, h)

      const p0 = [w * 0, h * 0.5]
      const p1 = [w * 0.6, h * 0.5 * -1 * 2]
      const p2 = [w * 0.4, h * 0.5 * 1 * 4]
      const p3 = [w * 1, h * 0.5]
      context.moveTo(...p0)
      context.bezierCurveTo(...p1, ...p2, ...p3)
      context.stroke()

      requestAnimationFrame(draw)
    }

    requestAnimationFrame(draw)
  },
}
</script>

<!-- https://lusion.co -->
<!-- https://codepen.io/maxile/details/aqvZWM -->
