import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index'
import './VueUse/index'
import 'vant/lib/index.css';
import './vantui'


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')