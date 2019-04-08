import React from 'react'
import { Switch } from 'react-router-dom'
import DashBoardPage from './DashBoardPage'

const routes = (
  <div className='App'>
    <Switch>
      {/* <Route path='/login' component={LoginPage} /> */}
      <DashBoardPage />
    </Switch>
  </div>
)

export default routes
