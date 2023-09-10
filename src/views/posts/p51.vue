<template>
  <layout-default>
    <div class="time">
      <div class="time-item">
        <div class="time-num">{{ day }}</div>
        <div class="time-text">天</div>
      </div>
      <div class="time-item">
        <div class="time-num">{{ hour }}</div>
        <div class="time-text">小时</div>
      </div>
      <div class="time-item">
        <div class="time-num">{{ minute }}</div>
        <div class="time-text">分钟</div>
      </div>
      <div class="time-item">
        <div class="time-num">{{ second }}</div>
        <div class="time-text">秒</div>
      </div>
    </div>
  </layout-default>
</template>
<script>
import dayjs from 'dayjs'

export default {
  data() {
    return {
      startTime: '2023-05-10 12:00',
      endTime: '2023-05-15 12:00',
      now: Number(dayjs()),
    }
  },
  computed: {
    diffStartTime() {
      const { startTime, now } = this
      const startTimeStamp = Number(dayjs(startTime))
      return now < startTimeStamp ? startTimeStamp : now
    },
    format() {
      return type => {
        const { diffStartTime, endTime } = this
        return dayjs(endTime).diff(diffStartTime, type)
      }
    },
    day() {
      return this.fillZero(this.format('day'))
    },
    hour() {
      return this.fillZero(this.format('hour') % 24)
    },
    minute() {
      return this.fillZero(this.format('minute') % 60)
    },
    second() {
      return this.fillZero(this.format('second') % 60)
    },
  },
  mounted() {
    this.startTimer(() => {
      this.now = Number(dayjs())
    }, Number(this.format('second')) + 1)
  },
  beforeDestroy() {
    this.clearTimer()
  },
  methods: {
    startTimer(callback, second = 0) {
      this.clearTimer()
      this.timer = setInterval(() => {
        second--
        callback(second)
        if (second <= 0) this.clearTimer()
      }, 1000)
    },
    clearTimer() {
      if (this.timer) {
        clearInterval(this.timer)
        this.timer = null
      }
    },
    fillZero(number) {
      return number < 10 ? `0${number}` : String(number)
    },
  },
}
</script>
<style lang="scss" scoped>
.time {
  display: flex;
  transform: scale(2);
  .time-item {
    display: flex;
    align-items: baseline;
    padding: 0 5px;
    .time-num {
      font-size: 24px;
      width: 30px;
    }
    .time-text {
      font-size: 12px;
    }
  }
}
</style>
