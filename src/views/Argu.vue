<template>
<div>{{name}}</div>
</template>

<script>
export default {
  name: 'argu',
  props: {
    name: {
      type: String,
      default: 'sulliven11111'
    }
  },
  // 路由发生变化 组件被复用的时候调用
  beforeRouteUpdate (to, from, next) {
    console.log(to.name, from.name)
  }
}
</script>

<style scoped>

</style>
