import { connect } from 'react-redux'
import ThietDatNguoiDung from './ThietDatNguoiDung'
import {
  getUsers,
  getUserEditing,
  editUser,
  addUser
} from '../../reducers/user'
import { getCoQuanHanhChinh } from '../../reducers/coQuanHanhChinh'

export default connect(
  state => ({
    ...state.user,
    ...state.coQuanHanhChinh
  }),
  dispatch => ({
    getUsers: () => {
      dispatch(getUsers())
    },
    getUserEditing: id => {
      dispatch(getUserEditing(id))
    },
    editUser: form => {
      dispatch(editUser(form))
    },
    addUser: form => {
      dispatch(addUser(form))
    },
    getCoQuanHanhChinh: () => {
      dispatch(getCoQuanHanhChinh())
    }
  })
)(ThietDatNguoiDung)
