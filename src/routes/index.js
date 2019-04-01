import React from 'react'
import { Switch } from 'react-router-dom'
import AdminDashBoardPage from './AdminDashBoardPage'

const routes = (
  <div className='App'>
    <Switch>
      {/* <Route path='/login' component={LoginPage} /> */}
      <AdminDashBoardPage />
    </Switch>
  </div>
)

export default routes
