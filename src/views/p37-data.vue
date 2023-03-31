<template>
  <layout-default>
    <sh-dialog v-model="show" title="常用解决">
      <div class="name">
        <div>1. 取消请求</div>
        <div>2. 忽略请求</div>
        <div>3. 禁用页面</div>
      </div>
    </sh-dialog>
    <div class="content">
      <div class="button-box">
        <sh-button class="button" @click="show = true">常用解决</sh-button>
      </div>
      <br />
      <div class="tab-header">
        <div class="tab-item" :class="{ active: activeTab === 0 }" @click="tabChange(0)">
          <div>Tab 1</div>
          <div class="time">等待0.5S</div>
        </div>
        <div class="tab-item" :class="{ active: activeTab === 1 }" @click="tabChange(1)">
          <div>Tab 2</div>
          <div class="time">等待3S</div>
        </div>
        <div class="tab-item" :class="{ active: activeTab === 2 }" @click="tabChange(2)">
          <div>Tab 3</div>
          <div class="time">等待0.5S</div>
        </div>
      </div>
      <div class="tab-content">
        <div class="tab-row" v-for="(item, index) in activeContent" :key="index">{{ item }}</div>
      </div>
    </div>
  </layout-default>
</template>

<script>
import { sleep } from '@/utils/index'

export default {
  data() {
    return {
      activeTab: 0,
      activeContent: [],
      activeContentMap: [
        ['这是Tab 1', '这是Tab 1', '这是Tab 1'],
        ['这是Tab 2', '这是Tab 2', '这是Tab 2'],
        ['这是Tab 3', '这是Tab 3', '这是Tab 3'],
      ],
      show: false,
    }
  },
  created() {
    this.tabChange(0)
  },
  methods: {
    async tabChange(index) {
      this.activeTab = index
      this.getData(index)
    },
    async getData(index) {
      const timeList = [500, 3000, 500]
      await sleep(timeList[index])

      this.activeContent = this.activeContentMap[index]
    },
  },
}
</script>

<style lang="scss" scoped>
.button-box {
  display: flex;
  justify-content: center;
}
.tab-header {
  display: flex;
  justify-content: space-between;
}

.tab-item {
  cursor: pointer;
  padding: 10px;
  border: 1px solid #ccc;
  border-bottom: none;
  border-radius: 10px 10px 0 0;
  flex: 1;
  text-align: center;
  .time {
    font-size: 12px;
  }
}

.tab-item.active {
  background-color: #ccc;
}

.tab-content {
  border: 1px solid #ccc;
  border-radius: 0 0 10px 10px;
  padding: 10px;
  width: 300px;
  text-align: center;
}

.tab-row {
  margin-bottom: 10px;
}
</style>
