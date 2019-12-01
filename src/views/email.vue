<template>
<div class="email">
  <button @click="handleClick">push</button>
</div>
</template>

<script>
export default {
  name: 'email',
  methods: {
    handleClick () {
      // 给bus绑定事件
      this.$bus.$emit('on-Click', 'hello')
      // 当前组件绑定
      // this.$emit('on-Click', 'hello')
    }
  },
  mounted () {
    // console.log(this.$bus)
    // 当前组件接受
    this.$on('on-Click', mes => {
      console.log(mes)
    })
  }
}
</script>

<style scoped>
.email{
  border: 1px solid green;
}
</style>
