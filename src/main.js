import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/base.scss'
// 1.导入elementUI和elementCss文件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 2.告诉Vue我们需要在项目中使用elementUI
Vue.use(ElementUI)
// import {
//   Button,
//   Input,
//   MenuItem
// } from 'element-ui'
// Vue.use(Button)
// Vue.use(Input)
// Vue.use(MenuItem)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
