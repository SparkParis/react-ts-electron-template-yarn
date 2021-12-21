import React, { lazy } from 'react'
import { RouteConfig } from 'react-router-config'
import { Redirect } from 'react-router-dom'

const HomePage = lazy(() => import('@src/pages/home'))

const routes: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to='/home' />
  },
  {
    path: '/home',
    exact: true,
    component: HomePage
  },
  {
    path: '*',
    render: () => <Redirect to='/' />
  }
]

export default routes
