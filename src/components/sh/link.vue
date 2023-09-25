<template>
  <a v-if="isOpenUrl(url)" :href="url" :target="target">
    <slot />
  </a>
  <router-link v-else :to="url">
    <slot />
  </router-link>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: '',
    },
    target: {
      type: String,
      default: '_blank',
    },
  },
  methods: {
    isOpenUrl(url) {
      return url.startsWith('http')
    },
  },
}
</script>
