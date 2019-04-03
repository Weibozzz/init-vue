import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)
const state = {
  isLoading: false,
  format: 'YYYY-MM-DD',
  formatDate: 'YYYY-MM-DD HH:mm:ss'
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})
