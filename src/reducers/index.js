import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import login from './login'
import mauphathanh from './mauphathanh'
import coQuanHanhChinh from './coQuanHanhChinh'
import user from './user'
import quyTrinh from './quyTrinh'
import nhomChiTieu from './nhomChiTieu'
import chiTieu from './chiTieu'
import noiDungBaoCao from './noiDungBaoCao'
import tieuChi from './tieuChi'
import coQuanChuTri from './coQuanChuTri'
import maDinhDanh from './maDinhDanh'
import phanTo from './phanTo'
import kyCongBo from './kyCongBo'
import nhomDanhMuc from './nhomDanhMuc'

export default history =>
  combineReducers({
    router: connectRouter(history),
    login,
    mauphathanh,
    coQuanHanhChinh,
    user,
    quyTrinh,
    nhomChiTieu,
    chiTieu,
    noiDungBaoCao,
    tieuChi,
    coQuanChuTri,
    maDinhDanh,
    phanTo,
    kyCongBo,
    nhomDanhMuc
  })
