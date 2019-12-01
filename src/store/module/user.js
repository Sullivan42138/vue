const state = {
  userName: 'sulliven-user'
}
const getters = {
  firstLetter: (state) => {
    return state.userName.substr(0, 1)
  }
}
// 定义在模块当中的 mustations
const mutations = {
  SET_USERNAME (state, params) {
    state.userName = params
  }
}
const actions = {
  // commit用来提交实例
  // 其他参数  state 在模块当中指的就是当前 模块的 state
  // rootState 指的就是 你在index 当中引入的 state 可以访问根级别的state
  // dispach 用于触发当前actions当中的其他方法
  updateDemo ({ commit, state, rootState, dispach }) {
    dispach('demo2', '')
  },
  demo2 () {
    //
  }
}

export default {
  namespaced: true,
  getters,
  state,
  mutations,
  actions,
  // 模块内部还可以包含模块
  // 对应引用下一级模块的写法是 'user/index'
  modules: {
    //
  }
}
