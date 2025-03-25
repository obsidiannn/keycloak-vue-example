import Vue from 'vue'

import ElementUI from 'element-ui'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css'
// import '@/styles/index.scss'
import router from './router'

Vue.use(ElementUI, { size: 'small' })

const vue = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

export default vue
