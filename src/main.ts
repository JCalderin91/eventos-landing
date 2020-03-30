import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import "@/assets/bootstrap/css/bootstrap.min.css"
import "@/assets/css/style.css"
import "@/assets/css/font-awesome.css"
import "@/assets/css/menu.css"
import "@/assets/css/color/color.css"
import "@/assets/css/testimonial/style.css"
import "@/assets/css/testimonial/elastislide.css"
import "@/assets/css/responsive.css"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
