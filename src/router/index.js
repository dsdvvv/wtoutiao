import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/Home' // 首页
import Login from '@/views/login/login' // 登录页

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home' // 重定向
  },
  // 首页
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  // 登录页
  {
    path: '/login',
    name: 'login',
    component: Login
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
