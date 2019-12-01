import { getAppName } from '@/api/app.js'
// vuex会将get mutataion action 不管是模块里定义的 还是根级别定义的，它都会注册在全局
// 可以通过 ...mapActions 获取的到
const actions = {
//   updateAppName ({ commit }) {
//     getAppName().then(res => {
//       // 提交修改appName的操作
//       // commit('SET_APP_NAME', res.info.appName)
//       // es6
//       // eslint-disable-next-line no-unused-vars
//       const { code, info: { appName } } = res
//       commit('SET_APP_NAME', appName)
//       // console.log(res)
//     }).catch(err => {
//       console.log(err)
//     })
//   }
  // 异步处理
  async updateAppName ({ commit }) {
    try {
      const { info: { appName } } = await getAppName()
      commit('SET_APP_NAME', appName)
    } catch (err) {
      console.log(err)
    }
  }
}
export default actions
