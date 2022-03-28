import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/main.css';
import movable from "v-movable";

Vue.config.productionTip = false
Vue.use(movable);

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
