import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueResource from 'vue-resource'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

Vue.config.productionTip = false
Vue.use(VueResource);
/*

const MyPlugin = {
  install(Vue){
    Vue.prototype.routeChange = (route) => {
        this.$router.push(route).catch(error => {
          if (error.name !== "NavigationDuplicated") {
            throw error;
          }
        });
    }
  },
}

Vue.use(MyPlugin);
*/



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
