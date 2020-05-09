<template>
  <div id="app">
    <template>
      <div class="Tips">
        <p>默认账号: 123456</p>
        <p>默认密码: 654321</p>
        <p>也可直接注册</p>
      </div>
      <div class="login" v-show="isShow">
        <div style="display: flex; margin-top: 20px; height: 100px;">
          <transition name="el-zoom-in-top">
            <div v-show="loginShow" class="info transition-box">
              <ul>
                <li>登录</li>
                <li><el-input placeholder="请输入账号" v-model="login.user" clearable></el-input></li>
                <li><el-input placeholder="请输入密码" v-model="login.psw" show-password></el-input></li>
                <li>
                  <el-input v-model="login.vcode" placeholder="验证码"></el-input>
                  <a href="#"><img src="./images/验证码.png" /></a>
                </li>
                <li>
                  <!-- <el-button type="primary" round @click="isShow = !isShow">登录</el-button> -->
                  <el-button type="primary" round @click="loginFn">登录</el-button>
                  <el-button type="primary" round @click="changeRegisterFn">注册</el-button>
                </li>
              </ul>
              <template>
                <el-link type="info" class="get-psw" lass="get-psw" @click="open">查看默认密码</el-link>
              </template>
              <!-- <el-link type="info" class="get-psw">查看默认密码</el-link> -->
            </div>
          </transition>
          <transition name="el-zoom-in-top">
            <div v-show="registerShow" class="info transition-box">
              <ul>
                <li>注册</li>
                <li><el-input placeholder="请输入账号" v-model="register.user" clearable></el-input></li>
                <li><el-input placeholder="请输入密码" v-model="register.psw" show-password></el-input></li>
                <li><el-input placeholder="请确认密码" v-model="register.psw2" show-password></el-input></li>
                <li>
                  <el-button type="primary" round @click="changeRegisterFn">返回登录</el-button>
                  <el-button type="primary" round @click="registerFn" >注册</el-button>
                </li>
              </ul>
              <!-- <el-link type="info" class="get-psw">找回密码</el-link> -->
            </div>
          </transition>
        </div>
      </div>
    </template>
   <!-- <div class="login" v-show="isShow" @click.self="login">
      <div style="display: flex; margin-top: 20px; height: 100px;">
        <transition name="el-fade-in">
          <div v-show="login" class="info transition-box">
            <ul>
              <li>登录</li>
              <li><el-input placeholder="请输入账号" v-model="user" clearable></el-input></li>
              <li><el-input placeholder="请输入密码" v-model="psw" show-password></el-input></li>
              <li>
                <el-input v-model="vcode" placeholder="验证码"></el-input>
                <a href="#"><img src="./images/验证码.png" /></a>
              </li>
              <li>
                <el-button type="primary" round @click="loginFn">登录</el-button>
                <el-button type="primary" round @click="registerFn">注册</el-button>
              </li>
            </ul>
            <el-link type="info" class="get-psw">找回密码</el-link>
          </div>
        </transition>
      </div>
    </div> -->
    <div class="frame">
      <div class="frame-top">
        <ul>
          <li>
            <span>体育竞赛</span>
            <span>报名管理系统</span>
          </li>
          <li>
            <a href="#" v-show="outShow" @click="outFn">退出</a>
            <!-- <a href="#">退出</a> -->
          </li>
        </ul>
      </div>
      <ul class="frame-bottom">
        <div class="frame-left" @click="titleFn"><NavLeft></NavLeft></div>
        <div class="frame-right">
          <ul>
            <li class="frame-right-top">
              <span>{{title.title1}}</span>
              /
              <span>{{title.title2}}</span>
            </li>
            <li class="frame-right-bottom">
              <router-view @titleFn="titleFn"></router-view>
            </li>
          </ul>
        </div>
      </ul>
    </div>
  </div>
</template>
<script>
import NavLeft from './components/NavLeft.vue'
export default {
  name: 'App',
  components: {
    NavLeft
  },
  data: function () {
    return {
      isShow: true,
      loginShow: true,
      registerShow: false,
      login: {
        user: '',
        psw: '',
        vcode: ''
      },
      register: {
        user: '',
        psw: '',
        psw2: ''
      },
      outShow: false,
      title: {
        title1: '',
        title2: ''
      }
    }
  },
  methods: {
    loginFn () {
      // 判断是否输入账号
      if (this.login.user !== '') {
        // this.loginFn()
        // 判断是否有输入密码
        if (this.login.psw !== '') {
          // 判断是否有输入验证码
          if (this.login.vcode) {
            // 判断验证码是否正确
            if (this.login.vcode === 'abcd') {
              // 判断是否有该账号
              if (this.$store.state.account[this.login.user]) {
                // 判断密码是否正确
                if (this.$store.state.account[this.login.user] === this.login.psw) {
                  this.$store.state.myAccount = this.login.user
                  this.login.user = ''
                  this.login.psw = ''
                  this.login.vcode = ''
                  this.$router.push('/SignUp/报名入口/竞赛列表')
                  this.isShow = !this.isShow
                  this.outShow = !this.outShow
                } else {
                  this.$message({
                    message: '密码输入错误',
                    type: 'warning'
                  })
                  this.login.psw = ''
                  this.login.vcode = ''
                }
              } else {
                this.$message({
                  message: '没有该账号',
                  type: 'warning'
                })
                this.login.user = ''
                this.login.psw = ''
                this.login.vcode = ''
              }
            } else {
              this.$message({
                message: '验证码错误',
                type: 'warning'
              })
              this.login.vcode = ''
            }
          } else {
            this.$message({
              message: '请输入验证码',
              type: 'warning'
            })
          }
        } else {
          this.$message({
            message: '请输入密码',
            type: 'warning'
          })
        }
      } else {
        this.$message({
          message: '请输入账号',
          type: 'warning'
        })
      }
    },
    changeRegisterFn () {
      this.loginShow = !this.loginShow
      this.registerShow = !this.registerShow
    },
    registerFn () {
      // 判断是否有输入账号
      if (this.register.user !== '') {
        // 判断是否输入密码
        if (this.register.psw !== '') {
          // 判断是否输入确认密码
          if (this.register.psw2 !== '') {
            // 判断是否有该账号
            if (!this.$store.state.account[this.register.user]) {
              // 判断两次密码是否一致
              if (this.register.psw === this.register.psw2) {
                this.$store.state.account[this.register.user] = this.register.psw
                this.login.user = this.register.user
                this.register.user = ''
                this.register.psw = ''
                this.register.psw2 = ''
                this.$message({
                  type: 'success',
                  message: '注册成功,请输入密码登录!'
                })
                this.changeRegisterFn()
              } else {
                this.$message({
                  message: '密码不一致',
                  type: 'warning'
                })
              }
            } else {
              this.$message({
                message: '已有该账号',
                type: 'warning'
              })
            }
          } else {
            this.$message({
              message: '请确认密码',
              type: 'warning'
            })
          }
        } else {
          this.$message({
            message: '请输入密码',
            type: 'warning'
          })
        }
      } else {
        this.$message({
          message: '请输入账号',
          type: 'warning'
        })
      }
    },
    outFn () {
      this.isShow = !this.isShow
      this.outShow = !this.outShow
    },
    open () {
      this.$alert('默认账号: 123 默认密码: 123', '密码提示', {
        confirmButtonText: '确定'
      })
    },
    titleFn () {
      // 拿到路径名称并分割
      // console.log(this.$route)
      let pathName = this.$route.path.split('/')
      // console.log(pathName)
      this.title.title1 = pathName[2]
      this.title.title2 = pathName[3]
    }
  },
  // 一进来就执行
  created: function () {
    // 刷新后返回主页
    this.$router.push('/SignUp/报名入口/竞赛列表')
    this.title.title1 = this.$route.params.title1
    this.title.title2 = this.$route.params.title2
    // console.log(this.$route)
  },
  // 加载完成之后执行
  mounted: function () {}
}
</script>

<style scoped lang="scss">
@import './assets/css/variable.scss';
#app {
  width: 100%;
  height: 100%;
  background: white;
  position: relative;
  left: 0;
  top: 0;
  .login {
    display: flex;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0, 0, 0, 0.2);
    .info {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 400px;
      height: 300px;
      background: white;
      ul {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        li {
          margin-bottom: 15px;
          display: flex;
          justify-content: space-between;
          &:nth-of-type(1) {
            display: block;
            text-align: center;
            color: $color_blue;
            font-size: 30px;
            margin-top: 0;
          }
          &:nth-of-type(4) {
            width: 200px;
          }
          // &:last-child{
          //   display: flex;
          //   justify-content: space-between;
          // }
        }
      }
      .get-psw{
        position: absolute;
        right: 2%;
        bottom: 2%;
        font-size: 12px;
      }
    }
  }
  .frame {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    .frame-top {
      position: absolute;
      width: 100%;
      height: 8%;
      top: 0;
      left: 0;
      background: $color_blue;
      ul {
        height: 100%;
        display: flex;
        justify-content: space-between;
        // line-height: 50px;
        li:nth-of-type(1) {
          margin: auto auto;
          color: $color_top_white;
          margin-left: 20px;
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
          margin: auto auto;
          font-size: 15px;
          margin-right: 20px;
          a:nth-of-type(1) {
            color: $color_top_white;
            margin-right: 20px;
          }
          a:nth-of-type(2) {
            color: $color_top_white;
            font-size: 15px;
          }
        }
      }
    }
    .frame-bottom {
      position: absolute;
      width: 100%;
      height: 92%;
      left: 0;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      .frame-left {
        width: 20%;
        height: 100%;
        background: $color_gray;
        border: 1px solid $color_gray;
        z-index: 200;
      }
      .frame-right {
        width: 80%;
        height: 100%;
        // z-index: 100;
        overflow: hidden;
        ul{
          width: 100%;
          height: 100%;
          .frame-right-top{
            padding: 2% 10px 2% 10px;
            border-bottom: 1px solid $color_gray;
            span{
              &:nth-of-type(1) {
                font-size: 15px;
                font-weight: bold;
                color: $color_blue;
              }
            }
          }
          .frame-right-bottom{
            width: 100%;
            height: 100%;
            margin: 10px;
            padding: 10px;
            border: 1px solid $color_gray;
            position: relative;
          }
        }
      }
    }
  }
}
</style>
