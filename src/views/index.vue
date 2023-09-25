<template>
  <div class="page">
    <div class="container">
      <div class="title">
        <div class="welcome">Welcome Back,</div>
        <div class="name">我是少北晨</div>
        <div class="shine" />
      </div>

      <div class="list">
        <sh-link
          v-for="(item, index) in list"
          :key="index"
          class="item"
          :url="item.url"
        >
          <img class="icon" :src="item.icon" />
          <div class="text">{{ item.text }}</div>
        </sh-link>
      </div>

      <div class="products">
        <div class="product-title">My Recommend</div>
        <div class="product-list">
          <sh-link
            v-for="(item, index) in products"
            :key="index"
            class="product-item"
            :url="item.url"
          >
            <div
              class="product-item-background"
              :style="{ backgroundImage: `url(${item.icon})` }"
            />
            <div class="product-item-text">{{ item.text }}</div>
          </sh-link>
        </div>
      </div>

      <div class="footer">
        <span id="busuanzi_container_site_pv"
          >本站总访问量：<span id="busuanzi_value_site_pv"></span
        ></span>
      </div>
    </div>
  </div>
</template>
<script>
import douyin from '@/assets/images/douyin.png'
import bilibili from '@/assets/images/bilibili.png'
import github from '@/assets/images/github.png'
import example from '@/assets/images/example.png'
import nimble from '@/assets/images/nimble.png'
import adarkroom from '@/assets/images/adarkroom.jpg'

export default {
  data() {
    return {
      list: [
        {
          url: 'https://github.com/shaobeichen',
          text: 'Github',
          icon: github,
        },
        {
          url: 'https://space.bilibili.com/13310258',
          text: '哔哩哔哩',
          icon: bilibili,
        },

        {
          url: 'https://www.douyin.com/user/MS4wLjABAAAAGFwkGb3S8UPIB7FhtK7K6n-nCFnPbTTth4HZ2I6Wbv0',
          text: '抖音',
          icon: douyin,
        },
        {
          url: '/posts/home',
          text: '代码案例',
          icon: example,
        },
        {
          url: '/nimble',
          text: '灵动Canvas',
          icon: nimble,
        },
      ],
      products: [
        {
          url: '/room/index.html',
          text: '小黑屋',
          icon: adarkroom,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.page {
  min-height: 100vh;
  background: linear-gradient(180deg, #1c1e1f, #0a0f14);
  color: white;
  user-select: none;
  .container {
    position: relative;
    width: 375px;
    margin: 0 auto;
    padding: 15px;
    .islands {
      position: absolute;
      z-index: 0;
      right: 50px;
      top: 60px;
      width: 50px;
      opacity: 0.7;
    }
    .title {
      position: relative;
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
        width: calc(33.33% - 7px);
        aspect-ratio: 1 / 1;
        border-radius: 20px;
        padding: 15px;
        margin: 0 10px 10px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-shrink: 0;
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
      position: relative;
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
          display: block;
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
    .footer {
      margin-top: 100px;
      text-align: center;
    }
  }
}
</style>
