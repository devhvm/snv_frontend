import { connect } from 'react-redux'
import QuanLyDonVi from './QuanLyDonVi'
import {
  getCoQuanHanhChinh,
  getCoQuanHanhChinhEditing,
  editCoQuanHanhChinh,
  addCoQuanHanhChinh,
  deleteCoQuanHanhChinh
} from '../../reducers/coQuanHanhChinh'

import { getMaDinhDanhs } from '../../reducers/maDinhDanh'

import { getQuyTrinhs } from '../../reducers/quyTrinh'

export default connect(
  state => ({
    ...state.quanLiDonVi,
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
    },
    getMaDinhDanhs: () => {
      dispatch(getMaDinhDanhs())
    },
    getQuyTrinhs: () => {
      dispatch(getQuyTrinhs())
    }
  })
)(QuanLyDonVi)
