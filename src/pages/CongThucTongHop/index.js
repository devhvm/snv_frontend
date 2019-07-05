import { connect } from 'react-redux'
import CongThucTongHop from './CongThucTongHop'
import {
  getCoQuanHanhChinh,
  getCoQuanHanhChinhEditing,
  editCoQuanHanhChinh,
  addCoQuanHanhChinh,
  deleteCoQuanHanhChinh
} from '../../reducers/coQuanHanhChinh'

export default connect(
  state => ({
    ...state.coQuanHanhChinh
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
)(CongThucTongHop)
