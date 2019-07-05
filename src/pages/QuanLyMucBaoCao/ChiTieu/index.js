import { connect } from 'react-redux'
import ChiTieu from './ChiTieu'
import {
  addChiTieu,
  deleteChiTieu,
  editChiTieu,
  getChiTieuEditing,
  getChiTieus
} from '../../../reducers/chiTieu'

export default connect(
  state => ({
    ...state.chiTieu
  }),
  dispatch => ({
    getChiTieus: () => {
      dispatch(getChiTieus())
    },
    getChiTieuEditing: id => {
      dispatch(getChiTieuEditing(id))
    },
    editChiTieu: form => {
      dispatch(editChiTieu(form))
    },
    addChiTieu: form => {
      dispatch(addChiTieu(form))
    },
    deleteChiTieu: id => {
      dispatch(deleteChiTieu(id))
    }
  })
)(ChiTieu)
