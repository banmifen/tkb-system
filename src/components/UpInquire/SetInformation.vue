<template>
  <div id="setInformation"></div>
</template>

<script>
export default {
  name: 'setUp',
  methods: {},
  created: function () {
    // 接受父组件传递的方法,一进来就修改title的信息
    this.$emit('titleFn')
    this.SubmitData = this.$store.state.SubmitData
    console.log(this.$store.state.SubmitData)
  }
}
</script>

<style scoped lang="scss">
</style>
