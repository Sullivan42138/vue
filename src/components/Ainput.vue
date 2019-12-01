<template>
 <input @input="handleInput" :value="value">
</template>

<script>
export default {
  name: 'Ainput',
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },
  methods: {
    handleInput (enent) {
      console.log(' 开始改变字组件的值 ')
      const value = enent.target.value
      // 传递给父组件
      // 父子组件之间的通信 一般 父组件向字组件传值 可以以属性的方式去传值 而子组件向父组件传值一定是通过事件的方式去传值
      this.$emit('input', value)
    }
  }
}
</script>

<style scoped>

</style>
