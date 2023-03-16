import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const list = import.meta.glob('@/views/*.vue', { import: 'default', eager: true })
const routers = Object.keys(list).map(key => {
  const name = key.replace('/src/views/', '').replace('.vue', '')
  return {
    name: name,
    path: '/' + name,
    component: list[key],
  }
})

const router = new VueRouter({
  mode: 'hash',
  base: import.meta.env.BASE_URL,
  scrollBehavior() {
    return { left: 0, top: 0 }
  },
  routes: [
    {
      name: 'main',
      path: '/',
      component: () => import('../views/home.vue'),
    },
    ...routers,
  ],
})

export default router
