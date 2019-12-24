<template>
  <div id="setUp">
      <ul class="info">
        <li>修改密码</li>
        <li><span>账号:</span><el-input placeholder="请输入账号" v-model="user" disabled  clearable></el-input></li>
        <li><span>原密码:</span><el-input placeholder="请输入密码" v-model="psw" show-password></el-input></li>
        <li><span>新密码:</span><el-input placeholder="请输入密码" v-model="psw1" show-password></el-input></li>
        <li><span>确认密码:</span><el-input placeholder="请确认密码" v-model="psw2" show-password></el-input></li>
        <li><el-button type="primary" round @click="loginFn">确认修改</el-button></li>
      </ul>
  </div>
</template>
<script>
export default {
  name: 'setUp',
  methods: {
    loginFn () {
      if (this.psw !== '' && this.psw1 !== '' && this.psw2 !== '') {
        if (this.psw === this.$store.state.account[this.user]) {
          if (this.psw1 === this.psw2) {
            if (this.psw1 !== this.$store.state.account[this.user]) {
              this.$store.state.account[this.user] = this.psw1
              // console.log(this.$store.state.account[this.user])
              this.psw = ''
              this.psw1 = ''
              this.psw2 = ''
              this.$message({
                message: '修改完成',
                type: 'success'
              })
            } else {
              this.$message({
                message: '不能跟原密码相同',
                type: 'warning'
              })
            }
          } else {
            this.$message({
              message: '两次新密码输入不一致',
              type: 'warning'
            })
          }
        } else {
          this.$message({
            message: '原密码错误',
            type: 'warning'
          })
        }
      } else {
        this.$message({
          message: '请将表格填写完整',
          type: 'warning'
        })
      }
    }
  },
  created: function () {
    // let keys = []
    // for (let i in this.$store.state.account) {
    //   keys.push(i)
    // }
    // console.log(keys)
    this.user = this.$store.state.myAccount
    // console.log(this.$store.commit('mAdd'))
    // this.leaderData1 = this.$store.commit('gitLeaderData1')
    // console.log(this.leaderData1)
    // this.leaderData1 = this.$store.state.leaderData1
  },
  beforeDestroy: function () {
    this.leaderData = {}
    // this.$store.state.leaderData1 = {}
  },
  data () {
    return {
      user: '',
      psw: '',
      psw1: '',
      psw2: '',
      leaderData1: { name: '' }
    }
  }
}
</script>
<style scoped lang="scss">
@import '../assets/css/variable.scss';
#setUp{
  .info {
    position: absolute;
    top: 30%;
    left: 40%;
    transform: translate(-30%, -40%);
    width: 400px;
    height: 400px;
    background: white;
    border: 1px solid $color_border;
    li{
      display: flex;
      // align-content: space-around;
      justify-content: space-around;
      margin-bottom: 15px;
      padding: 1%;
      span{
        text-align: center;
        margin: auto 0;
        color: $color_blue;
        width: 14%;
      }
      .el-input{width: 80%;}
      &:nth-of-type(1) {
          display: block;
          text-align: center;
          color: $color_blue;
          font-size: 30px;
          margin-top: 0;
        }
    }
  }
}
</style>
