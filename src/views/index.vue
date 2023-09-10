<template>
  <div class="page">
    <div class="container">
      <div class="title">
        <div class="welcome">Welcome Back,</div>
        <div class="name">我是少北晨</div>
        <div class="shine" />
      </div>

      <div class="list">
        <div
          v-for="(item, index) in list"
          :key="index"
          class="item"
          @click="linkTo(item)"
        >
          <img class="icon" :src="item.icon" :alt="item.text" />
          <div class="text">{{ item.text }}</div>
        </div>
      </div>

      <div class="products">
        <div class="product-title">My Recommend</div>
        <div class="product-list">
          <div
            class="product-item"
            v-for="(item, index) in products"
            :key="index"
            @click="linkTo(item)"
          >
            <div
              class="product-item-background"
              :style="{ backgroundImage: `url(${item.icon})` }"
            ></div>
            <div class="product-item-text">{{ item.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import douyin from '@/assets/images/douyin.png'
import bilibili from '@/assets/images/bilibili.png'
import example from '@/assets/images/example.png'
import adarkroom from '@/assets/images/adarkroom.jpg'

export default {
  data() {
    return {
      list: [
        {
          link: '/posts/home',
          text: '代码案例',
          icon: example,
        },
        {
          open: 'https://www.douyin.com/user/MS4wLjABAAAAGFwkGb3S8UPIB7FhtK7K6n-nCFnPbTTth4HZ2I6Wbv0',
          text: '抖音',
          icon: douyin,
        },
        {
          open: 'https://space.bilibili.com/13310258',
          text: '哔哩哔哩',
          icon: bilibili,
        },
      ],
      products: [
        {
          open: '/room/index.html',
          text: '小黑屋',
          icon: adarkroom,
        },
      ],
    }
  },
  methods: {
    linkTo(item) {
      if (item.open) window.open(item.open)
      else if (item.link) this.$router.push(item.link)
    },
  },
}
</script>

<style lang="scss" scoped>
.page {
  min-height: 100vh;
  background: linear-gradient(180deg, #1c1e1f, #0a0f14);
  color: white;
  .container {
    width: 375px;
    margin: 0 auto;
    padding: 15px;
    .title {
      font-size: 40px;
      font-weight: 500;
      .welcome {
        color: white;
      }
      .name {
        color: #f1a194;
        padding-bottom: 10px;
      }
      .shine {
        width: 30px;
        box-shadow: 0 0 120px 35px #f1a194;
        transform: translateY(-20px);
      }
    }
    .list {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-wrap: wrap;
      .item {
        cursor: pointer;
        border: 0.5px solid #36393b;
        background: #1c1f21;
        flex: 1;
        aspect-ratio: 1 / 1;
        border-radius: 20px;
        padding: 15px;
        margin: 0 10px 10px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &:nth-child(3n) {
          margin: 0 0 10px 0;
        }
        &:hover {
          @keyframes shake {
            0% {
              transform: rotate(0deg);
            }
            34% {
              transform: rotate(-30deg);
            }
            64% {
              transform: rotate(30deg);
            }
            100% {
              transform: rotate(0deg);
            }
          }
          .icon {
            animation: shake 1s;
            transform-origin: bottom;
            transition: all 0.5s;
          }
        }
        .icon {
          width: 30px;
          height: 30px;
          flex-shrink: 0;
          filter: drop-shadow(0 0 5px white);
        }
        .text {
          font-size: 16px;
        }
      }
    }
    .products {
      margin-top: 10px;
      .product-title {
        font-size: 28px;
        margin-bottom: 20px;
      }
      .product-list {
        .product-item {
          cursor: pointer;
          border: 0.5px solid #36393b;
          background: #1c1f21;
          width: 100%;
          height: 125px;
          border-radius: 20px;
          padding: 20px;
          margin: 0 0 10px 0;
          font-size: 24px;
          position: relative;
          overflow: hidden;
          &:hover {
            .product-item-background {
              filter: brightness(1);
            }
            .product-item-text {
              opacity: 0.5;
            }
          }
          .product-item-background {
            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            transition: all 0.3s linear;
            filter: brightness(0.3);
            position: absolute;
            left: 0;
            top: 0;
            z-index: 0;
          }
          .product-item-text {
            transition: all 0.3s linear;
            position: absolute;
            left: 15px;
            bottom: 15px;
            z-index: 1;
          }
        }
      }
    }
  }
}
</style>
