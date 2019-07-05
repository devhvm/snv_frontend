import { connect } from 'react-redux'
import LoginPage from './LoginPage'
import { login } from '../../reducers/login'

export default connect(
  state => ({
    ...state.login
  }),
  dispatch => ({
    login
  })
)(LoginPage)
