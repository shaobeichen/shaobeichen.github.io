<template>
  <div class="container">
    <config-input label="姓名" />
    <config-input label="手机" />
    <config-input label="邮箱" />
    <config-button buttonText="提交" />
    <br />
    <component
      v-for="(item, index) in list"
      :key="index"
      :is="item.component"
      :label="item.label"
      :buttonText="item.buttonText"
    ></component>
  </div>
</template>

<script>
import ConfigButton from '../components/config/button.vue'
import ConfigInput from '../components/config/input.vue'
export default {
  components: {
    ConfigButton,
    ConfigInput,
  },
  data() {
    return {
      list: [
        {
          component: 'config-input',
          label: '姓名',
        },
        {
          component: 'config-input',
          label: '手机',
        },
        {
          component: 'config-input',
          label: '邮箱',
        },
        {
          component: 'config-button',
          buttonText: '提交',
        },
      ],
    }
  },
}
</script>

<style scoped>
.container {
  width: 300px;
  margin: 0 auto;
}
</style>
