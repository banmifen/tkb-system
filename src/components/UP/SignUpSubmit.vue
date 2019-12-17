<template>
  <div id="signUpSubmit">
    <ul class="signUpSubmitLeft">
      <li>竞赛信息</li>
      <li>
        <p>参赛费用</p>
        <span>报名日期：2019-11-01 ~ 2019-12-10</span>
      </li>
      <li>
        <p>竞赛内容</p>
        <span>无</span>
      </li>
    </ul>
    <ul class="signUpSubmitRight">
      <template>
        <el-table :data="tableData" style="width: 90%">
          <el-table-column prop="area" label="地区" width="180">
            <template>
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'signUpSubmit',
  selectBD (e) {
    this.$forceUpdate()
  },
  methods: {},
  data () {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      tableData: [
        {
          area: '',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ]
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
  .signUpSubmitLeft {
    // position: absolute;
    // left: 0px;
    // top: 0px;
    width: 25%;
    height: 20%;
    border: 1px solid $color_border;
    li {
      margin: 10px;
      border-bottom: 1px solid $color_border;
      span {
        color: $color_border;
        display: inline-block;
        margin-top: 2px;
      }
      &:nth-of-type(1) {
        margin: 0;
        padding: 10px;
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
    width: 70%;
  }
}
</style>
