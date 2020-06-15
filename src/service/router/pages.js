export default [
  {
    path: '/',
    component: () => import('@/views/MainTemplate'),
    children: [
      {
        path: '/education/profile',
        name: 'profile',
        component: () => import('@/pages/user/UserProfile'),
        children: [
          {
            path: '/education/profile/edit',
            name: 'profile.edit',
            component: () => import('@/pages/user/UserProfileEdit')
          },
          {
            path: '/education/profile/documents',
            name: 'documents',
            component: () => import('@/pages/user/UserDocuments')
          },
          {
            path: '/education/profile/standards',
            name: 'standards',
            component: () => import('@/pages/user/UserStandards')
          },
          {
            path: '/education/profile/marketing-plan',
            name: 'marketing',
            component: () => import('@/pages/MarketingPlan'),
          }
        ]
      },
      {
        path: '/statistic',
        name: 'statistic',
        component: () => import('@/pages/user/UserStatistic')
      },

    ]
  },
]
