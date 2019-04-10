import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  },
  render: h => h(App),
}).$mount('#app')
