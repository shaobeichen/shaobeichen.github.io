import Vue from 'vue'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import Toast from './plugins/toast'
Vue.use(Toast)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
