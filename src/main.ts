import { createApp } from 'vue'
import App from './App.vue'
import {router} from "@/router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import store from './store'
import './assets/css/global.css'
import axios from 'axios'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router)
app.use(ElementPlus)
app.use(store)
app.mount('#app')