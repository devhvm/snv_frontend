import { connect } from 'react-redux'
import NoiDungBaoCao from './NoiDungBaoCao'
import {
  addNoiDungBaoCao,
  deleteNoiDungBaoCao,
  editNoiDungBaoCao,
  getNoiDungBaoCaoEditing,
  getNoiDungBaoCaos
} from '../../../reducers/noiDungBaoCao'

export default connect(
  state => ({
    ...state.noiDungBaoCao
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
    }
  })
)(NoiDungBaoCao)
