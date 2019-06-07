import { connect } from 'react-redux'
import ThietDatTieuChi from './ThietDatTieuChi'
import {
  addTieuChi,
  deleteTieuChi,
  editTieuChi,
  getTieuChiEditing,
  getTieuChis
} from '../../reducers/tieuChi'

export default connect(
  state => ({
    ...state.tieuChi
  }),
  dispatch => ({
    getTieuChis: () => {
      dispatch(getTieuChis())
    },
    getTieuChiEditing: id => {
      dispatch(getTieuChiEditing(id))
    },
    editTieuChi: form => {
      dispatch(editTieuChi(form))
    },
    addTieuChi: form => {
      dispatch(addTieuChi(form))
    },
    deleteTieuChi: id => {
      dispatch(deleteTieuChi(id))
    }
  })
)(ThietDatTieuChi)
