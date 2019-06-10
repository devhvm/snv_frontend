import { handleActions, createAction } from 'redux-actions'
import { rest } from '../utils/rest'

// Action
export const CHI_TIEU = 'CHI_TIEU'
export const CHI_TIEU_EDITING = 'NHOM_CHI_TIEU_EDITING'

// Action Creator
export const getChiTieus = () => dispatch => {
  rest
    .get('common/api/chi-tieus')
    .then(res => {
      dispatch(getChiTieuRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

export const getChiTieuEditing = id => dispatch => {
  rest
    .get(`common/api/chi-tieus/${id}`)
    .then(res => {
      dispatch(getChiTieuEditingRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

export const editChiTieu = form => dispatch => {
  rest
    .put(`common/api/chi-tieus/`)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}

export const addChiTieu = form => dispatch => {
  rest
    .post('common/api/chi-tieus', form)
    .then(res => {
      console.log(res)
      dispatch(getChiTieus())
    })
    .catch(err => {
      console.log(err)
    })
}

export const deleteChiTieu = id => dispatch => {
  rest
    .delete(`common/api/nhom-chi-tieus/${id}`)
    .then(res => {
      console.log(res)
      dispatch(getChiTieus())
    })
    .catch(err => {
      console.log(err)
    })
}

const getChiTieuRequest = createAction(CHI_TIEU)
const getChiTieuEditingRequest = createAction(CHI_TIEU_EDITING)

// Initial State
const initialState = {
  chiTieuList: [],
  chiTieuEditing: {}
}

// reducer
export default handleActions(
  {
    [CHI_TIEU]: (state, { payload }) => ({
      ...state,
      chiTieuList: payload
    }),
    [CHI_TIEU_EDITING]: (state, { payload }) => ({
      ...state,
      chiTieuEditing: payload
    })
  },
  initialState
)
