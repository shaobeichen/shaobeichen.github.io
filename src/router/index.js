import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  scrollBehavior() {
    return { left: 0, top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home.vue'),
    },
    {
      path: '/toast',
      name: 'toast',
      component: () => import('../views/toast.vue'),
    },
    {
      path: '/filter',
      name: 'filter',
      component: () => import('../views/filter.vue'),
    },
  ],
})

export default router
