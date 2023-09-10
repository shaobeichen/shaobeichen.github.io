<template>
  <layout-default>
    <div class="content">
      <div class="box">
        <sh-input type="text" class="input" placeholder="请输入" />
        <div class="close">+</div>
      </div>
    </div>
  </layout-default>
</template>
<style lang="scss" scoped>
.content {
  .box {
    position: relative;
    .close {
      position: absolute;
      right: 6px;
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
    }
    .input {
      &:placeholder-shown {
        & + .close {
          display: none;
        }
      }
    }
  }
}
</style>
