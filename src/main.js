import Vue from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
// import BootstrapVue from 'bootstrap-vue'
// import VueRouter from 'vue-router';
Vue.config.productionTip = false

// Vue.ues(BootstrapVue)
// Vue.ues(VueRouter)
new Vue({
  render: h => h(App),
}).$mount('#app')
