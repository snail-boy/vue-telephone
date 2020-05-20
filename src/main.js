import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css/normalize.css'
import './styles/index.scss'

require('es6-promise').polyfill()
import './icons' // icon
import '@/directive/index'

import VueTelephone from './plugin/vue-telephone'
Vue.use(VueTelephone)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
