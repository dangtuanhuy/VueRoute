import Vue from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import VueRouter from 'vue-router';
Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(axios)
//Vue.ues(es)
new Vue({
  render: h => h(App),
}).$mount('#app')
