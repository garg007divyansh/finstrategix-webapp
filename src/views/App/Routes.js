/* eslint-disable no-unused-vars */
import React, {Suspense, lazy} from 'react'
import {Routes, Route, Navigate, Outlet} from 'react-router-dom'
import * as routesNames from '../../constants/routes'
import AppLayout from '../../config/default/default'
import {Loader} from '../../components'
import { getItem } from '../../utilities/authUtils'

const Login = lazy(() => import('../../views/Login'))
const Dashboard = lazy(() => import('../../views/Dashboard'))

const AppRoutes = () => {

  const PrivateRoute = ({route}) => {
    const isSignedIn = getItem('token')
    if (!isSignedIn) {
      return <Navigate to={route} />
    }
    return <Outlet />
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to={routesNames.LOGIN} />} />
      <Route path={routesNames.LOGIN} element={<Suspense fallback={<Loader />}><Login /></Suspense>} />
      <Route element={<PrivateRoute route={routesNames.LOGIN} />}>
        <Route path={routesNames.DASHBOARD} element={<Suspense fallback={<Loader />}><AppLayout><Dashboard /></AppLayout></Suspense>} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
