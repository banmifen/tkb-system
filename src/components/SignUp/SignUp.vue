<template>
  <li id="up">
    <el-table :data="this.$store.state.signUpData" height="560" stripe style="width: 95%; font-size:12px">
      <el-table-column prop="gameName" label="赛事名称" min-width="50%" align="center"></el-table-column>
      <el-table-column prop="date" label="比赛起止日期" min-width="30%" align="center"></el-table-column>
      <el-table-column prop="time" label="比赛时间" min-width="10%" align="center"></el-table-column>
      <el-table-column prop="operating" label="操作" min-width="10%" align="center">
        <template slot-scope="scope">
          <el-button v-show="tableData[scope.$index].baoming" @click.native.prevent="deleteRow(scope.$index, tableData[scope.$index].gameName)" type="text" size="small">
            <el-button type="primary" size="mini" round><i class="el-icon-edit"></i><span>报名</span></el-button>
          </el-button>
          <el-button v-show="tableData[scope.$index].jiezhi" @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" disabled size="small">已截止</el-button>
        </template>
      </el-table-column>
    </el-table>
  </li>
</template>

<script>
export default {
  name: 'up',
  methods: {
    deleteRow (index, rows) {
      // console.log(index)
      // console.log(rows)
      this.$router.push({
        path: '/SignUp/报名入口/竞赛列表/' + rows
      })
    }
  },
  mounted: function () {
    // console.log(this.$store.state.signUpData)
    // 添加否能报名,并拿到报名截止时间,再添加比赛信息
    for (let i = 0; i < this.$store.state.signUpData.length; i++) {
      // 1.添加比赛信息
      let gameName = this.$store.state.signUpData[i].gameName
      // 2.给数组添加是否能报名
      this.tableData.push({ 'baoming': false, 'jiezhi': true, 'gameName': gameName })

      // 3.判断比赛时间
      // 拿到报名截止时间
      let time = this.$store.state.signUpData[i].date.split(/~/)[1]
      // 转换格式
      let jzDate = new Date(Date.parse(time.replace(/-/g, '/')))
      // 拿到当前时间
      let dqDate = new Date()
      // console.log(jzDate)
      // console.log(dqDate)
      if (jzDate > dqDate) {
        // console.log('可报名')
        this.tableData[i].baoming = true
        this.tableData[i].jiezhi = false
      }
    }
    // console.log(this.tableData)
  },
  data () {
    return {
      tableData: []
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/css/variable.scss';
#up {
  width: 100%;
  height: 100%;
  // border: 1px solid $color_gray;
}
</style>
