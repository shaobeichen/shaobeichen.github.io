<template>
  <div class="v-footer">
    <deallink />
    <copyright />
  </div>
</template>

<script>
import copyright from '@/components/footer/copyright.vue'
import deallink from '@/components/footer/deallink.vue'

export default {
  components: {
    copyright,
    deallink,
  },
}
</script>

<style scoped lang="scss">
.v-footer {
  width: 100%;
}
</style>
