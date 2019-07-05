import { handleActions, createAction } from 'redux-actions'
import { rest } from '../utils/rest'

// Action
export const TIEU_CHI = 'TIEU_CHI'
export const TIEU_CHI_EDITING = 'TIEU_CHI_EDITING'

// Action Creator
export const getTieuChis = () => dispatch => {
  rest
    .get('common/api/tieu-chis?size=100')
    .then(res => {
      dispatch(getTieuChiRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

export const getTieuChiEditing = id => dispatch => {
  rest
    .get(`common/api/tieu-chis/${id}`)
    .then(res => {
      dispatch(getTieuChiEditingRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

export const editTieuChi = form => dispatch => {
  rest
    .put(`common/api/tieu-chis/`, form)
    .then(() => {
      dispatch(getTieuChis())
    })
    .catch(err => {
      console.log(err)
    })
}

export const addTieuChi = form => dispatch => {
  rest
    .post('common/api/tieu-chis', form)
    .then(() => {
      dispatch(getTieuChis())
    })
    .catch(err => {
      console.log(err)
    })
}

export const deleteTieuChi = id => dispatch => {
  rest
    .delete(`common/api/tieu-chis/${id}`)
    .then(res => {
      dispatch(getTieuChis())
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
