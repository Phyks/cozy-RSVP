import { publicView, dashboardView } from './views'

export default [
  {
    path: '/public/:hash',
    component: publicView
  },
  {
    path: '/dashboard',
    alias: '/',
    component: dashboardView
  }
]
