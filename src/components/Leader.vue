<template>
  <div id="leader">
    <template>
      <el-table :data="leaderData" height="400" style="width: 60%; font-size:12px;" max-height="560">
        <el-table-column min-width="25%" align="center" prop="post" label="职务"></el-table-column>
        <el-table-column min-width="25%" align="center" prop="name" label="姓名">
          <template slot-scope="scope" size="mini">
            <el-input size="mini" v-model="leaderData[scope.$index].name" placeholder="姓名" @click.native.prevent="nameFn(scope.$index, leaderData)"></el-input>
          </template>
        </el-table-column>
        <el-table-column min-width="40%" align="center" prop="phone" label="手机号码">
          <template slot-scope="scope" size="mini">
            <el-input size="mini" v-model="leaderData[scope.$index].phone" placeholder="手机号码" @click.native.prevent="phoneFn(scope.$index, leaderData)" maxlength="11" show-word-limit onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"></el-input>
          </template>
        </el-table-column>
        <el-table-column min-width="10%" align="center" prop="operating" label="操作" >
          <template slot-scope="scope">
            <el-button v-show="leaderData[scope.$index].operating" @click.native.prevent="deleteRow(scope.$index, leaderData)" type="text" size="small">移除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <template>
        <div class="button-left">
          <el-button type="primary" round size="mini" @click="addCoachFn"><i class="el-icon-circle-plus-outline"></i><span>新增教练员</span></el-button>
        </div>
        <div class="button-right">
        <!--  <el-button type="primary" round size="mini" @click="saveFn">保存修改</el-button>
          <el-button round size="mini">取消修改</el-button> -->
        </div>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  name: 'leader',
  methods: {
    nameFn (index, rows) {
      // console.log(index, rows)
    },
    phoneFn (index, rows) {
      // console.log(index, rows)
    },
    deleteRow (index, rows) {
      this.$confirm('删除该教练员后需要重新添加, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        rows.splice(index, 1)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    addCoachFn () {
      this.leaderData.push({
        post: '教练员',
        name: '',
        phone: '',
        operating: true
      })
    }
  },
  mounted: function () {
    this.leaderData = this.$store.state.leaderData
    // console.log('进入')
  },
  beforeDestroy: function () {
    this.leaderData = []
    // console.log('离开')
  },
  data () {
    return {
      leaderData: []
    }
  }
}
</script>

<style scoped lang="scss">
#leader{
  .button-left{
      float: left;
      padding-right: 10%;
      margin-top: 2%;
    }
  .button-right{
    float: right;
    padding-right: 40%;
    margin-top: 2%;
  }
}
</style>
