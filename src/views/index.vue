<template>
  <main>
    <h1 class="text-3xl font-bold">Hello world!</h1>
    <div v-for="(item, index) in list" :key="index">
      <a v-if="item.open" :href="item.open">
        {{ item.text }}
      </a>
      <router-link v-else-if="item.link" :to="item.link">
        {{ item.text }}
      </router-link>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          link: '/posts/home',
          text: '代码案例',
        },
        {
          open: '/room/index.html',
          text: '小黑屋',
        },
      ],
    }
  },
}
</script>
