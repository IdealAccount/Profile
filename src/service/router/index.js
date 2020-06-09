import Vue from 'vue'
import VueRouter from 'vue-router'
import UserProfile from '../../pages/profile/UserProfile'
import General from '../../templates/profile/ProfileGeneral'
import MyEarnings from '../../templates/profile/ProfileEarnings'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name : 'profile.general'}
  },
  {
    path: '/profile',
    name: 'profile',
    component: UserProfile,
  },
  {
    path: '/profile/edit',
    name: 'profile.edit',
    component: () => import('../../pages/profile/UserProfileEdit')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
