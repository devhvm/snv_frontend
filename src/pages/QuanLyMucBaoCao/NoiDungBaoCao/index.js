import { connect } from 'react-redux'
import NoiDungBaoCao from './NoiDungBaoCao'
import {
  addNoiDungBaoCao,
  deleteNoiDungBaoCao,
  editNoiDungBaoCao,
  getNoiDungBaoCaoEditing,
  getNoiDungBaoCaos
} from '../../../reducers/noiDungBaoCao'

import { getChiTieus } from '../../../reducers/chiTieu'
import { getNhomDanhMuc } from '../../../reducers/nhomDanhMuc'

export default connect(
  state => ({
    ...state.noiDungBaoCao,
    ...state.chiTieu,
    ...state.nhomDanhMuc
  }),
  dispatch => ({
    getNoiDungBaoCaos: () => {
      dispatch(getNoiDungBaoCaos())
    },
    getNoiDungBaoCaoEditing: id => {
      dispatch(getNoiDungBaoCaoEditing(id))
    },
    editNoiDungBaoCao: form => {
      dispatch(editNoiDungBaoCao(form))
    },
    addNoiDungBaoCao: form => {
      dispatch(addNoiDungBaoCao(form))
    },
    deleteNoiDungBaoCao: id => {
      dispatch(deleteNoiDungBaoCao(id))
    },
    getChiTieus: () => {
      dispatch(getChiTieus())
    },
    getNhomDanhMuc: () => {
      dispatch(getNhomDanhMuc())
    }
  })
)(NoiDungBaoCao)
