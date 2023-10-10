import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import 'bootstrap/dist/js/bootstrap.js'
import {createPinia} from 'pinia'

const app = createApp(App).use(createPinia())

app.use(router)

app.mount('#app')
