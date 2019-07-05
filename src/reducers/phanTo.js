import { handleActions, createAction } from 'redux-actions'
import { rest } from '../utils/rest'

// Action
export const PHAN_TO = 'PHAN_TO'
export const PHAN_TO_EDITING = 'PHAN_TO_EDITING'

// Action Creator
export const getPhanTos = () => dispatch => {
  rest
    .get('common/api/nhom-danh-mucs')
    .then(res => {
      dispatch(getPhanToRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

export const getPhanToEditing = id => dispatch => {
  rest
    .get(`common/api/nhom-danh-mucs/${id}`)
    .then(res => {
      dispatch(getPhanToEditingRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

export const editPhanTo = form => dispatch => {
  rest
    .put(`common/api/nhom-danh-mucs/`, form)
    .then(() => {
      dispatch(getPhanTos())
    })
    .catch(err => {
      console.log(err)
    })
}

export const addPhanTo = form => dispatch => {
  rest
    .post('common/api/nhom-danh-mucs', form)
    .then(() => {
      dispatch(getPhanTos())
    })
    .catch(err => {
      console.log(err)
    })
}

export const deletePhanTo = id => dispatch => {
  rest
    .delete(`common/api/nhom-danh-mucs/${id}`)
    .then(() => {
      dispatch(getPhanTos())
    })
    .catch(err => {
      console.log(err)
    })
}

const getPhanToRequest = createAction(PHAN_TO)
const getPhanToEditingRequest = createAction(PHAN_TO_EDITING)

// Initial State
const initialState = {
  phanToList: [],
  phanToEditing: {}
}

// reducer
export default handleActions(
  {
    [PHAN_TO]: (state, { payload }) => ({
      ...state,
      phanToList: payload
    }),
    [PHAN_TO_EDITING]: (state, { payload }) => ({
      ...state,
      phanToEditing: payload
    })
  },
  initialState
)
