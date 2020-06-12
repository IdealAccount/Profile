import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import router from './service/router'
import store from './service/store'
import components from './config/components'
import axios from './config/axios'

Vue.config.productionTip = false

new Vue({
  components,
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
