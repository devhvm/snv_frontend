import { connect } from 'react-redux'
import QuanLyDonVi from './QuanLyDonVi'
import {
  getCoQuanHanhChinh,
  getCoQuanHanhChinhEditing,
  editCoQuanHanhChinh,
  addCoQuanHanhChinh,
  deleteCoQuanHanhChinh
} from '../../reducers/quanLiDonVi'

export default connect(
  state => ({
    ...state.quanLiDonVi
  }),
  dispatch => ({
    getCoQuanHanhChinh: () => {
      dispatch(getCoQuanHanhChinh())
    },
    getCoQuanHanhChinhEditing: id => {
      dispatch(getCoQuanHanhChinhEditing(id))
    },
    editCoQuanHanhChinh: form => {
      dispatch(editCoQuanHanhChinh(form))
    },
    addCoQuanHanhChinh: form => {
      dispatch(addCoQuanHanhChinh(form))
    },
    deleteCoQuanHanhChinh: form => {
      dispatch(deleteCoQuanHanhChinh(form))
    }
  })
)(QuanLyDonVi)
