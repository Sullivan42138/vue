import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import user from './module/user'
import getters from './getter'
// import saveInLocal from './plugin/saveInLocal'

Vue.use(Vuex)
// Vuex.Store创建实例
// export default new Vuex.Store({
//   state,
//   mutations,
//   actions,
//   getters,
//   modules: {
//     user
//   },
//   plugins: [ saveInLocal ]
// })
// 严格模式
export default new Vuex.Store({
  strict: process.env.NODE_ENV === 'development', // 开启严格模式 这时候 你如果用赋值的方式直接去修改state当中的值 那么就会 报一个错误
  state,
  mutations,
  actions,
  getters,
  modules: {
    user
  }
  // plugins: [ saveInLocal ]
})
