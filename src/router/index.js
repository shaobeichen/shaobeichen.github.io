import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
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
      path: '/nocode',
      name: 'nocode',
      component: () => import('../views/nocode.vue'),
    },
    {
      path: '/p1-toast',
      name: 'p1-toast',
      component: () => import('../views/p1-toast.vue'),
    },
    {
      path: '/p3-filter',
      name: 'p3-filter',
      component: () => import('../views/p3-filter.vue'),
    },
    {
      path: '/p4-onbeforeunload',
      name: 'p4-onbeforeunload',
      component: () => import('../views/p4-onbeforeunload.vue'),
    },
    {
      path: '/p5-vmodel',
      name: 'p5-vmodel',
      component: () => import('../views/p5-vmodel.vue'),
    },
  ],
})

export default router