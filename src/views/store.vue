<template>
 <div>
<!--   <binput v-model="stateValue"/>-->
<!--   <binput :value="stateValue" @input="onStateValueChange"/>-->
<!--   <p>stateValue===== {{stateValue}}</p>-->
<!--   双向绑定的方法 给计算属性设置set get -->
   <binput v-model="stateValue"/>
   <p>stateValue===== {{stateValue}}</p>
<!--   当v-model当中绑定的不是 在本组件中定义的变量 而是一个全局变量的时候 v-model会出现问题-->
   <binput @input="handleInput"/>
   <p>{{inputValue}}---- last letter is {{inputValueLastLetter}}</p>
<!--   <bshow :content="inputValue"/>-->
   <p>Appname: {{appName}}</p>
   <p> appversion: {{appNameWitnVersion}} firstLetter is ----{{firstLetter}}</p>
   <button @click="handleChangeAppName">修改appName</button>
   <p>appVersion: {{appVersion}}</p>
   <button @click="handleChangeUserName">修改userName</button>
   <p>userName--- :{{userName}} </p>
   <button @click="registModule">动态注册模块</button>
   <p v-for="(li, index) in todoList" :key="index">{{li}}</p>
  </div>
</template>

<script>
import Ainput from '_c/Ainput'
import Ashow from '_c/Ashow'

// 使用vuex提供的工具函数 去获取state当中的内容
// es6结构复制 相当于
// import vuex from 'vuex'
// const mapState = vuex.mapState;
// eslint-disable-next-line standard/object-curly-even-spacing,no-unused-vars
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

// 如果设置了 namespaced: true 使用如下方法
// import { createNamespacedHelpers } from 'vuex'
// 可传入模块名称
// const { mapState } = createNamespacedHelpers('user')

export default {
  name: 'store',
  data () {
    return {
      inputValue: ''
    }
  },
  // 注册这个组件
  components: {
    // eslint-disable-next-line vue/no-unused-components,no-undef
    binput: Ainput,
    bshow: Ashow
  },
  computed: {
    appName () {
      return this.$store.state.appName
    },
    // userName () {
    //   return this.$store.state.user.userName
    // }
    // ... 展开操作符 和上面写的效果是一样 的
    // 1、传入数组
    // ...mapState([
    //   'appName'
    // ])
    // 2、传入对象
    // ...mapState({
    //   appName: state => state.appName,
    //   userName: state => state.user.userName
    // })
    // 3、
    ...mapState({
      // userName: state => state.userName,
      appName: state => state.appName,
      appVersion: state => state.appVersion,
      // todoList: state => state.todo ? state.todo.todoList : []
      // f访问子模块的方式
      todoList: state => state.user.todo ? state.user.todo.todoList : []
      // stateValue: state => state.stateValue
    }),
    // 自定义 set get
    stateValue: {
      get () {
        return this.$store.state.stateValue
      },
      set (value) {
        // this.SET_STATE_VALUE(value)
        this.$store.commit('SET_STATE_VALUE', value)
      }
    },
    // 4、使用mapState 而不想在里面使用user 使用方法如下
    ...mapState('user', {
      userName: state => state.userName
    }),
    // ...mapState({
    //   userName: state => state.userName
    // }),
    inputValueLastLetter () {
      return this.inputValue.substr(-1, 1)
    },
    // 5、 getter
    // appNameWitnVersion () {
    //   return this.$store.getters.appNameWitnVersion
    // }
    // 命名空间写法
    ...mapGetters('user', [
      'firstLetter'
    ]),
    // 非命名空间写法
    // ...mapGetters( [
    //   'firstLetter'
    // ]),
    // mapGetters 可以直接获取根级别也就是定义在mapGeeters当中的变量
    // 当所定义的模块没有开启命名空间的时候也是可以 直接获取到模块定义的变量的 也就是user当中的firstLetter
    // 6、mapGetters
    ...mapGetters([
      'appNameWitnVersion'
    ])
    // 7 计算属性值 set get 值的写法
    // eslint-disable-next-line vue/no-dupe-keys
    // appName: {
    //   set: function (newValue) {
    //     this.inputValue = newValue + 'set方法变化的新值'
    //   },
    //   get: function () {
    //     return this.inputValue + 'get拼接'
    //   }
    // }
  },
  methods: {
    // mapMutations的使用
    // vue 会将根级别，非根级别的统统 注册在公共区域内 所以可以直接获取到 去调用
    // ...mapMutations('user', [
    //   'SET_USERNAME',
    //   'SET_APP_NAME',
    //   'SET_STATE_VALUE'
    // ]),
    ...mapMutations([
      'SET_USERNAME',
      'SET_APP_NAME',
      'SET_STATE_VALUE'
    ]),
    ...mapActions([
      'updateAppName'
    ]),
    handleInput (val) {
      this.inputValue = val
    },
    handleChangeAppName () {
      // 一个计算属性一般情况下是只有一get方法的 所以不能直接赋值
      // 而是要通过commit方法 提交给mutation 有mutation去修改他的值
      // 当然 第二个参数也可以是对象的写法，只不过 对应方法里面取值的时候就得用对象的取法
      // 还有一个参数 对象的写法如{
      // type: 'SET_APP_NAME',
      // appName: 'newAppName'
      // }
      // 对应的取值也是 params.appName
      // this.$store.commit('SET_APP_NAME', 'newAppName')
      // this.$store.commit('SET_APP_VERSION')
      // 若使用了 ...mapMutations 写法如下
      // this.SET_APP_NAME('newAppName')
      this.updateAppName()
    },
    handleChangeUserName () {
      // 在index当中是 非严格模式的时候 这样是可以修改过来的
      // this.$store.state.user.userName = 'haha'
      this.SET_USERNAME('vue-course')
      // 使用store上的实例来触发action
      // this.$store.dispatch('updateAppName', '123')
    },
    // registModule () {
    //   // 动态添加模块
    //   // 第一个参数是我们要动态添加的名称
    //   this.$store.registerModule('todo', {
    //     state: {
    //       todoList: [
    //         '学习mutations',
    //         '学习actions'
    //       ]
    //     }
    //   })
    // },
    // 给模块添加模块
    registModule () {
      // 动态添加模块
      // 第一个参数是我们要动态添加的名称
      this.$store.registerModule(['user', 'todo'], {
        state: {
          todoList: [
            '学习mutations',
            '学习actions'
          ]
        }
      })
    },
    onStateValueChange (val) {
      console.log(val)
      this.SET_STATE_VALUE(val)
    }
  }
}

</script>

<style scoped>

</style>
