<template>
  <div class="box">
    <div class="wrapper">
      <img v-bind="$attrs" class="image" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.box {
  position: relative;
  width: 300px;
  .wrapper {
    position: relative;
    width: 100%;
    padding-top: 100%;

    // width: 300px;
    // padding-top: 300px;
    // height: 0;

    .image {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
