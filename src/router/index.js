import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import { setTitle } from '@/lib/util'

// Router作为一个插件需要use引入

Vue.use(Router)
// export default new Router({
//   routes: routes
// })

const router = new Router({
  routes
})

const HAS_LOGIN = true
// 全局前置守卫的设置
router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)
  if (to.name !== 'login') {
    if (HAS_LOGIN) next()
    // eslint-disable-next-line standard/object-curly-even-spacing
    else next({ name: 'login' })
  } else {
    if (HAS_LOGIN) next({ name: 'home' })
    else next()
  }
})
// router.post('/getuserinfo', function (req, res, next) {
//   console.log('请求成功')
//   res.status(200).send({
//     code: 200,
//     data: {
//       name: 'Sulliven'
//     }
//   })
// })

// router.beforeResolve() 和each一样  但是他是导航在被确认之前
// 后置钩子 不能组织页面跳转 只能处理一些简单逻辑
router.afterEach((to, from) => {
  // logining = false 取消等待加载等
})

// export default new Router({
//   // 默认是hash模式 所以你看到的浏览器上默认是#
//   //  这里我们更改模式为 history 无刷新页面的跳转 需要后段的支持
//   // mode: 'history',
//   routes
// })
// 完整的解析流程
/**
 * 1.导航被触发
 * 2.在失活的组件 （即将要离开的页面组件）里调用离开守卫 beforeRouterLeave
 * 3. 调用全局的前置守卫 beforeEach
 * 4. 在重用的组件里调用 复用组件 beforeUpdate
 * 5.调用路由独享的守卫 beforeEnter
 * 6.解析一步路由组件
 * 7. 在激活的组件（即将进入的页面）里调用 beforeRouterEnter
 * 8.调用全局的解析守卫 beforeResolve
 * 9.导航被确认
 * 10. 调用全局的后置守卫 afterEach
 * 11.触发DOM的渲染
 * 12.用创建好的实例调用 beforeRouterEnter守卫里传给next的回掉函数
 */
export default router
