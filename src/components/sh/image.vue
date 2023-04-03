<template>
  <img v-lazy="{ nolazy }" :data-src="src" v-bind="$attrs" class="image" />
</template>

<script>
function lazyBinding(el, binding) {
  const placehold = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

  const { nolazy } = binding.value

  if (nolazy) return (el.src = el.dataset.src || placehold)

  el.src = placehold

  const obServer = new IntersectionObserver(entries => {
    // 如果 intersectionRatio 为 0，则目标在视野外，
    // 我们不需要做任何事情。
    if (entries.find(v => v.intersectionRatio)) {
      el.src = el.dataset.src || placehold
      obServer.unobserve(el)
    }
  })
  obServer.observe(el)
}

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
        lazyBinding(el, binding)
      },
      componentUpdated(el, binding) {
        lazyBinding(el, binding)
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
.image {
  position: relative;
  width: 100%;
  display: block;
  &.show {
    animation: fade 0.5s ease-in-out;
  }
}
</style>
