import { connect } from 'react-redux'
import QuanLyCoQuanChuTri from './QuanLyCoQuanChuTri'
import {
  addCoQuanChuTri,
  deleteCoQuanChuTri,
  editCoQuanChuTri,
  getCoQuanChuTriEditing,
  getCoQuanChuTris
} from '../../reducers/coQuanChuTri'

import { getMaDinhDanhs } from '../../reducers/maDinhDanh'

export default connect(
  state => ({
    ...state.coQuanChuTri,
    ...state.maDinhDanh
  }),
  dispatch => ({
    getCoQuanChuTris: () => {
      dispatch(getCoQuanChuTris())
    },
    getCoQuanChuTriEditing: id => {
      dispatch(getCoQuanChuTriEditing(id))
    },
    editCoQuanChuTri: form => {
      dispatch(editCoQuanChuTri(form))
    },
    addCoQuanChuTri: form => {
      dispatch(addCoQuanChuTri(form))
    },
    deleteCoQuanChuTri: id => {
      dispatch(deleteCoQuanChuTri(id))
    },
    getMaDinhDanhs: () => {
      dispatch(getMaDinhDanhs())
    }
  })
)(QuanLyCoQuanChuTri)
