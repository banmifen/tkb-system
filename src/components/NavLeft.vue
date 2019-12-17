<template>
  <div id="navleft">
    <ul>
      <li>
        <el-row class="tac">
         <el-col :span="12">
            <el-menu
              default-active="1"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose">
              <router-link to="/Up/报名入口/竞赛列表">
                <el-menu-item index="1">
                  <i class="el-icon-edit"></i>
                  <span slot="title">报名入口</span>
                </el-menu-item>
              </router-link>
              <router-link to="/UpInquire/报名查询/报名列表">
                <el-menu-item index="2">
                  <i class="el-icon-document"></i>
                  <span slot="title">报名查询</span>
                </el-menu-item>
              </router-link>
              <router-link to="/Leader/参赛官员/官员信息">
                <el-menu-item index="3">
                  <i class="el-icon-user"></i>
                  <span slot="title">参赛官员</span>
                </el-menu-item>
              </router-link>
              <router-link to="/Leader/随便/随便">
                <el-menu-item index="4">
                  <i class="el-icon-setting"></i>
                  <span slot="title">不知道写什么,那就写设置吧</span>
                </el-menu-item>
              </router-link>
            </el-menu>
          </el-col>
        </el-row>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'navleft',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped lang="scss">
#navleft {
  width: 100%;
  ul{
    width: 100%;
    li{
      width: 100%;
      .el-col-12{
        width: 100%;
      }
    }
  }
  /* width: 200%;
  ul {
    width: 100%;
    li{
      width: 100%;
    }
  } */
}
</style>
