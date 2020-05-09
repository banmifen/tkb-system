<template>
  <div id="PayOut">
    <el-button type="text" @click="PayOutFn" >已完成缴费,返回查询页面</el-button>
  </div>
</template>

<script>
export default {
  name: 'PayOut',
  methods: {
    PayOutFn () {
      this.$router.push({
        path: '/UpInquire/报名查询/报名列表/'
      })
    }
  },
  created: function () {
    // 接受父组件传递的方法,一进来就修改title的信息
    this.$emit('titleFn')
    this.SubmitData = this.$store.state.SubmitData
  }

}
</script>

<style scoped lang="scss">
</style>
