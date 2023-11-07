<template>
  <div class="container">
    <div class="area" :style="areaStyle"></div>
    <div class="list">
      <div
        v-for="item in list"
        :key="item.id"
        class="item"
        :class="{ selected: item.selected }"
        ref="item"
      >
        {{ item.id }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, selected: false },
        { id: 2, selected: false },
        { id: 3, selected: false },
        { id: 4, selected: false },
        { id: 5, selected: false },
        { id: 6, selected: false },
        { id: 7, selected: false },
        { id: 8, selected: false },
        { id: 9, selected: false },
        { id: 10, selected: false },
      ],
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
    this.getItemPosition()
    this.areaListen()
  },
  methods: {
    getItemPosition() {
      const { list } = this

      const itemDOM = this.$refs.item

      this.list = list.map((v, i) => {
        const { left, top, width, height } = itemDOM[i].getBoundingClientRect()
        return { ...v, left, top, width, height }
      })
    },
    areaListen() {
      window.addEventListener('mousedown', e => {
        this.areaInfo.startX = e.clientX
        this.areaInfo.startY = e.clientY
        this.areaInfo.left = e.clientX
        this.areaInfo.top = e.clientY
      })
      window.addEventListener('mousemove', e => {
        const { startX, startY, top, left, width, height } = this.areaInfo
        if (!startX) return

        const { clientX, clientY } = e

        this.areaInfo.width = Math.abs(startX - clientX)
        this.areaInfo.height = Math.abs(startY - clientY)

        // if (clientY < startY) this.areaInfo.top = clientY
        // if (clientX < startX) this.areaInfo.left = clientX

        // if (clientY > startY && top < startY) this.areaInfo.top = startY
        // if (clientX > startX && left < startX) this.areaInfo.left = startX

        //更简单的判定方法
        this.areaInfo.top = Math.min(startY, clientY)
        this.areaInfo.left = Math.min(startX, clientX)

        // this.list.forEach((v, i) => {
        //   if (
        //     v.left > left &&
        //     v.left + v.width < clientX &&
        //     v.top > top &&
        //     v.top + v.height < clientY
        //   )
        //     this.list[i].selected = true
        // })

        this.list.forEach((v, i) => {
          if (
            v.left > left &&
            v.left + v.width < left + width &&
            v.top > top &&
            v.top + v.height < top + height
          )
            this.list[i].selected = true
          else this.list[i].selected = false
        })
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
    &.selected {
      background: rgb(45, 218, 100);
    }
  }
}
</style>
