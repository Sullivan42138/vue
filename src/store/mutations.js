import vue from 'vue'
// vuex会将get mutations action 不管是模块里定义的 还是根级别定义的，它都会注册在全局
// 可以通过 ...mutations 获取的到
const mutations = {
  // 修改state的值
  // 参数state 指代同级的对象 第二个参数就是一个载荷 一个对象
  SET_APP_NAME (state, params) {
    state.appName = params
  },
  // 增加state当中的值
  SET_APP_VERSION (state) {
    vue.set(state, 'appVersion', 'v2.0')
    //  state.appVersion = 'v2.0'
    // 这样直接赋值是不会触发视图的更新的
    // 也就是说  原先没有定义在state或者其他模块当中的变量，你想要用mutation取增加的时候
    // 要使用 vue.set()方法， 否则这个变量是不会有get set 方法的
  },
  SET_STATE_VALUE (state, value) {
    state.stateValue = value
  }
}
// mustations 只是支持同步的操作 是不能通过ajax去异步获取的
// 所以这种做法是 请求接口获取一个值 然后再去改变mutations当中的值 用到action
export default mutations
