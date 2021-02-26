import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/base.css'
import './assets/fonts/iconfont.css'
import './assets/css/question.css'

import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8180/' // 关键步骤–填写后台请求统一的地址
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.config.productionTip = false
Vue.prototype.$addr = axios

Vue.prototype.$axios = axios// 全局注册，使用方法为:this.$axios
// Vue.prototype.qs = qs// 全局注册，使用方法为:this.qs
global.qs = require('qs')

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

