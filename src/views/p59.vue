<template>
  <div class="container">
    <div
      class="wrapper"
      ref="wrapper"
      :class="{ 'is-active': activeAfter }"
      :style="wrapperStyle"
      @click="clickEvent"
    >
      <img :src="image" class="image" />
      <p src="fasdfas" />
      <p src="fasdfas" />
      <p src="fasdfas" />
      <p src="fasdfas" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: true,
      activeAfter: true,
      title: '假如宝可梦变成了末世风开放世界',
      image:
        'https://sns-img-hw.xhscdn.com/261822e6-a2cf-bd0a-684a-aad521d93aa5?imageView2/2/h/1920/format/webp|imageMogr2/strip',
    }
  },
  computed: {
    wrapperStyle() {
      const { top, left } = this.$refs.wrapper?.getBoundingClientRect() || {}
      return this.active
        ? {
            position: 'fixed',
            zIndex: 2,
            top: `${top}px`,
            left: `${left}px`,
          }
        : {}
    },
  },
  methods: {
    clickEvent() {
      this.active ? this.close() : this.open()
    },
    open() {
      this.active = true
      setTimeout(() => {
        this.activeAfter = true
      }, 0)
    },
    close() {
      this.activeAfter = false
      setTimeout(() => {
        this.active = false
      }, 400)
    },
  },
}
</script>

<style scoped lang="scss">
.container {
  margin: 50px 0 0 450px;
  .wrapper {
    cursor: pointer;
    width: fit-content;
    transition: all 400ms linear;
    &.is-active {
      left: 50% !important;
      top: 50% !important;
      transform: translate(-50%, -50%);
      transition: all 400ms linear;
      .image {
        width: 260px;
        height: 345px;
        transition: all 400ms linear;
      }
    }
    .image {
      width: 173px;
      height: 230px;
      border-radius: 16px;
      overflow: hidden;
      object-fit: cover;
      -webkit-user-drag: none;
      transition: all 400ms linear;
    }
  }
}
</style>
