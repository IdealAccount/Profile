import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from '@/pages/profile/UserProfile'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Profile',
    component: Profile
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
