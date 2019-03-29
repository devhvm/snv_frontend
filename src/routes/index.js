import React from 'react'
import { Switch } from 'react-router-dom'
// import config from '../config'
// import Auth from './Auth'
// import LoginPage from '../components/page/LoginPage'
import DashboardPage from './DashboardPage'
// import { init } from '../components/helpers/auth'

// init(config.clientId)

const routes = (
  <div className='App'>
    <Switch>
      {/* <Route path='/login' component={LoginPage} /> */}
      <DashboardPage />
    </Switch>
  </div>
)

export default routes
