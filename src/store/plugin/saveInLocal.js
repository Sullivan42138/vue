// 刷新浏览器第一次调用
// 持久化的一种机制
export default store => {
  console.log('store初始化了')
  // 如果存在 则替换掉 当前实例里面存在的state
  if (localStorage.state) store.replaceState(JSON.parse(localStorage.state))
  // 当你每次提交mutation之后，都会执行在这里插入的回掉函数
  store.subscribe((mutation, state) => {
    // console.log('提交mutation')
    localStorage.state = JSON.stringify(state)
  })
}
