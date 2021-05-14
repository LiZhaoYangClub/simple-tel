import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { MyComponent } from '@/components'
import { MyDirective } from '@/directives'
import { Button, Pagination } from 'ant-design-vue'

import './icons'
import '@/styles/index.less'

Vue.config.productionTip = false

Vue.use(MyComponent)
Vue.use(MyDirective)
Vue.use(Button)
Vue.use(Pagination)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
