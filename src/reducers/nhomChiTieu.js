import { handleActions, createAction } from 'redux-actions'
import { rest } from '../utils/rest'

// Action
export const NHOM_CHI_TIEU = 'NHOM_CHI_TIEU'
export const NHOM_CHI_TIEU_EDITING = 'NHOM_CHI_TIEU_EDITING'

// Action Creator
export const getNhomChiTieu = () => dispatch => {
  rest
    .get('common/api/nhom-chi-tieus')
    .then(res => {
      dispatch(getNhomChiTieuRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

export const getNhomChiTieuEditing = id => dispatch => {
  rest
    .get(`common/api/nhom-chi-tieus/${id}`)
    .then(res => {
      dispatch(getNhomChiTieuEditingRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

export const editNhomChiTieu = form => dispatch => {
  rest
    .put('common/api/nhom-chi-tieus', form)
    .then(() => {
      dispatch(getNhomChiTieu())
    })
    .catch(err => {
      console.log(err)
    })
}

export const addNhomChiTieu = form => dispatch => {
  rest
    .post('common/api/nhom-chi-tieus', form)
    .then(() => {
      dispatch(getNhomChiTieu())
    })
    .catch(err => {
      console.log(err)
    })
}

export const deleteNhomChiTieu = id => dispatch => {
  rest
    .delete(`common/api/nhom-chi-tieus/${id}`)
    .then(res => {
      dispatch(getNhomChiTieu())
    })
    .catch(err => {
      console.log(err)
    })
}

const getNhomChiTieuRequest = createAction(NHOM_CHI_TIEU)
const getNhomChiTieuEditingRequest = createAction(NHOM_CHI_TIEU_EDITING)

// Initial State
const initialState = {
  nhomChiTieuList: [],
  nhomChiTieuEditing: {}
}

// reducer
export default handleActions(
  {
    [NHOM_CHI_TIEU]: (state, { payload }) => ({
      ...state,
      nhomChiTieuList: payload
    }),
    [NHOM_CHI_TIEU_EDITING]: (state, { payload }) => ({
      ...state,
      nhomChiTieuEditing: payload
    })
  },
  initialState
)
