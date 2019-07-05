import { connect } from 'react-redux'
import SideBar from './SideBar'

export default connect(
  state => ({
    ...state.login
  }),
  dispatch => ({})
)(SideBar)
