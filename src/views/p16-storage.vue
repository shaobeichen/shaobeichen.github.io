<template>
  <layout-default>
    <div class="storage">
      <table>
        <tbody>
          <tr v-for="(item, index) in list" :key="index">
            <td style="color: #4578ee">{{ item.key }}</td>
            <td v-for="(ite, index) in item.value" :key="index">
              {{ ite }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </layout-default>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          key: 'sessionStorage',
          value: ['标签页', '5M', '即用即删', ''],
        },
        {
          key: 'cookie',
          value: ['浏览器', '4k', '服务端', '设置过期时间'],
        },
        {
          key: 'localStorage',
          value: ['浏览器', '5M', '一直在', '下次说'],
        },
        {
          key: 'indexedDB',
          value: ['数据库', '无上限', '', ''],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.storage {
  transform: scale(1.5);
  td {
    border: 1px dashed black;
    padding: 2px 8px;
  }
}
</style>
