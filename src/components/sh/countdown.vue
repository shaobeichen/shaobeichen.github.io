<template>
  <div class="countdown">{{ time }}</div>
</template>

<script>
export default {
  props: {
    second: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      time: '00:00',
      timer: null,
    }
  },
  watch: {
    second: {
      handler(value) {
        this.init()
        this.start(value)
      },
      immediate: true,
    },
  },
  beforeDestroy() {
    this.end()
  },
  methods: {
    init() {
      this.time = this.convertSecondsToMinutesAndSeconds(this.second)
    },
    start(value) {
      let second = value
      this.timer = setInterval(() => {
        if (second <= 0) {
          this.end()
          return
        }
        second--
        this.time = this.convertSecondsToMinutesAndSeconds(second)
      }, 1000)
    },
    end() {
      clearInterval(this.timer)
      this.timer = null
    },
    convertSecondsToMinutesAndSeconds(seconds = 0) {
      const minutes = Math.floor(seconds / 60)
      const remainingSeconds = seconds % 60
      const minutesString = ('0' + minutes).slice(-2)
      const secondsString = ('0' + remainingSeconds).slice(-2)
      return minutesString + ':' + secondsString
    },
  },
}
</script>

<style lang="scss" scoped>
.countdown {
  position: relative;
  font-size: 20px;
  text-align: center;
}
</style>
