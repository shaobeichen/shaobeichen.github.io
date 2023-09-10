<template>
  <layout-default>
    <div class="content">
      <div class="list">
        <template v-if="list.length">
          <a
            v-for="(item, index) in list"
            :key="index"
            class="item"
            :href="item.Url"
            target="_blank"
          >
            <div class="item-index" :class="{ 'is-hot': index < 3 }" v-html="index + 1" />
            <div class="item-info">
              <div class="item-title text-ellipsis-2" v-html="item.Title" />
              <div class="item-desc text-ellipsis-2" v-html="item.Desc" />
              <div class="item-hot" v-html="item.hotDesc" />
            </div>
            <img class="item-image" :src="item.imgUrl" />
          </a>
        </template>
      </div>
    </div>
  </layout-default>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    }
  },
  async created() {
    const result = await this.fetch('/api/v2/GetAllInfoGzip', {
      id: 1,
      page: 0,
      type: 'pc',
    })
    this.list = result.Data.data
  },
  methods: {
    async fetch(url, params) {
      url += '?'
      const arr = []
      Object.keys(params).forEach(key => {
        arr.push(key + '=' + params[key])
      })
      url += arr.join('&')
      const response = await fetch(url)
      return await response.json()
    },
  },
}
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  .list {
    background: #ededed;
    border-radius: 6px;
    padding: 0 16px;
    width: 100%;
    min-height: 500px;
    .item {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 16px 0;
      border-bottom: 1px solid #e1e1e1;
      &::after {
        border-bottom: 0;
      }
      .item-index {
        width: 50px;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        color: #000;
        padding-right: 20px;
        &.is-hot {
          color: #ffc107;
        }
      }
      .item-info {
        padding-right: 10px;
        width: calc(100% - 180px);
        .item-title {
          font-size: 20px;
          font-weight: bold;
          color: #000;
          margin-bottom: 0.5rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .item-desc {
          font-size: 12px;
          color: #6b6b6b;
          margin-bottom: 0.5rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .item-hot {
          font-size: 12px;
          color: rgb(255, 105, 105);
        }
      }
      .item-image {
        display: block;
        width: 150px;
        height: 100px;
        flex-shrink: 0;
        border-radius: 6px;
        object-fit: cover;
      }
    }
  }
}
</style>
