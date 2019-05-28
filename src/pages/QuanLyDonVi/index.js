import { connect } from 'react-redux'
import QuanLyDonVi from './QuanLyDonVi'
import { getCoQuanHanhChinh } from '../../reducers/quanLiDonVi'

export default connect(
  state => ({
    data: state.quanLiDonVi
  }),
  {
    getCoQuanHanhChinh
  }
)(QuanLyDonVi)
