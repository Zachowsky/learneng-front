import Vue from 'vue'
import App from './App.vue'
import router from './router'
import $ from 'jquery'
import * as scrollTop from '../src/scripts/showScrollTop.js'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronUp, faChevronLeft, faPlayCircle, faCheckCircle, faPlusCircle} from '@fortawesome/free-solid-svg-icons'

library.add(faChevronUp, faChevronLeft, faPlayCircle, faCheckCircle, faPlusCircle);

import VueResource from 'vue-resource'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false
Vue.use(VueResource);
Vue.use($);
Vue.use(scrollTop);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
