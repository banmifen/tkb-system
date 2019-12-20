<template>
  <div id="upList">
    <!-- <ul class="upListLeft">
      <li>竞赛信息</li>
      <li>
        <p>2019年福建省全民健身运动会跆拳道联赛暨福建省第五届大众跆拳道俱乐部联赛总决赛</p>
        <span>报名日期：2019-11-01 ~ 2019-12-10</span>
      </li>
      <li>
        <p>竞赛内容</p>
        <span>无</span>
      </li>
    </ul> -->
    <ul class="upListRight">
      <el-table :data="this.$store.state.signUpData[this.number].signUpListData" height="560" stripe style="width: 95%; font-size:12px">
        <el-table-column prop="id" label="编号" min-width="20%" align="center"></el-table-column>
        <el-table-column prop="class1" label="竞赛分类" min-width="20%" align="center"></el-table-column>
        <el-table-column prop="class2" label="组别名称" min-width="20%" align="center"></el-table-column>
        <el-table-column prop="age" label="性别" min-width="10%" align="center"></el-table-column>
        <el-table-column prop="number" label="已报名人数" min-width="10%" align="center"></el-table-column>
        <el-table-column prop="operating" label="操作" min-width="20%" align="center">
          <template slot-scope="scope">
            <el-button @click.native.prevent="deleteRow(scope.$index, tableData.signUpListData[scope.$index])" type="text" size="small">
              <el-button type="primary" size="mini" round><i class="el-icon-edit"></i><span>进入报名</span></el-button>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'upList',
  methods: {
    deleteRow (index, rows) {
      // console.log(index, rows)
      // console.log(this.$route.params.gameName)
      // 跳转页面
      this.$router.push({
        path: '/SignUp/报名入口/竞赛列表/' + this.$route.params.gameName + '/' + rows.class1 + '/' + rows.class2
      })
    }
  },
  mounted: function () {
    // 保存当前项目索引并查找到对应的数据
    let names = this.$store.state.signUpData
    let name = this.$route.params.gameName
    for (let i = 0; i < names.length; i++) {
      if (names[i].gameName === name) {
        this.number = i
        // console.log(this.class1 = this.$store.state.signUpData[i].signUpListData)
        this.tableData.signUpListData = this.$store.state.signUpData[i].signUpListData
        return
      }
    }
  },
  data () {
    return {
      tableData: [{
        signUpListData: [{
          class1: '',
          class2: ''
        }]
      }],
      number: 0
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/css/variable.scss';
#upList{
  width: 100%;
  height: 100%;
  .upListLeft{
    width: 25%;
    height: 20%;
    border: 1px solid $color_border;
    li{
      margin: 10px;
      border-bottom: 1px solid $color_border;
      span{
        color: $color_border;
        display: inline-block;
        margin-top: 2px;
      }
      &:nth-of-type(1){
        margin: 0;
        padding: 10px;
        background: $color_border;
        font-size: 15px;
        // font-weight: bold;
      }
      &:nth-of-type(2){
      }
      &:nth-of-type(3){
        border: 0;
      }
    }
  }
  .upListRight{
    // position: absolute;
    // right: 0px;
    // top: 0px;
  }
}
</style>
