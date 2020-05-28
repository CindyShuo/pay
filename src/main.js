import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import 'babel-polyfill'

// 导入样式
import './assets/css/index.styl'

// 导入插件
import plugins from './plugins'
import mixins from './plugins/mixins'

// vant
import { Popup, Picker } from 'vant'

Vue.config.productionTip = false

Vue.use(plugins)
Vue.mixin(mixins)

// 注册vant
Vue.use(Popup)
Vue.use(Picker)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
