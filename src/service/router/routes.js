import auth from './auth';
import pages from './pages'

export const routes = [
  {
    path: '*',
    redirect: {name: 'profile'}
  },
  ...auth,
  ...pages,
]
