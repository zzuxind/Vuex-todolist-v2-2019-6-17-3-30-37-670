import Vue from 'vue'
import Vuex from 'vuex'
import store from './store/index'
import VueRouter from 'vue-router';
import router from './router/index'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueRouter)

const vueStore = new Vuex.Store(store)
const vueRouter=new VueRouter(router)
new Vue({
  store:vueStore,
  router:vueRouter,
  render: h => h(App),
}).$mount('#app')
