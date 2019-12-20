<template>
  <div id="signUpSubmit">
    <div class="Pay" v-show="Pay" >
      <div class="Pay-info">
        <img src="../../images/微信.jpg" alt="微信">
        <img src="../../images/支付宝.jpg" alt="支付宝">
         <el-button type="success" round @click="PayShow">已支付但没反应</el-button>
      </div>
    </div>
    <ul class="signUpSubmitLeft">
      <li>竞赛信息</li>
      <li>
        <p>参赛费用</p>
        <span>报名费(人):</span> <b>150元</b> <br>
        <span>兼项费(人):</span> <b>150元</b> <br>
        <span>保险费(人):</span> <b>20元</b> <br>
      </li>
      <li>
        <p>竞赛规则</p>
        <span>无</span>
      </li>
    </ul>
    <ul class="signUpSubmitRight">
      <template>
        <el-table :data="tableData" height="400" style="width: 90%" show-summary size="mini" :summary-method="getSummaries">
          <el-table-column prop="area" label="地区" min-width="10%" align="center">
            <!-- 表格里添加scope,防止select失效 -->
            <template slot-scope="scope" size="mini">
              <el-select v-model="tableData[scope.$index].area" placeholder="请选择" @change="currentSel" @click.native.prevent="areaFn(scope.$index, tableData)">
                <el-option v-for="item in area" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column prop="idCard" label="身份证" min-width="21%" align="center">
            <template slot-scope="scope" size="mini">
              <el-input v-model="tableData[scope.$index].idCard" placeholder="请输入身份证" @change.native.prevent="idCardFn(scope.$index, tableData)" maxlength="18" show-word-limit onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="姓名" min-width="10%" align="center">
            <template slot-scope="scope" size="mini">
              <el-input v-model="tableData[scope.$index].name" placeholder="姓名" @click.native.prevent="nameFn(scope.$index, tableData)"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="birthday" label="出生日期" min-width="12%" align="center">
            <template slot-scope="scope" size="mini" >
              <el-input disabled v-model="tableData[scope.$index].birthday" placeholder="出生日期" @click.native.prevent="birthdayFn(scope.$index, tableData)"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="operating" label="操作" min-width="5%" align="center">
            <template slot-scope="scope">
              <el-button
                v-show="tableData[scope.$index].removeShow"
                icon="el-icon-remove-outline"
                circle
                @click.native.prevent="removeListFn(scope.$index, tableData)"
                size="mini"
              ></el-button>
            </template>
          </el-table-column>
          <el-table-column prop="add" label="添加人数" min-width="8%" align="center">
            <template slot-scope="scope">
              <el-button @click.native.prevent="addFn(scope.$index, tableData)" type="primary" round size="small">
                <span>添加</span>
              </el-button>
            </template>
          </el-table-column>
          <el-table-column prop="cost" label="费用(报名费+保险费)" min-width="8%" align="center"></el-table-column>
        </el-table>
      </template>
      <div class="submit">
        <el-button type="primary" round size="mini" @click="submitFn">
            <i class="el-icon-warning"></i>
            <span>提交</span>
        </el-button>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'signUpSubmit',
  methods: {
    areaFn (index, row) {},
    currentSel (value) {
      // console.log(value)
    },
    idCardFn (index, row) {
      // console.log(index, row[0].idCard)
      if (row[index].idCard.length === 18) {
        /*
        let number = /\d{6}([12]\d{3})([01]\d)([0123]\d)\d{4}/.exec(row[index].idCard)
        console.log(number)
        // console.log(number[1] + number[2] + number[3])
        let birthday = number[1] + '/' + number[2] + '/' + number[3]
        this.tableData[index].birthday = birthday
        */
        // console.log(row[index].idCard)
        let number1 = row[index].idCard.substr(6, 4)
        let number2 = row[index].idCard.substr(10, 2)
        let number3 = row[index].idCard.substr(12, 2)
        // console.log(number1, number2, number3)
        let birthday = number1 + '/' + number2 + '/' + number3
        this.tableData[index].birthday = birthday
      }
    },
    nameFn (index, row) {
    },
    ageFn (index, row) {
    },
    birthdayFn (index, row) {
    },
    removeListFn (index, row) {
      this.tableData.splice(index, 1)
    },
    addFn (index, row) {
      this.tableData.push({
        area: '大陆',
        idCard: '',
        name: '',
        birthday: '',
        operating: '',
        cost: 170,
        removeShow: true })
      // console.log(this.tableData)
    },
    submitFn () {
      for (let i = 0; i < this.tableData.length; i++) {
        // 判断是否输入身份证
        if (this.tableData[i].idCard !== '') {
          // 判断身份证是否等于18位
          if (this.tableData[i].idCard.length === 18) {
            // 判断是否输入姓名
            if (this.tableData[i].name !== '') {
              this.information(i)
              // 判断是否循环结束
              if (i === this.tableData.length - 1) {
                // 拿到总金额
                let sum = 0
                for (let i = 0; i < this.tableData.length; i++) {
                  sum += this.tableData[i].cost
                }
                this.costSum = sum
                console.log('金额:', this.costSum)
                this.Pay = !this.Pay
              }
            } else {
              this.$message({
                message: '请输入姓名',
                type: 'warning'
              })
              break
            }
          } else {
            this.$message({
              message: '请输入18位的身份证',
              type: 'warning'
            })
            break
          }
        } else {
          this.$message({
            message: '请输入身份证',
            type: 'warning'
          })
          break
        }
      }
    },
    information (i) {
      // 拿到赛事名称
      let gameName = this.$route.params.gameName
      console.log('赛事名称:', gameName)
      // 拿到竞赛分类
      let class1 = this.$route.params.class1
      console.log('竞赛分类:', class1)
      // 拿到组别名称
      let class2 = this.$route.params.class2
      console.log('组别名称:', class2)
      // 拿到姓名
      let name = this.tableData[i].name
      console.log('姓名:', name)
      // 拿到性别
      let ages = this.$route.params.class2.split('')
      let age = '女'
      for (let i = 0; i < ages.length; i++) {
        if (ages[i] === '男') {
          age = '男'
          continue
        }
      }
      console.log('性别:', age)
      // 拿到身份证
      let idCard = this.tableData[i].idCard
      console.log('身份证:', idCard)
      // 拿到报名时间
      let date = new Date()
      let signUpDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}- ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
      console.log(signUpDate)
    },
    PayShow () {
      this.Pay = !this.Pay
    },
    // 总价方法
    getSummaries (param) {
      const { columns, data } = param
      const sums = []
      // console.log(columns, data)
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '总价'
        } else if (index === columns.length - 1) {
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
    }
  },
  data () {
    return {
      area: [
        {
          value: '大陆',
          label: '大陆'
        },
        {
          value: '香港',
          label: '香港'
        },
        {
          value: '澳门',
          label: '澳门'
        },
        {
          value: '台湾',
          label: '台湾'
        }
      ],
      tableData: [
        {
          area: '大陆',
          idCard: '',
          name: '',
          birthday: '出生日期',
          operating: '',
          cost: 170,
          removeShow: false
        }
      ],
      costSum: '',
      Pay: false
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/css/variable.scss';
#signUpSubmit {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  .Pay{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 999;
    .Pay-info{
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      img{
        width: 30%;
        height: 30%;
        margin: 10%;
      }
      button{
        display: block;
        margin: 0 auto;
      }
    }
  }
  .signUpSubmitLeft {
    width: 20%;
    height: 25%;
    border: 1px solid $color_border;
    li {
      margin: 3%;
      padding: 4%;
      border-bottom: 1px solid $color_border;
      span {
        color: $color_border;
        display: inline-block;
        margin-top: 2px;
      }
      &:nth-of-type(1) {
        margin: 0;
        background: $color_border;
        font-size: 15px;
        // font-weight: bold;
      }
      &:nth-of-type(2) {
      }
      &:nth-of-type(3) {
        border: 0;
      }
    }
  }
  .signUpSubmitRight {
    width: 75%;
    .submit{
      margin: 1% 80%;
    }
  }
}
</style>
