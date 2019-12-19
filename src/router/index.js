import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入需要加载的路由
import SignUp from '../components/SignUp/SignUp.vue'
import SignUpList from '../components/SignUp/SignUpList.vue'
import SignUpSubmit from '../components/SignUp/SignUpSubmit.vue'
import UpInquire from '../components/UpInquire.vue'
import Leader from '../components/Leader.vue'
import SetUp from '../components/SetUp.vue'

Vue.use(VueRouter)

// 定义路由对应的模板
const routes = [
  { path: '/SignUp/:title1/:title2', component: SignUp },
  { path: '/SignUp/报名入口/竞赛列表/SignUpList', component: SignUpList },
  { path: '/SignUp/报名入口/竞赛列表/SignUpList/SignUpSubmit', component: SignUpSubmit },
  { path: '/UpInquire/:title1/:title2', component: UpInquire },
  { path: '/Leader/:title1/:title2', component: Leader },
  { path: '/SetUp/:title1/:title2', component: SetUp }
]
// 以下代码单纯就是为了屏蔽路由报NavigationDuplicated的问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
