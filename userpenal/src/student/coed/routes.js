/* eslint-disable */ 
import React from 'react'
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Survey = React.lazy(() => import('./views/survey/index'))
const SurveyList = React.lazy(() => import('./views/survey/serveylist'))

const routes = [
  { path: '/coed/app/', exact: true, element: Dashboard },
  { path: '/coed/app/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/coed/app/servey', name: 'Survey', element: SurveyList, exact: true },
  { path: '/coed/app/servey/form', name: 'form', element: Survey ,exact: true},
  { path: '/coed/app/servey/form/:id', name: 'form', element: Survey ,exact: true},
]
 
export default routes
