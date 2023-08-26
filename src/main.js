import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import Toast from './plugins/toast'
import filters from './plugins/filters'

import './assets/style/index.scss'

import 'vant/es/toast/style'
import 'vant/es/dialog/style'
import 'vant/es/notify/style'
import 'vant/es/image-preview/style'

Vue.use(Toast)
Vue.use(filters)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
