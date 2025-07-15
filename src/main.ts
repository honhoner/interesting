// import './style.css'
import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import ElementPlus from 'element-plus'

createApp(App).use(ElementPlus).use(router).mount('#app')
