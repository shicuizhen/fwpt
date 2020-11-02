import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Lost from '../views/Lost.vue'
import Mood from '../views/Mood.vue'
import Question from '../views/Question'

Vue.use(VueRouter)

const routes = [
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
