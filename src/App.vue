<template>
  <div id="app">
    <div id="nav">
<!-- router-link 封装了a标签      -->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--      命名跳转-->
      <router-link :to="{ name : 'home'}">Home</router-link> |
      <router-link v-bind:to="{ name: 'about'}">About</router-link>
    </div>
<!-- router-view页面渲染组建   -->
    <router-view/>
<!--    在同一个页面上显示多个视图，用到命名视图 而且让每一个视图显示在指定的位置-->
<!--    <transition-group name="router">-->
    <transition-group :name="routerTransition">
    <router-view key="default"/>
    <router-view key="email" name="email"/>
    <router-view key="phone" name="phone"/>
    </transition-group>
  </div>
</template>
<script>
export default {
  data () {
    return {
      routerTransition: ''
    }
  },
  watch: {
    '$route' (to) {
      // eslint-disable-next-line no-unused-expressions
      to.query && to.query.transitionName && (this.routerTransition = to.query.transitionName)
    }
  }
}
</script>

<style lang="less">
  .router-enter{
    opacity: 0;
  }
  .router-enter-active{
    transition: opacity 1s ease;
  }
  .router-enter-to{
    opacity: 1;
  }

  .router-leave{
    opacity: 1;
  }
  .router-leave-active{
    transition: opacity 1s ease;
  }
  .router-leave-to{
    opacity: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
