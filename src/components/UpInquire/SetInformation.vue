<template>
  <div id="setInformation">
    <template>
      <el-table :data="SubmitData" style="width: 90%" size="mini">
        <el-table-column align="center" prop="gameName" label="赛事名称" minWidth="14%" show-overflow-tooltip></el-table-column>
        <el-table-column prop="class1" label="竞赛分类" min-width="21%" align="center"></el-table-column>
        <el-table-column prop="class2" label="组别名称" min-width="21%" align="center"></el-table-column>
        <el-table-column prop="name" label="姓名" min-width="10%" align="center">
          <template slot-scope="scope" size="mini">
            <el-input v-model="SubmitData[scope.$index].name" placeholder="姓名" @click.native.prevent="nameFn(scope.$index, SubmitData)"></el-input>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="age" label="性别" minWidth="5%" show-overflow-tooltip></el-table-column>
        <el-table-column prop="idCard" label="身份证" min-width="21%" align="center">
          <template slot-scope="scope" size="mini">
            <el-input v-model="SubmitData[scope.$index].idCard" placeholder="请输入身份证" @change.native.prevent="idCardFn(scope.$index, SubmitData)" maxlength="18" show-word-limit onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"></el-input>
          </template>
        </el-table-column>
      </el-table>
      <div class="button">
        <el-button type="primary" round @click="okFn">确认修改</el-button>
        <el-button round @click="noFn">取消修改</el-button>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'setUp',
  methods: {
    nameFn (value, index) {
      // console.log(value, index)
    },
    idCardFn (value, index) {
      // console.log(value, index)
    },
    okFn () {
      console.log(this.SubmitData[0].name, this.SubmitData[0].idCard)
      this.$store.state.InquireTableData.forEach(InquireTableData => {
        if (InquireTableData.idCard === this.$store.state.SubmitData[0].idCard) {
          InquireTableData.idCard = this.SubmitData[0].idCard
          InquireTableData.name = this.SubmitData[0].name
        }
      })
      // console.log(this.$store.state.InquireTableData)
      this.$router.push({
        path: '/UpInquire/报名查询/报名列表'
      })
    },
    noFn () {
      this.$router.push({
        path: '/UpInquire/报名查询/报名列表'
      })
    }
  },
  data () {
    return {
      SubmitData: []
    }
  },
  created: function () {
    // 接受父组件传递的方法,一进来就修改title的信息
    this.$emit('titleFn')
    this.SubmitData = this.$store.state.SubmitData
    // console.log(this.$store.state.SubmitData)
    // console.log(this.$store.state.InquireTableData)
  },
  beforeDestroy: function () {
    // 把缓存信息删除,防止下次重复
    this.SubmitData = []
    this.$store.state.SubmitData = []
    // console.log(this.$store.state.SubmitData)
  }
}
</script>

<style scoped lang="scss">
#setInformation{
  width: 100%;
  height: 100%;
  .button{
    float: right;
    padding-right: 10%;
    margin-top: 2%;
  }
}
</style>
