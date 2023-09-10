<template>
  <div class="transform">
    <div class="title">
      <span>transform: </span>
      <span style="color: #307af6">{{ title }}</span>
    </div>
    <div class="image-box">
      <sh-scale-image :src="image" class="image" :style="imageStyle" />
      <sh-scale-image :src="image" class="image-placehold" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: 'https://www.qmbk.com/jingyan/UploadFiles_2374/202001/2020011614325951.jpg',
      listIndex: 0,
      list: [
        'none',
        'translateX(100px)',
        'translateY(100px)',
        'rotate3d(1, 1, 0, -30deg) translateZ(-100px)',
        'rotate(-45deg)',
        'rotate(45deg)',
        'perspective(500px) rotateX(45deg)',
        'perspective(500px) rotateY(45deg)',
        'skewX(45deg)',
        'skewY(45deg)',
        'scaleX(0.5)',
        'scaleY(0.5)',
        'scale(0.5)',
      ],
    }
  },
  computed: {
    title() {
      const { list, listIndex } = this
      return list[listIndex]
    },
    imageStyle() {
      const { list, listIndex } = this
      return {
        transform: `translateX(-50%) ${listIndex === 0 ? '' : list[listIndex]}`,
      }
    },
  },
  mounted() {
    this.add()
  },
  methods: {
    add() {
      const { list } = this
      this.timer = setInterval(async () => {
        if (this.listIndex >= list.length - 1) {
          this.reset()
        } else {
          this.listIndex++
        }
      }, 3000)
    },
    reset() {
      clearInterval(this.timer)
      this.timer = null
      this.listIndex = 0
    },
  },
}
</script>

<style scoped lang="scss">
.transform {
  height: 100vh;
  overflow: hidden;
  margin: 0 auto;
  font-size: 20px;
  padding: 20px;
  text-align: center;
  .title {
    font-size: 40px;
    font-weight: bold;
    padding: 50px 0;
  }
  .image-box {
    position: relative;
    .image,
    .image-placehold {
      position: absolute;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
      border-radius: 30px;
      overflow: hidden;
      margin: 0 auto;
      transition: all 1s ease-in-out;
    }
    .image {
      z-index: 1;
    }
    .image-placehold {
      opacity: 0.5;
    }
  }
}
</style>
