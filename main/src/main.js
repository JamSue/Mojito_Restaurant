import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import i18n from './lang'
Vue.config.productionTip = false

Vue.use(Element)
new Vue({
  render: h => h(App),
  i18n
}).$mount('#app')
