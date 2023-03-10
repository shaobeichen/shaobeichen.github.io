<template>
  <div class="box">
    <div class="wrapper">
      <img v-lazy="{ nolazy }" :data-src="src" v-bind="$attrs" class="image" />
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    lazy: {
      type: Boolean,
      default: true,
    },
    src: {
      type: String,
      default: '',
    },
  },
  computed: {
    nolazy() {
      return !this.lazy
    },
  },
  directives: {
    lazy: {
      bind(el, binding) {
        const { nolazy } = binding.value
        if (nolazy) return (el.src = el.dataset.src)

        const placehold =
          'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
        el.src = placehold

        const obServer = new IntersectionObserver(entries => {
          // 如果 intersectionRatio 为 0，则目标在视野外，
          // 我们不需要做任何事情。
          if (entries[0].intersectionRatio <= 0) return

          el.src = el.dataset.src
          obServer.unobserve(el)
        })
        obServer.observe(el)
      },
    },
  },
}
</script>

<style scoped lang="scss">
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.box {
  position: relative;
  width: 300px;
  .wrapper {
    position: relative;
    width: 100%;
    padding-top: 100%;
    .image {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      object-fit: cover;
      background-color: rgb(168, 210, 255);
      &.show {
        animation: fade 0.5s ease-in-out;
      }
    }
  }
}
</style>
