import { connect } from 'react-redux'
import QuanLyHangMuc from './QuanLyHangMuc'
import {
  getCoQuanHanhChinh,
  getCoQuanHanhChinhEditing,
  editCoQuanHanhChinh,
  addCoQuanHanhChinh,
  deleteCoQuanHanhChinh
} from '../../reducers/coQuanHanhChinh'

export default connect(
  state => ({
    ...state.coQuanHanhChinh,
    ...state.maDinhDanh,
    ...state.quyTrinh
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
)(QuanLyHangMuc)
