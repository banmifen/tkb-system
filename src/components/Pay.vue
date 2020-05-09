<template>
  <div id="Pay">
    <div class="Pay" v-show="isPay">
      <div class="Pay-info">
        <img src="../images/微信.jpg" v-show="weixin">
        <img src="../images/支付宝.jpg" v-show="zhifubao">
        <el-button type="primary" round @click="payOut">已支付</el-button>
      </div>
    </div>
    <template>
      <el-table align="center" size="mini" ref="Pay" :data="SubmitData" tooltip-effect="dark" style="width: 90%" show-summary :summary-method="getSummaries">
        <el-table-column align="center" prop="gameName" label="赛事名称" minWidth="20%" show-overflow-tooltip></el-table-column>
        <el-table-column align="center" prop="class1" label="竞赛分类" minWidth="10%" show-overflow-tooltip></el-table-column>
        <el-table-column align="center" prop="class2" label="组别名称" minWidth="10%" show-overflow-tooltip></el-table-column>
        <el-table-column align="center" prop="name" label="姓名" minWidth="10%" show-overflow-tooltip></el-table-column>
        <el-table-column align="center" prop="age" label="性别" minWidth="5%" show-overflow-tooltip></el-table-column>
        <el-table-column align="center" prop="idCard" label="身份证/护照号码" minWidth="15%" show-overflow-tooltip></el-table-column>
        <el-table-column align="center" prop="cost" label="报名费+保险费" minWidth="10%" show-overflow-tooltip>
           <template slot-scope="scope">
             <span>{{scope.row.cost}}</span>
           </template>
        </el-table-column>
        <el-table-column align="center" prop="signUpDate" label="报名时间" minWidth="15%" show-overflow-tooltip></el-table-column>
      </el-table>
      <div style="margin-top: 20px">
        <div class="payment">
          <el-radio v-model="radio" label="1">微信</el-radio>
          <el-radio v-model="radio" label="2">支付宝</el-radio>
          <el-button type="primary" round size="mini" @click="submitFn">
              <span>去支付</span>
          </el-button>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Pay',
  data: function () {
    return {
      SubmitData: [],
      multipleSelection: [],
      radio: '1',
      weixin: false,
      zhifubao: false,
      isPay: false
    }
  },
  methods: {
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    getSummaries (param) {
      const { columns, data } = param
      const sums = []
      // console.log(columns, data)
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index + 1] = '总价'
        } else if (index === columns.length - 2) {
          const values = data.map(item => Number(item[column.property]))
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr)
              if (!isNaN(value)) {
                return prev + curr
              } else {
                return prev
              }
            }, 0)
            sums[index] += ' 元'
          } else {
            sums[index] = 'N/A'
          }
        }
      })
      return sums
    },
    submitFn () {
      // let number = 0
      // this.SubmitData.forEach((sum, index) => {
      //   number += sum.cost
      // })
      // console.log(number)
      this.isPay = !this.isPay
      if (this.radio === '1') {
        this.weixin = !this.weixin
      } else {
        this.zhifubao = !this.zhifubao
      }
    },
    payOut () {
      // 拿到身份证
      this.SubmitData.forEach(data => {
        // console.log(data.idCard)
        // 在数据库里匹配身份证
        this.$store.state.InquireTableData.forEach((inquire, index) => {
          // console.log(nquire)
          if (inquire.idCard === data.idCard) {
            this.$store.state.InquireTableData[index].status = '报名成功'
            this.$store.state.InquireTableData[index].date = data.signUpDate
          }
        })
      })
      this.$router.push({
        path: '/PayOut/缴费/缴费完成/'
      })
    }
  },
  created: function () {
    // 接受父组件传递的方法,一进来就修改title的信息
    this.$emit('titleFn')
    this.SubmitData = this.$store.state.SubmitData
  },
  beforeDestroy: function () {
    // 把缴费信息删除,防止下次重复
    this.SubmitData = []
    this.$store.state.SubmitData = []
    // console.log(this.$store.state.SubmitData)
  }
}
</script>

<style scoped lang="scss">
#Pay {
  .Pay{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    .Pay-info{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      img{
        display: block;
        margin: 0 auto;
        width: 30%;
        margin-bottom: 10%;
      }
      button{
        display: block;
        margin: 0 auto;
      }
    }
  }
  width: 100%;
  height: 100%;
  .payment{
    float: right;
    padding-right: 10%;
  }
}
</style>
