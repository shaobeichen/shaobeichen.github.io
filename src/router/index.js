import { createRouter, createWebHistory } from 'vue-router'

const list = import.meta.glob('@/views/*.vue', { import: 'default', eager: true })
const routers = Object.keys(list).map(key => {
  const name = key.replace('/src/views/', '').replace('.vue', '')
  return {
    name: name,
    path: '/' + name,
    component: list[key],
  }
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: '/',
      path: '/',
      component: () => import('../views/index.vue'),
    },
    ...routers,
  ],
})

export default router
