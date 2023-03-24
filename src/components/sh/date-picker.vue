<template>
  <div
    class="date"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
    @touchcancel="onTouchEnd"
  >
    <ul ref="wrapper" class="column" :style="columnStyle" @transitionend="stopMomentum">
      <li
        v-for="(item, index) in options"
        :key="item"
        class="column-item"
        :class="optionSelectClass(index)"
        :style="optionHeightStyle"
        @click="onClickOption(index)"
      >
        {{ item }}
      </li>
    </ul>
    <div class="frame" :style="optionHeightStyle"></div>
  </div>
</template>

<script>
/**
 * 惯性滑动思路:
 * 在手指离开屏幕时，如果和上一次move时的间隔小于 设置的惯性时间
 * 且move距离大于 设置的惯性距离 时，执行惯性滑动
 */

// 惯性时间
const MOMENTUM_TIME = 100
// 惯性距离
const MOMENTUM_DISTANCE = 15
// 默认持续时间
const DEFAULT_DURATION = 200
// 如果当前值超过最大值或者小于最小值，返回最大最小值
const clamp = (num, min, max) => Math.min(Math.max(num, min), max)
// 获取元素translateY属性
const getElementTranslateY = element => {
  const { transform } = window.getComputedStyle(element)
  const translateY = transform.slice(7, transform.length - 1).split(', ')[5]
  return Number(translateY)
}

export default {
  data() {
    return {
      options: [2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030],
      // 是否在move中
      moving: false,
      // startY点
      startY: 0,
      // 当前偏移量
      currentOffset: 0,
      // 惯性偏移量
      momentumOffset: 0,
      // start时偏移量
      startOffset: 0,
      // start touch开始时间
      touchStartTime: 0,
      // 选项的高度
      optionHeight: 28,
      // 是否开启惯性滚动
      isMomentum: true,
      // 当前option的索引
      optionIndex: 0,
    }
  },
  computed: {
    columnStyle() {
      const { currentOffset } = this
      return {
        transform: `translate3d(0, ${currentOffset + this.baseOffset()}px, 0)`,
        transitionDuration: `${DEFAULT_DURATION}ms`,
        transitionProperty: 'all',
      }
    },
    optionHeightStyle() {
      return {
        height: `${this.optionHeight}px`,
      }
    },
    optionSelectClass() {
      return function (index) {
        return {
          selected: index === this.optionIndex,
        }
      }
    },
  },
  methods: {
    /**
     * 基础偏移量，组件一开始默认垂直居中
     */
    baseOffset() {
      const { optionHeight, options } = this
      return (optionHeight * (options.length - 1)) / 2
    },
    onTouchStart(event) {
      this.startY = event.touches[0].clientY

      if (this.moving) {
        const translateY = getElementTranslateY(this.$refs.wrapper)
        this.currentOffset = Math.min(0, translateY - this.baseOffset())
      }
      this.startOffset = this.currentOffset
      this.momentumOffset = this.startOffset
      this.touchStartTime = Date.now()
    },
    onTouchMove(event) {
      this.moving = true

      const { optionHeight, startOffset, startY, options } = this

      const deltaY = event.touches[0].clientY - startY

      this.currentOffset = clamp(
        startOffset + deltaY,
        -(options.length * optionHeight),
        optionHeight,
      )
    },
    onTouchEnd() {
      const { currentOffset, momentumOffset, touchStartTime, optionHeight, options, isMomentum } =
        this
      // 上一次move的距离
      const distance = currentOffset - momentumOffset
      // 上一次move的时间
      const duration = Date.now() - touchStartTime
      const startMomentum = duration < MOMENTUM_TIME && Math.abs(distance) > MOMENTUM_DISTANCE

      if (startMomentum) {
        const speed = Math.abs(distance / duration)
        const offset = currentOffset + (speed / 0.003) * (distance < 0 ? -1 : 1)
        const finallyOffset = isMomentum ? offset : currentOffset
        const index = this.getIndexByOffset(finallyOffset)
        this.updateIndex(index)
        return
      }

      const index = this.getIndexByOffset(currentOffset)
      this.updateIndex(index)

      setTimeout(() => {
        this.moving = false
      }, 0)
    },
    onClickOption(index) {
      if (this.moving) return
      this.updateIndex(index)
    },
    getIndexByOffset(offset) {
      const { optionHeight, options } = this
      return clamp(Math.round(-offset / optionHeight), 0, options.length - 1)
    },
    updateIndex(index) {
      console.warn(index)
      const offset = -index * this.optionHeight
      this.currentOffset = offset
      this.optionIndex = index
    },
    stopMomentum() {
      this.moving = false
    },
  },
}
</script>

<style lang="scss" scoped>
.date {
  position: relative;
  transition-timing-function: cubic-bezier(0.23, 1, 0.68, 1);
  user-select: none;
  overflow: hidden;
  .frame {
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    z-index: 2;
    transform: translateY(-50%);
    pointer-events: none;
    &::after {
      content: '';
      position: absolute;
      box-sizing: border-box;
      pointer-events: none;
      top: -50%;
      right: -50%;
      bottom: -50%;
      left: -50%;
      border: 0 solid #aeaeae;
      border-width: 1px 0;
      transform: scale(0.5);
    }
  }
  .column {
    width: 80px;
    cursor: grab;
    text-align: center;
    margin: 0 auto;
    .column-item {
      color: #afafaf;
      &.selected {
        color: black;
      }
    }
  }
}
</style>
