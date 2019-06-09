import { connect } from 'react-redux'
import PhanTo from './PhanTo'
import {
  addPhanTo,
  deletePhanTo,
  editPhanTo,
  getPhanToEditing,
  getPhanTos
} from '../../../reducers/phanTo'

export default connect(
  state => ({
    ...state.phanTo
  }),
  dispatch => ({
    getPhanTos: () => {
      dispatch(getPhanTos())
    },
    getPhanToEditing: id => {
      dispatch(getPhanToEditing(id))
    },
    editPhanTo: form => {
      dispatch(editPhanTo(form))
    },
    addPhanTo: form => {
      dispatch(addPhanTo(form))
    },
    deletePhanTo: id => {
      dispatch(deletePhanTo(id))
    }
  })
)(PhanTo)
