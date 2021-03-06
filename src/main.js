import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueApexCharts from 'vue-apexcharts'

Vue.component('apexchart', VueApexCharts)
Vue.use(VueApexCharts)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
