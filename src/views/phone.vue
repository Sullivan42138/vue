<template>
  <div class="tel">{{message}}</div>
</template>

<script>
export default {
  name: 'phone',
  data () {
    return {
      message: ''
    }
  },
  mounted () {
    // 接受绑定在bus之上的事件
    this.$bus.$on('on-Click', mes => {
      this.message = mes
    })
  }
}
</script>

<style scoped>
.tel{
  border: 1px solid red;
}
</style>
