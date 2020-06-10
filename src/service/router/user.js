export default [
  {
    path: '/',
    component: () => import('@/views/MainTemplate'),
    children: [
      {
        path: '/profile',
        name: 'profile',
        component: () => import('@/pages/user/UserProfile'),
      },
      {
        path: '/profile/edit',
        name: 'profile.edit',
        component: () => import('@/pages/user/UserProfileEdit')
      },
      {
        path: '/profile/documents',
        name: 'documents',
        component: () => import('@/pages/user/UserDocuments')
      },
      {
        path: '/profile/standards',
        name: 'standards',
        component: () => import('@/pages/user/UserStandards')
      },
      {
        path: '/profile/marketing-plan',
        name: 'marketing',
        component: () => import('@/pages/MarketingPlan'),
      }
    ]
  },
]
