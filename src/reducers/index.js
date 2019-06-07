import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import login from './login'
import mauphathanh from './mauphathanh'
import quanLiDonVi from './quanLiDonVi'
import user from './user'
import quyTrinh from './quyTrinh'
import nhomChiTieu from './nhomChiTieu'
import chiTieu from './chiTieu'
import noiDungBaoCao from './noiDungBaoCao'
import tieuChi from './tieuChi'
import coQuanChuTri from './coQuanChuTri'

export default history =>
  combineReducers({
    router: connectRouter(history),
    login,
    mauphathanh,
    quanLiDonVi,
    user,
    quyTrinh,
    nhomChiTieu,
    chiTieu,
    noiDungBaoCao,
    tieuChi,
    coQuanChuTri
  })
