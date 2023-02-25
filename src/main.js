import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import Toast from './plugins/toast'
import filters from './plugins/filters'

import './assets/style/index.scss'

Vue.use(Toast)
Vue.use(filters)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
