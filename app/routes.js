import {
    publicView,
    publicDaySelectionView,
    publicSlotSelectionView,
    publicContactInfosView,
    publicSlotSelectedView,
    dashboardView } from './views'

export default [
  {
    path: '/public/:hash',
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
        path: ':day/:timeBegin/:timeEnd',
        name: 'publicContactInfosView',
        component: publicContactInfosView
      },
      {
        path: ':day/:timeBegin/:timeEnd/done',
        name: 'publicSlotSelectedView',
        component: publicSlotSelectedView
      }
    ]
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboardView
  },
  {
    path: '/',
    redirect: '/dashboard'
  }
]
