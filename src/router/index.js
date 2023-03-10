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
    {
      path: '/p7-scale-image',
      name: 'p7-scale-image',
      component: () => import('../views/p7-scale-image.vue'),
    },
    {
      path: '/p10-transform',
      name: 'p10-transform',
      component: () => import('../views/p10-transform.vue'),
    },
    {
      path: '/p12-first-letter',
      name: 'p12-first-letter',
      component: () => import('../views/p12-first-letter.vue'),
    },
    {
      path: '/p14-stepper',
      name: 'p14-stepper',
      component: () => import('../views/p14-stepper.vue'),
    },
    {
      path: '/p15-vuex',
      name: 'p15-vuex',
      component: () => import('../views/p15-vuex.vue'),
    },
    {
      path: '/p16-storage',
      name: 'p16-storage',
      component: () => import('../views/p16-storage.vue'),
    },
    {
      path: '/p17-vuex-storage',
      name: 'p17-vuex-storage',
      component: () => import('../views/p17-vuex-storage.vue'),
    },
    {
      path: '/p18-storage',
      name: 'p18-storage',
      component: () => import('../views/p18-storage.vue'),
    },
    {
      path: '/p19-dialog',
      name: 'p19-dialog',
      component: () => import('../views/p19-dialog.vue'),
    },
    {
      path: '/p21-all',
      name: 'p21-all',
      component: () => import('../views/p21-all.vue'),
    },
    {
      path: '/p22-lazy',
      name: 'p22-lazy',
      component: () => import('../views/p22-lazy.vue'),
    },
    {
      path: '/p24-cors',
      name: 'p24-cors',
      component: () => import('../views/p24-cors.vue'),
    },
  ],
})

export default router
