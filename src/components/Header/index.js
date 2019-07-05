import { connect } from 'react-redux'
import { logOut, toggleSideBar } from '../../reducers/login'
// import { getUser } from '../../helpers/auth'
import Header from './Header'

export default connect(
  state => ({
    ...state.login
  }),
  dispatch => ({
    logOut: () => {
      dispatch(logOut())
    },
    toggleSideBar: collapsed => {
      dispatch(toggleSideBar(collapsed))
    }
  })
)(Header)
