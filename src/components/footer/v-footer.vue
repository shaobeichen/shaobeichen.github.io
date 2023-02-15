<template>
  <div class="v-footer">
    <copyright />
  </div>
</template>

<script>
import copyright from '@/components/footer/copyright.vue'

export default {
  components: {
    copyright,
  },
}
</script>

<style scoped lang="scss">
.v-footer {
  width: 100%;
}
</style>
