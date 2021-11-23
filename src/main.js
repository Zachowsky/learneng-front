import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import router from './router'
import $ from 'jquery'
import FlashMessage from '@smartweb/vue-flash-message';
import VueSweetalert2 from 'vue-sweetalert2';


import * as scrollTop from '../src/scripts/showScrollTop.js'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronUp, faChevronLeft, faPlayCircle, faCheckCircle, faPlusCircle, faPlus, faMinus} from '@fortawesome/free-solid-svg-icons'

library.add(faChevronUp, faChevronLeft, faPlayCircle, faCheckCircle, faPlusCircle, faPlus, faMinus);

import VueResource from 'vue-resource'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false
Vue.use(VueResource);
Vue.use($);
Vue.use(scrollTop);
Vue.use(Vuelidate);
Vue.use(FlashMessage);
Vue.use(VueSweetalert2)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
