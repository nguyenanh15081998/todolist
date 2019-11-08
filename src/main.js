import Vue from 'vue'
import './plugins/fontawesome'
import Vuex from 'vuex'
import App from './App.vue'
import { store } from './store/store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false
Vue.use(Vuex)
new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
