import { createApp } from 'vue'
import vue3lottie from 'vue3-lottie';
import "@/assets/scss/style.scss"
import App from './App.vue'
import router from './router'
import { vuetify } from './plugins/vuetify'

createApp(App).use(vue3lottie, {name:'LottieAnimation'}).use(router).use(vuetify).mount('#app')
