import Vue from 'vue'

import App from './App.vue'
import router from './router'

import './assets/style/index.scss'

import Toast from './plugins/toast'
Vue.use(Toast)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
