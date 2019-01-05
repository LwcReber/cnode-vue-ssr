import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import App from './app.vue'
import createStore from './store/store'
import createRouter from './router/router'
import Tabs from './components/tabs'
import components from './components'

import './assets/styles/theme.styl'
import './assets/styles/global.styl'
import './assets/styles/iconfont.styl'
import './assets/styles/flex.styl'

if (typeof window !== 'undefined') {
  require('lib-flexible')
  const FastClick = require('fastclick')
  FastClick.attach(document.body)
}

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Meta)
Vue.use(Tabs)

// 注册组件
Object.keys(components).forEach((key) => {
  // 首字母大写
  var name = key.replace(/(\w)/, (v) => v.toUpperCase())
  Vue.component(`v${name}`, components[key])
})

export default () => {
  const router = createRouter()
  const store = createStore()
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  return { app, router, store }
}
