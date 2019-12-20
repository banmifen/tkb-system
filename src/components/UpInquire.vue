<template>
  <div id="upinquire">
    <template>
      <el-table size="mini" ref="InquireTable" :data="this.$store.state.InquireTableData" tooltip-effect="dark" style="width: 90%" @selection-change="handleSelectionChange">
        <el-table-column align="center" prop="selection" type="selection" minWidth="2%"></el-table-column>
        <el-table-column align="center" prop="gameName" label="赛事名称" minWidth="10%" show-overflow-tooltip></el-table-column>
        <el-table-column align="center" prop="class1" label="竞赛分类" minWidth="10%" show-overflow-tooltip></el-table-column>
        <el-table-column align="center" prop="class2" label="组别名称" minWidth="10%" show-overflow-tooltip></el-table-column>
        <el-table-column align="center" prop="name" label="姓名" minWidth="10%" show-overflow-tooltip></el-table-column>
        <el-table-column align="center" prop="age" label="性别" minWidth="5%" show-overflow-tooltip></el-table-column>
        <el-table-column align="center" prop="idCard" label="身份证/护照号码" minWidth="15%" show-overflow-tooltip></el-table-column>
        <el-table-column align="center" prop="cost" label="报名费+保险费" minWidth="15%" show-overflow-tooltip>
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
          <el-button @click="getSelection()">控制台输出数据</el-button>
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
      this.$refs.InquireTable.clearSelection()
      // 循环出所有数据
      this.InquireTableData.forEach((rows, selected) => {
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
    getSelection () {
      // console.log(this.multipleSelection)
      this.multipleSelection.forEach(data => {
        // 拿到赛事名称
        let gameName = data.gameName
        console.log('赛事名称:', gameName)
        // 拿到竞赛分类
        let class1 = data.class1
        console.log('竞赛分类:', class1)
        // 拿到组别名称
        let class2 = data.class2
        console.log('组别名称:', class2)
        // 拿到姓名
        let name = data.name
        console.log('姓名:', name)
        // 拿到性别
        let ages = data.class2.split('')
        let age = '女'
        for (let i = 0; i < ages.length; i++) {
          if (ages[i] === '男') {
            age = '男'
            continue
          }
        }
        console.log('性别:', age)
        // 拿到身份证
        let idCard = data.idCard
        console.log('身份证:', idCard)
        // 拿到报名时间
        let date = new Date()
        let signUpDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}- ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        console.log(signUpDate)
      })
    },
    View () {},
    Pay () {}
  },
  data () {
    return {
      InquireTableData: [],
      multipleSelection: []
    }
  },
  mounted: function () {
    this.InquireTableData.push(this.$store.state.InquireTableData)
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
