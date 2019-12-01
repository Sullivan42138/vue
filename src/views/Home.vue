<template>
  <div class="home">
    <b>{{food}}</b>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转push</button>
    <button @click="handleClick('push')">跳转push</button>
    <button @click="getUserInfo">获取数据</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import axios from 'axios'
import { getUserInfo} from '../api/user'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  },
  // 路由出发进入时调用 但是这时候页面还没有渲染 获取不到this
  beforeRouteEnter (to, from, next) {
    // console.log(to.name)
    // console.log(from.name)
    // next()
    // 若想使用this vm就是你当前组件的实例
    next(vm => {
      console.log(vm)
    })
  },
  // 页面离开时调用 比如提示用户是否保存 之后再离开 可以用this
  // beforeRouteLeave (to, from, next) {
  //   const leave = confirm('确定要离开吗')
  //   if (leave)next()
  //   else next(false)
  // },
  // 路由发生变化 组件被复用的时候调用  可以用this
  beforeRouteUpdate (to, from, next) {
    console.log(to.name, from.name)
  },
  methods: {
    handleClick (type) {
      const name = 'bbbb'
      if (type === 'back') {
        this.$router.go(-1)
      } else {
        // this.$router.push('/parent')
        this.$router.push({
          // name: 'argu',
          // params: {
          //   name: 'aaa'
          // }
          // 简写
          path: `/argu/${name}`
          // 注意 path+params的组合方式 是会直接忽略你params里面的的值
          // query: {
          //   name: 'sulliven'
          // }
        })
      }
      // push 和 replace 区别
      // push是在当前路由站加入一个路由 所以你返回的是上一级
      // replace 是直接替换 没有在zhan当中添加，所以看起来你返回的是上上级页面
      // this.$router.go(-1)
    //  this.$router.back()
    },
    getUserInfo () {
      //
      // eslint-disable-next-line standard/object-curly-even-spacing
      getUserInfo({ userId: 21 }).then(res => {
        console.log('res', res)
      })
      // axios.post('getuserinfo', { userId: 21 }).then(res => {
      //   console.log(res)
      // })
    }
  }
}
</script>
