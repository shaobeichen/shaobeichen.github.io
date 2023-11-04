<template>
  <div class="container">
    <div class="area" :style="areaStyle"></div>
    <div class="list">
      <div v-for="item in list" :key="item" class="item">{{ item }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      areaInfo: {},
    }
  },
  computed: {
    areaStyle() {
      const { width, height, left, top } = this.areaInfo

      return (
        this.areaInfo.width && {
          zIndex: 1,
          opacity: 1,
          left: `${left}px`,
          top: `${top}px`,
          width: `${width}px`,
          height: `${height}px`,
        }
      )
    },
  },
  mounted() {
    this.areaListen()
  },
  methods: {
    areaListen() {
      window.addEventListener('mousedown', e => {
        this.areaInfo.startX = e.clientX
        this.areaInfo.startY = e.clientY
        this.areaInfo.left = e.clientX
        this.areaInfo.top = e.clientY
      })
      window.addEventListener('mousemove', e => {
        const { startX, startY } = this.areaInfo
        if (!startX) return

        const { clientX, clientY } = e

        this.areaInfo.width = Math.abs(startX - clientX)
        this.areaInfo.height = Math.abs(startY - clientY)

        if (clientY < startY) this.areaInfo.top = clientY
        if (clientX < startX) this.areaInfo.left = clientX
      })
      window.addEventListener('mouseup', () => {
        this.areaInfo = {}
      })
    },
  },
}
</script>

<style scoped lang="scss">
.container {
  user-select: none;
  .area {
    position: fixed;
    z-index: -1;
    opacity: 0;
    width: 0;
    height: 0;
    border: 1px solid rgb(0, 136, 255);
    background: rgba(107, 171, 255, 0.3);
  }
  .list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    padding: 100px 0;
    margin: 0 auto;
    width: 300px;
  }
  .item {
    width: 50px;
    height: 50px;
    background: rgb(53, 154, 255);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
</style>
