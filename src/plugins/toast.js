// 绑定命令式toast
import toast from '@/components/sh/toast.vue'

export default {
  install(Vue) {
    Vue.prototype.$toast = options => {
      const toaseOptions = {}

      // 参数判断
      if (typeof options === 'string') {
        toaseOptions.text = options
      } else if (typeof options === 'object') {
        Object.assign(toaseOptions, options)
      }

      // 生成一个toast实例
      const toastConstructor = Vue.extend(toast)
      const instance = new toastConstructor({
        propsData: toaseOptions,
      })
      // 并将此元素插入body中
      const el = instance.$mount().$el
      document.body.appendChild(el)
    }
  },
}
