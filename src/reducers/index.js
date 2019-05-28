import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import login from './login'
import mauphathanh from './mauphathanh'
import quanLiDonVi from './quanLiDonVi'

export default history =>
  combineReducers({
    router: connectRouter(history),
    login,
    mauphathanh,
    quanLiDonVi
  })
