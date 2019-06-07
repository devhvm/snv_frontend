import { handleActions, createAction } from 'redux-actions'
import { rest } from '../utils/rest'

// Action
export const TIEU_CHI = 'TIEU_CHI'
export const TIEU_CHI_EDITING = 'TIEU_CHI_EDITING'

// Action Creator
export const getTieuChis = () => dispatch => {
  rest
    .get('common/api/tieu-chis')
    .then(res => {
      dispatch(getTieuChiRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

export const getTieuChiEditing = id => dispatch => {
  rest
    .get(`quytrinhdonvi/api/co-quan-hanh-chinhs/${id}`)
    .then(res => {
      dispatch(getTieuChiEditingRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

export const editTieuChi = form => dispatch => {
  rest
    .put(`quytrinhdonvi/api/co-quan-hanh-chinhs/`)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}

export const addTieuChi = form => dispatch => {
  rest
    .post(`quytrinhdonvi/api/co-quan-hanh-chinhs/`)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}

export const deleteTieuChi = id => dispatch => {
  rest
    .delete(`quytrinhdonvi/api/co-quan-hanh-chinhs/`)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}

const getTieuChiRequest = createAction(TIEU_CHI)
const getTieuChiEditingRequest = createAction(TIEU_CHI_EDITING)

// Initial State
const initialState = {
  tieuChiList: [],
  tieuChiEditing: {}
}

// reducer
export default handleActions(
  {
    [TIEU_CHI]: (state, { payload }) => ({
      ...state,
      tieuChiList: payload
    }),
    [TIEU_CHI_EDITING]: (state, { payload }) => ({
      ...state,
      tieuChiEditing: payload
    })
  },
  initialState
)