export default [
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
]
