import auth from './auth';
import profile from './user'

export const routes = [
  {
    path: '*',
    redirect: {name: 'profile'}
  },
  ...auth,
  ...profile,
]
