import { connect } from 'react-redux'
import NhomChiTieu from './NhomChiTieu'
import {
  getNhomChiTieu,
  getNhomChiTieuEditing,
  editNhomChiTieu,
  addNhomChiTieu,
  deleteNhomChiTieu
} from '../../../reducers/nhomChiTieu'

export default connect(
  state => ({
    ...state.nhomChiTieu
  }),
  dispatch => ({
    getNhomChiTieu: () => {
      dispatch(getNhomChiTieu())
    },
    getNhomChiTieuEditing: id => {
      dispatch(getNhomChiTieuEditing(id))
    },
    editNhomChiTieu: form => {
      dispatch(editNhomChiTieu(form))
    },
    addNhomChiTieu: form => {
      dispatch(addNhomChiTieu(form))
    },
    deleteNhomChiTieu: id => {
      dispatch(deleteNhomChiTieu(id))
    }
  })
)(NhomChiTieu)
