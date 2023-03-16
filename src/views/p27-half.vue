<template>
  <layout-default>
    <div class="content">
      <div class="border" :class="[{ two: ratio === 2, three: ratio === 3 }]" />
      <br />
      <div class="flex-center">
        <sh-button @click="ratio = 1">1倍屏1px</sh-button>
        <sh-button @click="ratio = 2">2倍屏1px</sh-button>
        <sh-button @click="ratio = 3">3倍屏1px</sh-button>
      </div>
    </div>
  </layout-default>
</template>

<script>
export default {
  data() {
    return {
      ratio: 1,
    }
  },
}
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  .border {
    position: relative;
    width: 200px;
    height: 200px;
    margin: 0 auto;
    // width: 100px;
    // height: 100px;
    // margin: 0 auto 50px;
    // transform: scale(2);
    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      border: 1px solid gray;
      width: 100%;
      height: 100%;
      transform-origin: 0 0;
    }
  }

  @media (-webkit-min-device-pixel-ratio: 2) {
    .border.two::after {
      width: 200%;
      height: 200%;
      transform: scale(0.5);
    }
  }

  @media (-webkit-min-device-pixel-ratio: 3) {
    .border.three::after {
      width: 300%;
      height: 300%;
      transform: scale(0.333);
    }
  }
}
</style>
