import { publicView, dashboardView } from './views'

export default [
  {
    path: '/',
    component: publicView
  },
  {
    path: '/dashboard',
    component: dashboardView
  }
]
