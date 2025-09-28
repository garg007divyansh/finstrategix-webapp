/* eslint-disable no-unused-vars */
import React, {Suspense, lazy} from 'react'
import {Routes, Route, Navigate, Outlet} from 'react-router-dom'
import * as routesNames from '../../constants/routes'
import AppLayout from '../../config/default/default'
import {Loader} from '../../components'
import { getItem } from '../../utilities/authUtils'

const Login = lazy(() => import('../../views/Login'))
const Dashboard = lazy(() => import('../../views/Dashboard'))
const Kyc = lazy(() => import('../../views/Kyc'))
const Customers = lazy(() => import('../../views/Customers'))
const LoanApplications = lazy(() => import('../../views/LoanApplications'))
const Accounts = lazy(() => import('../../views/Accounts'))
const Reports = lazy(() => import('../../views/Reports'))
const Settings = lazy(() => import('../../views/Settings'))

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
        <Route path={routesNames.KYC} element={<Suspense fallback={<Loader />}><AppLayout><Kyc /></AppLayout></Suspense>} />
        <Route path={routesNames.CUSTOMERS} element={<Suspense fallback={<Loader />}><AppLayout><Customers /></AppLayout></Suspense>} />
        <Route path={routesNames.LOANAPPLICATIONS} element={<Suspense fallback={<Loader />}><AppLayout><LoanApplications /></AppLayout></Suspense>} />
        <Route path={routesNames.ACCOUNTS} element={<Suspense fallback={<Loader />}><AppLayout><Accounts /></AppLayout></Suspense>} />
        <Route path={routesNames.REPORTS} element={<Suspense fallback={<Loader />}><AppLayout><Reports /></AppLayout></Suspense>} />
        <Route path={routesNames.SETTINGS} element={<Suspense fallback={<Loader />}><AppLayout><Settings /></AppLayout></Suspense>} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
