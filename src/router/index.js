import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Lost from '../views/lost/Lost.vue'
import Mood from '../views/mood/Mood.vue'
import Question from '../views/question/Question'
import QuestionDetail from '../views/question/QuestionDetail'
import LostPublish from '@/views/lost/LostPublish'
import SortDetail from '@/views/question/SortDetail'
import QuesPublish from '@/views/question/QuesPublish'
import Login from '@/views/login/Login'
import Register from '@/views/register/Register'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/lost',
    name: 'Lost',
    component: Lost
  },
  {
    path: '/mood',
    name: 'Mood',
    component: Mood
  },
  {
    path: '/question',
    name: 'Question',
    component: Question
  },
  {
    path: '/question_detail/:qid',
    name: 'QuestionDetail',
    component: QuestionDetail
  },
  {
    path: '/sort_detail/:sid',
    name: 'SortDetail',
    component: SortDetail
  },
  {
    path: '/lost_publish',
    name: 'LostPublish',
    component: LostPublish
  },
  {
    path: '/ques_publish',
    name: 'QuesPublish',
    component: QuesPublish
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
