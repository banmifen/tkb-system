<template>
  <div id="upinquire">
    <template>
      <el-table size="mini" ref="InquireTable" :data="this.$store.state.InquireTableData" tooltip-effect="dark" style="width: 90%" @selection-change="handleSelectionChange">
        <el-table-column align="center" prop="selection" type="selection" minWidth="2%"></el-table-column>
        <el-table-column align="center" prop="gameName" label="赛事名称" minWidth="14%" show-overflow-tooltip></el-table-column>
        <el-table-column align="center" prop="class1" label="竞赛分类" minWidth="10%" show-overflow-tooltip></el-table-column>
        <el-table-column align="center" prop="class2" label="组别名称" minWidth="10%" show-overflow-tooltip></el-table-column>
        <el-table-column align="center" prop="name" label="姓名" minWidth="10%" show-overflow-tooltip></el-table-column>
        <el-table-column align="center" prop="age" label="性别" minWidth="5%" show-overflow-tooltip></el-table-column>
        <el-table-column align="center" prop="idCard" label="身份证/护照号码" minWidth="15%" show-overflow-tooltip></el-table-column>
        <el-table-column align="center" prop="cost" label="报名费+保险费" minWidth="11%" show-overflow-tooltip>
           <template slot-scope="scope">
             <span>{{scope.row.cost}}</span>
           </template>
        </el-table-column>
        <el-table-column align="center" prop="status" label="报名状态" minWidth="10%" show-overflow-tooltip>
          <template slot-scope="scope">
            <span :style="scope.row.status==='报名成功'?'color: blue;':'color: red;'" >{{scope.row.status}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="date" label="报名时间" minWidth="15%" show-overflow-tooltip></el-table-column>
      </el-table>
      <div style="margin-top: 20px">
        <div class="upinquire-left">
          <el-button @click="toggleAllSelection()">全选</el-button>
          <el-button @click="getStatus()">只选未交费</el-button>
        </div>
        <div class="upinquire-right">
          <!-- <el-button @click="View()">查看</el-button> -->
          <el-button @click="setSelection()">修改信息</el-button>
          <el-button @click="removeSelection()">删除信息</el-button>
          <el-button @click="Pay()">缴费</el-button>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'upinquire',

  methods: {
    getStatus () {
      // 先清空选择列表
      // 循环出所有数据
      this.InquireTableData.forEach((rows, selected) => {
        this.$refs.InquireTable.clearSelection()
        rows.forEach((row, selected) => {
          // console.log(row)
          // 拿到未交费人员
          if (row.status === '未交费') {
            // 拿到通过ref创建的实例的当前表格并根据数据进行选择(true表示不进行切换)
            this.$refs.InquireTable.toggleRowSelection(row, true)
            // console.log(this.$refs.InquireTable)
          }
        })
      })
    },
    toggleAllSelection () {
      // 循环出所有数据
      this.InquireTableData.forEach(row => {
        // 拿到通过ref创建的实例的当前表格并根据数据进行切换选择
        this.$refs.InquireTable.toggleAllSelection()
      })
      // console.log(this.$refs.InquireTable)
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    setSelection () {
      // 判断是否只选择一个
      this.getSelection()
      if (this.$store.state.SubmitData.length !== 1) {
        this.$store.state.SubmitData = []
        this.$message({
          message: '请选择一位选手',
          type: 'warning'
        })
        return
      }
      this.$router.push({
        path: '/SetInformation/修改信息/详细信息'
      })
      // console.log(this.$store.state.SubmitData)
    },
    removeSelection () {
      this.multipleSelection.forEach(multipleSelection => {
        let id = multipleSelection.idCard
        this.InquireTableData[0].forEach((InquireTableData, index) => {
          if (id === InquireTableData.idCard) {
            this.InquireTableData[0].splice(index, 1)
          }
        })
      })
    },
    getSelection (inquire) {
      // 清空缴费列表,避免重复缴费
      this.$store.state.SubmitData = []
      // console.log(this.multipleSelection)
      this.multipleSelection.forEach(data => {
        // 拿到赛事名称
        let gameName = data.gameName
        // 拿到竞赛分类
        let class1 = data.class1
        // 拿到组别名称
        let class2 = data.class2
        // 拿到姓名
        let name = data.name
        // 拿到性别
        let ages = data.class2.split('')
        let age = '女'
        for (let i = 0; i < ages.length; i++) {
          if (ages[i] === '男') {
            age = '男'
            continue
          }
        }
        // 拿到身份证
        let idCard = data.idCard
        // 拿到报名费
        let cost = data.cost
        // 拿到报名状态
        let status = data.status
        // 拿到报名时间
        let date = new Date()
        let Year = date.getFullYear()// 获取年
        let Month = date.getMonth() - 10// 获取月
        Month = Month < 10 ? '0' + Month : '' + Month
        let Dates = date.getDate()// 获取日
        Dates = Dates < 10 ? '0' + Dates : '' + Dates
        let Hours = date.getHours()// 获取小时
        Hours = Hours < 10 ? '0' + Hours : '' + Hours
        let Minutes = date.getMinutes()// 获取分钟
        Minutes = Minutes < 10 ? '0' + Minutes : '' + Minutes
        let Seconds = date.getSeconds()// 获取秒
        Seconds = Seconds < 10 ? '0' + Seconds : '' + Seconds
        let signUpDate = Year + '-' + Month + '-' + Dates + ' ' + Hours + ':' + Minutes + ':' + Seconds
        // this.SubmitData.push()
        this.$store.state.SubmitData.push({
          'gameName': gameName,
          'class1': class1,
          'class2': class2,
          'name': name,
          'age': age,
          'idCard': idCard,
          'cost': cost,
          'status': status,
          'signUpDate': signUpDate
        })
        // console.log('赛事名称:', gameName)
        // console.log('竞赛分类:', class1)
        // console.log('组别名称:', class2)
        // console.log('姓名:', name)
        // console.log('性别:', age)
        // console.log('身份证:', idCard)
        // console.log(cost)
        // console.log(status)
        // console.log(signUpDate)
        // console.log(this.$store.state.SubmitData)
      })
    },
    View () {},
    Pay () {
      this.getSelection()
      // 判断是否选择
      if (this.$store.state.SubmitData.length === 0) {
        this.$store.state.SubmitData = []
        this.$message({
          message: '请至少选择一位选手',
          type: 'warning'
        })
        return
      }
      // console.log(this.$store.state.SubmitData)
      // 判断是否重复缴费
      for (let i = 0; i < this.$store.state.SubmitData.length; i++) {
        if (this.$store.state.SubmitData[i].status === '报名成功') {
          this.$message({
            message: '有选手已缴费,请确认',
            type: 'warning'
          })
          return
        }
      }
      this.$router.push({
        path: '/Pay/缴费/缴费信息/'
      })
    }
  },
  data () {
    return {
      InquireTableData: [],
      multipleSelection: [],
      SubmitData: [{ }]
    }
  },
  mounted: function () {
    this.InquireTableData.push(this.$store.state.InquireTableData)
  },
  created: function () {
    // 接受父组件传递的方法,一进来就修改title的信息
    this.$emit('titleFn')
    this.SubmitData = this.$store.state.SubmitData
  },
  beforeDestroy: function () {
    // 把缓存信息删除,防止下次重复
    // this.$store.state.InquireTableData = this.InquireTableData
  }
}
</script>

<style scoped lang="scss">
  #upinquire{
    width: 100%;
    height: 100%;
    .upinquire-left{
      float: left;
    }
    .upinquire-right{
      float: right;
      padding-right: 10%;
    }
  }
</style>
