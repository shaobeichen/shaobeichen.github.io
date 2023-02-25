<template>
  <layout-default>
    <sh-stepper v-model="number" class="stepper" />
  </layout-default>
</template>

<script>
export default {
  data() {
    return {
      number: 1,
    }
  },
}
</script>

<style lang="scss" scoped>
.stepper {
  transform: scale(2);
}
</style>
