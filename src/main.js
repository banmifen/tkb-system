import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/base.scss'
import {
  Button,
  Input
} from 'element-ui'
// Vue.use(ElementUI)
Vue.use(Button)
Vue.use(Input)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
