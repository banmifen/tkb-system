<template>
  <li id="up">
    <el-table :data="tableData" height="560" stripe style="width: 95%; font-size:12px">
      <el-table-column prop="name" label="赛事名称" min-width="50%" align="center"></el-table-column>
      <el-table-column prop="date" label="比赛起止日期" min-width="30%" align="center"></el-table-column>
      <el-table-column prop="time" label="比赛时间" min-width="10%" align="center"></el-table-column>
      <el-table-column prop="operating" label="操作" min-width="10%" align="center">
        <template slot-scope="scope">
          <el-button v-show="tableData[scope.$index].baoming" @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">报名</el-button>
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
      this.$router.push('/Up/报名入口/竞赛列表/SignUpList')
    }
  },
  mounted: function () {
    // 拿到报名截止时间
    // console.log(this.tableData.length)
    for (let i = 0; i < this.tableData.length; i++) {
      let time = this.tableData[i].date.split(/~/)[1]
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
  },
  data () {
    return {
      isShow: true,
      tableData: [
        {
          name: '2019年福建省全民健身运动会跆拳道联赛暨福建省第五届大众跆拳道俱乐部联赛总决赛',
          date: '2019-11-01~2019-12-20',
          time: '2019-12-20',
          operating: '报名截止',
          baoming: false,
          jiezhi: true
        },
        {
          name: '2019年福建省全民健身运动会跆拳道联赛南部赛区暨“祥丰杯”福建省第五届大众跆拳道俱乐部联赛漳州赛区',
          date: '2019-11-01~2019-11-29',
          time: '2019-11-29',
          operating: '报名截止',
          baoming: false,
          jiezhi: true
        },
        {
          name: '2019年福建省第五届大众跆拳道俱乐部联赛（厦门赛区）暨“加州杯”厦门市全民健身运动会大众跆拳道大奖赛',
          date: '2019-10-08~2019-10-25',
          time: '2019-10-25',
          operating: '报名截止',
          baoming: false,
          jiezhi: true
        },
        {
          name: '2019年福建省全民健身运动会跆拳道联赛北部赛区暨福建省第五届大众跆拳道俱乐部联赛南平赛区、华东三省跆拳道邀请赛',
          date: '2019-09-11~2019-10-01',
          time: '2019-10-01',
          operating: '报名截止',
          baoming: false,
          jiezhi: true
        },
        {
          name: '2019年福建省第五届大众跆拳道俱乐部联赛(龙岩赛区)暨龙岩市全民健身运动会“四维家杯”大众跆拳道大奖赛',
          date: '2019-09-02~2019-10-18',
          time: '2019-10-19',
          operating: '报名截止',
          baoming: false,
          jiezhi: true
        },
        {
          name: '2019年第二届福建省跆拳道大众锦标赛 暨泉州市全民健身跆拳道比赛',
          date: '2019-07-26~2019-08-07',
          time: '2019-08-13',
          operating: '报名截止',
          baoming: false,
          jiezhi: true
        },
        {
          name: '2019年福建省空手道俱乐部比赛',
          date: '2019-07-26~2019-08-07',
          time: '2019-08-13',
          operating: '报名截止',
          baoming: false,
          jiezhi: true
        },
        {
          name: '2019年福建省第五届大众跆拳道俱乐部联赛 (福州赛区)暨青云杯俱乐部跆拳道公开赛 电子竞技对抗赛专用通道',
          date: '2019-06-01~2019-07-21',
          time: '2019-07-24',
          operating: '报名截止',
          baoming: false,
          jiezhi: true
        },
        {
          name: '2019年福建省第五届大众跆拳道俱乐部联赛 (福州赛区)暨青云杯俱乐部跆拳道公开赛',
          date: '2019-06-01~2019-07-19',
          time: '2019-07-24',
          operating: '报名截止',
          baoming: false,
          jiezhi: true
        },
        {
          name: '2019年福建省第五届大众跆拳道俱乐部联赛 （泉州赛区）',
          date: '2019-05-24~2019-07-19',
          time: '2019-07-19',
          operating: '报名截止',
          baoming: false,
          jiezhi: true
        },
        {
          name: '两岸奥运金牌公益跆拳道公开赛',
          date: '2019-05-01~2019-05-31',
          time: '2019-07-26',
          operating: '报名截止',
          baoming: false,
          jiezhi: true
        },
        {
          name: '2019年福建省跆拳道协会二青会（社会俱乐部组）选拔赛',
          date: '2019-03-15~2019-03-27',
          time: '2019-03-30',
          operating: '报名截止',
          baoming: false,
          jiezhi: true
        }
      ]
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
