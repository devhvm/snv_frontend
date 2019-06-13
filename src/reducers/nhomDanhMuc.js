import { handleActions, createAction } from 'redux-actions'
import { rest } from '../utils/rest'

// Action
export const NHOM_DANH_MUC = 'NHOM_DANH_MUC'
export const NHOM_DANH_MUC_EDITING = 'NHOM_DANH_MUC_EDITING'

// Action Creator
export const getNhomDanhMuc = () => dispatch => {
  rest
    .get('common/api/nhom-danh-mucs')
    .then(res => {
      dispatch(getNhomDanhMucRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

export const getNhomDanhMucEditing = id => dispatch => {
  rest
    .get(`common/api/nhom-danh-mucs/${id}`)
    .then(res => {
      dispatch(getNhomDanhMucEditingRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

export const editNhomDanhMuc = form => dispatch => {
  rest
    .put('common/api/nhom-danh-mucs', form)
    .then(() => {
      dispatch(getNhomDanhMuc())
    })
    .catch(err => {
      console.log(err)
    })
}

export const addNhomDanhMuc = form => dispatch => {
  rest
    .post('common/api/nhom-danh-mucs', form)
    .then(() => {
      dispatch(getNhomDanhMuc())
    })
    .catch(err => {
      console.log(err)
    })
}

export const deleteNhomChiTieu = id => dispatch => {
  rest
    .delete(`common/api/nhom-danh-mucs/${id}`)
    .then(res => {
      dispatch(getNhomDanhMuc())
    })
    .catch(err => {
      console.log(err)
    })
}

const getNhomDanhMucRequest = createAction(NHOM_DANH_MUC)
const getNhomDanhMucEditingRequest = createAction(NHOM_DANH_MUC_EDITING)

// Initial State
const initialState = {
  nhomDanhMucList: [],
  nhomDanhMucEditing: {}
}

// reducer
export default handleActions(
  {
    [NHOM_DANH_MUC]: (state, { payload }) => ({
      ...state,
      nhomDanhMucList: payload
    }),
    [NHOM_DANH_MUC_EDITING]: (state, { payload }) => ({
      ...state,
      nhomDanhMucEditing: payload
    })
  },
  initialState
)
