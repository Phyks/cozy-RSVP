import { publicView, publicDaySelectionView, publicSlotSelectionView, publicSlotSelectedView, dashboardView } from './views'

export default [
  {
    path: '/public/:hash',
    name: 'publicView',
    component: publicView,
    children: [
        {
            path: '',
            name: 'publicDaySelectionView',
            component: publicDaySelectionView
        },
        {
            path: ':day',
            name: 'publicSlotSelectionView',
            component: publicSlotSelectionView
        },
        {
            path: ':day/:slot',
            name: 'publicSlotSelectedView',
            component: publicSlotSelectedView
        }
    ]
  },
  {
    path: '/dashboard',
    alias: '/',
    name: 'dashboard',
    component: dashboardView
  }
]
