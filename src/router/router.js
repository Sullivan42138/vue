import Home from '@/views/Home.vue'
export default [
  {
    // 一个基本的路由对象必须包含两个属性 一个是 path 一个是 component

    path: '/',
    name: 'home',
    alias: 'home_page',
    component: Home,
    props: route => ({
      food: route.query.food
    })
    // 路由独享守卫
    // beforeEnter: (to, from, next) => {
    //   if (from.name === 'about') alert('这是从about页面来的')
    //   else alert('这不是从about页来的')
    //   next()
    // }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 懒加载的作用 只有你访问这个路由的时候才会去加载这个页面组建
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    props: {
      food: 'banana'
    },
    // 路由元信息
    meta: {
      title: 'about'
    }
  },
  // 动态匹配路由
  {
    path: '/argu/:name',
    name: 'argu',
    component: () => import('@/views/Argu.vue'),
    // 会使用route的params值作为属性 传入页面的props当中的name中
    props: true
  },
  // 嵌套路由
  {
    path: '/parent',
    component: () => import('@/views/Parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('@/views/Child.vue')
      }
    ]
  },
  // 命名视图
  {
    path: '/mine_view',
    components: {
      default: () => import('@/views/Child.vue'),
      email: () => import('@/views/email.vue'),
      phone: () => import('@/views/phone.vue')
    }
  },
  // 重定向
  {
    path: '/main',
    // redirect: '/'
    // redirect: {
    //   name: 'about'
    // }
    redirect: to => {
      console.log(to)
      return {
        name: 'about'
      }
    }
  },
  {
    path: '/store',
    component: () => import('@/views/store.vue')
  },
  {
    path: '*',
    component: () => import('@/views/error_404.vue')
  }

]
