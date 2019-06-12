import { connect } from 'react-redux'
import ThietDatTieuChi from './ThietDatTieuChi'
import {
  addTieuChi,
  deleteTieuChi,
  editTieuChi,
  getTieuChiEditing,
  getTieuChis
} from '../../reducers/tieuChi'

import { getCoQuanChuTris } from '../../reducers/coQuanChuTri'

import { getChiTieus } from '../../reducers/chiTieu'

import { getKyCongBos } from '../../reducers/kyCongBo'

export default connect(
  state => ({
    ...state.tieuChi,
    ...state.kyCongBo,
    ...state.coQuanChuTri,
    ...state.chiTieu
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
    },
    getKyCongBos: () => {
      dispatch(getKyCongBos())
    },
    getChiTieus: () => {
      dispatch(getChiTieus())
    },
    getCoQuanChuTris: () => {
      dispatch(getCoQuanChuTris())
    }
  })
)(ThietDatTieuChi)
