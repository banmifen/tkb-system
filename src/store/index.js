import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    account: {
      123: '123'
    },
    signUpData: [
      {
        gameId: '20221226',
        gameName: '2019年福建省全民健身运动会跆拳道联赛暨福建省第五届大众跆拳道俱乐部联赛总决赛',
        date: '2019-11-01~2022-12-25',
        time: '2022-12-26',
        operating: '报名截止',
        signUpListData: [
          {
            id: '19ZJS0010101',
            class1: '个人品势',
            class2: '青年男子组',
            age: '男',
            number: '121',
            operating: '进入报名'
          },
          {
            id: '19ZJS0010102',
            class1: '个人品势',
            class2: '青年女子组',
            age: '女',
            number: '108',
            operating: '进入报名'
          },
          {
            id: '19ZJS0010103',
            class1: '个人品势',
            class2: '少年男子组',
            age: '男',
            number: '228',
            operating: '进入报名'
          },
          {
            id: '19ZJS0010104',
            class1: '个人品势',
            class2: '少年女子组',
            age: '女',
            number: '98',
            operating: '进入报名'
          }
        ]
      },
      {
        gameId: '20191129',
        gameName: '2019年福建省全民健身运动会跆拳道联赛南部赛区暨“祥丰杯”福建省第五届大众跆拳道俱乐部联赛漳州赛区',
        date: '2019-11-01~2019-11-29',
        time: '2019-11-29',
        operating: '报名截止'
      },
      {
        gameId: '20191025',
        gameName: '2019年福建省第五届大众跆拳道俱乐部联赛（厦门赛区）暨“加州杯”厦门市全民健身运动会大众跆拳道大奖赛',
        date: '2019-10-08~2019-10-25',
        time: '2019-10-25',
        operating: '报名截止'
      },
      {
        gameId: '20191001',
        gameName: '2019年福建省全民健身运动会跆拳道联赛北部赛区暨福建省第五届大众跆拳道俱乐部联赛南平赛区、华东三省跆拳道邀请赛',
        date: '2019-09-11~2019-10-01',
        time: '2019-10-01',
        operating: '报名截止'
      },
      {
        gameId: '20191019',
        gameName: '2019年福建省第五届大众跆拳道俱乐部联赛(龙岩赛区)暨龙岩市全民健身运动会“四维家杯”大众跆拳道大奖赛',
        date: '2019-09-02~2019-10-18',
        time: '2019-10-19',
        operating: '报名截止'
      },
      {
        gameId: '20190813',
        gameName: '2019年第二届福建省跆拳道大众锦标赛 暨泉州市全民健身跆拳道比赛',
        date: '2019-07-26~2019-08-07',
        time: '2019-08-13',
        operating: '报名截止'
      },
      {
        gameId: '20190813',
        gameName: '2019年福建省空手道俱乐部比赛',
        date: '2019-07-26~2019-08-07',
        time: '2019-08-13',
        operating: '报名截止'
      },
      {
        gameId: '20190725',
        gameName: '2019年福建省第五届大众跆拳道俱乐部联赛 (福州赛区)暨青云杯俱乐部跆拳道公开赛 电子竞技对抗赛专用通道',
        date: '2019-06-01~2019-07-21',
        time: '2019-07-25',
        operating: '报名截止'
      },
      {
        gameId: '20190724',
        gameName: '2019年福建省第五届大众跆拳道俱乐部联赛 (福州赛区)暨青云杯俱乐部跆拳道公开赛',
        date: '2019-06-01~2019-07-19',
        time: '2019-07-24',
        operating: '报名截止'
      },
      {
        gameId: '20190719',
        gameName: '2019年福建省第五届大众跆拳道俱乐部联赛 （泉州赛区）',
        date: '2019-05-24~2019-07-19',
        time: '2019-07-19',
        operating: '报名截止'
      },
      {
        gameId: '20190726',
        gameName: '两岸奥运金牌公益跆拳道公开赛',
        date: '2019-05-01~2019-05-31',
        time: '2019-07-26',
        operating: '报名截止'
      },
      {
        gameId: '20190330',
        gameName: '2019年福建省跆拳道协会二青会（社会俱乐部组）选拔赛',
        date: '2019-03-15~2019-03-27',
        time: '2019-03-30',
        operating: '报名截止'
      }
    ],
    InquireTableData: [
      {
        gameName: '2019年福建省全民健身运动会跆拳道联赛暨福建省第五届大众跆拳道俱乐部联赛总决赛',
        class1: '个人品势',
        class2: '男子青年高级组',
        name: '金春阳',
        age: '男',
        idCard: '352202199411010550',
        cost: 170,
        status: '报名成功',
        date: '2019-12-06 00:40:50'
      },
      {
        gameName: '2019年福建省全民健身运动会跆拳道联赛暨福建省第五届大众跆拳道俱乐部联赛总决赛',
        class1: '个人品势',
        class2: '男子青年高级组',
        name: '陈小白',
        age: '男',
        idCard: '352202199912210550',
        cost: 170,
        status: '未交费',
        date: ''
      },
      {
        gameName: '2019年福建省全民健身运动会跆拳道联赛暨福建省第五届大众跆拳道俱乐部联赛总决赛',
        class1: '个人品势',
        class2: '女子青年高级组',
        name: '陈小红',
        age: '女',
        idCard: '352202200012210550',
        cost: 170,
        status: '未交费',
        date: ''
      }
    ],
    leaderData: [
      {
        post: '队医',
        name: '华佗',
        phone: '12345678901',
        operating: false
      },
      {
        post: '领队',
        name: '曹操',
        phone: '09876543210',
        operating: false
      },
      {
        post: '教练员',
        name: '关羽',
        phone: '12345054321',
        operating: false
      },
      {
        post: '教练员',
        name: '张飞',
        phone: '54321012345',
        operating: true
      }
    ],
    // 临时提交资料
    SubmitData: [],
    myAccount: '',
    count: 0
  },
  mutations: {
    mAdd (state) {
      state.count = state.count + 1
    }
  },
  actions: {
  },
  modules: {
  }
})
