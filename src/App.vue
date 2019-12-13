<template>
  <div id="app">
    <div class="login" v-show="isShow" @click.self="login">
      <div>
        <div class="info">
          <ul>
            <li>登录</li>
            <li>
              <el-input
                placeholder="请输入账号"
                v-model="user"
                clearable>
              </el-input>
            </li>
            <li>
              <el-input placeholder="请输入密码" v-model="psw" show-password></el-input>
            </li>
            <li>
              <el-input v-model="vcode" placeholder="验证码"></el-input>
              <a href="#"><img src="./images/验证码.png"></a>
            </li>
            <li>
              <el-button type="primary" round>登录</el-button>
              <el-button type="primary" round>注册</el-button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="frame">
      <div class="frame-top">
        <ul>
          <li>
            <span>体育竞赛</span>
            <span>报名管理系统</span>
          </li>
          <li>
            <a href="#" @click="login">登录</a>
            <a href="#">退出</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
// import Login from './components/Login.vue';
export default {
  name: 'App',
  components: {},
  data: function () {
    return {
      isShow: true,
      user: '',
      psw: '',
      vcode: ''

    }
  },
  methods: {
    login () {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style scoped lang="scss">

#app {
  width: 100%;
  height: 100%;
  .login {
    display: flex;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    position: relative;
    background: rgba(0, 0, 0, 0.2);
    .info {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 400px;
      height: 300px;
      background: white;
      ul{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        li{
          margin-bottom: 20px;
          display: flex;
          justify-content: space-between;
          &:nth-of-type(1){
            display: block;
            text-align: center;
            color: #1e90ff;
            font-size: 30px;
            margin-top: 0;
          }
          &:nth-of-type(4){
            width: 200px;
          }
          // &:last-child{
          //   display: flex;
          //   justify-content: space-between;
          // }
        }
      }
    }
  }
  .frame {
    width: 100%;
    height: 100%;
    .frame-top {
      position: fixed;
      width: 100%;
      height: 50px;
      top: 0;
      left: 0;
      background: #1e90ff;
      ul {
        display: flex;
        justify-content: space-between;
        margin-left: 2%;
        margin-right: 2%;
        line-height: 50px;
        li:nth-of-type(1) {
          color: #fff0f5;
          span:nth-of-type(1) {
            font-size: 20px;
            font-weight: bold;
            margin-right: 2px;
          }
          span:nth-of-type(2) {
            font-size: 15px;
          }
        }
        li:nth-of-type(2) {
          font-size: 15px;
          a:nth-of-type(1) {
            color: #fff0f5;
            margin-right: 20px;
          }
          a:nth-of-type(2) {
            color: #fff0f5;
            font-size: 15px;
          }
        }
      }
    }
  }
}
</style>
