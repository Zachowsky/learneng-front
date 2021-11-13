import Vue from 'vue'
import App from './App.vue'
import router from './router'
import $ from 'jquery'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import VueResource from 'vue-resource'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

Vue.component('font-awesome-icon', FontAwesomeIcon)



Vue.config.productionTip = false
Vue.use(VueResource);
Vue.use($);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
