import { connect } from 'react-redux'
import DonViChuQuan from './DonViChuQuan'
import {
  getDonViChuQuan,
  getDonViChuQuanEditing,
  editDonViChuQuan,
  addDonViChuQuan,
  deleteDonViChuQuan
} from '../../reducers/donViChuQuan'

export default connect(
  state => ({
    ...state.donViChuQuan
  }),
  dispatch => ({
    getDonViChuQuan: () => {
      dispatch(getDonViChuQuan())
    },
    getDonViChuQuanEditing: id => {
      dispatch(getDonViChuQuanEditing(id))
    },
    editDonViChuQuan: form => {
      dispatch(editDonViChuQuan(form))
    },
    addDonViChuQuan: form => {
      dispatch(addDonViChuQuan(form))
    },
    deleteDonViChuQuan: id => {
      dispatch(deleteDonViChuQuan(id))
    }
  })
)(DonViChuQuan)
