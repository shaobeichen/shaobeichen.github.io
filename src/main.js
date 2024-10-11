import './assets/main.css'
// import './assets/fonts/SmileySans-Oblique/font.css'
import 'animate.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ConfigInput from './components/config/input.vue'
import ConfigButton from './components/config/button.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('config-input', ConfigInput)
app.component('config-button', ConfigButton)

app.mount('#app')
