import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/MainTemplate'),
    children: [
      {
        path: '/profile',
        name: 'profile',
        component: () => import('@/pages/profile/UserProfile'),
      },
      {
        path: '/profile/edit',
        name: 'profile.edit',
        component: () => import('@/pages/profile/UserProfileEdit')
      }
    ]
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('@/views/VAuth'),
    children: [
      {
        path: '/auth/login',
        name: 'login',
        component: () => import('@/pages/auth/VLogin')
      },
      {
        path: '/auth/registration',
        name: 'registration',
        component: () => import('@/pages/auth/VRegistration')
      }
    ]
  },
/*  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/pages/profile/UserProfile'),
  },
  {
    path: '/profile/edit',
    name: 'profile.edit',
    component: () => import('@/pages/profile/UserProfileEdit')
  }*/
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
