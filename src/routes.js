import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: () => import('./pages/index')
  },
  {
    path: '*',
    redirect: '/'
  }
]
export default new VueRouter({
  routes
})
