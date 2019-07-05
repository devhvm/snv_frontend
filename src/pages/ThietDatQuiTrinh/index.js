import { connect } from 'react-redux'
import ThietDatQuiTrinh from './ThietDatQuiTrinh'
import {
  getQuyTrinhs,
  getQuyTrinhEditing,
  editQuyTrinh,
  addQuyTrinh,
  deleteQuyTrinh
} from '../../reducers/quyTrinh'

export default connect(
  state => ({
    ...state.quyTrinh
  }),
  dispatch => ({
    getQuyTrinhs: () => {
      dispatch(getQuyTrinhs())
    },
    getQuyTrinhEditing: id => {
      dispatch(getQuyTrinhEditing(id))
    },
    editQuyTrinh: form => {
      dispatch(editQuyTrinh(form))
    },
    addQuyTrinh: form => {
      dispatch(addQuyTrinh(form))
    },
    deleteQuyTrinh: id => {
      dispatch(deleteQuyTrinh(id))
    }
  })
)(ThietDatQuiTrinh)
