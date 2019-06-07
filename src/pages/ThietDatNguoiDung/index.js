import { connect } from 'react-redux'
import ThietDatNguoiDung from './ThietDatNguoiDung'
import {
  getUsers,
  getUserEditing,
  editUser,
  addUser
} from '../../reducers/user'

export default connect(
  state => ({
    usersList: state.user.usersList,
    userEditing: state.user.userEditing
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
    }
  })
)(ThietDatNguoiDung)
