import { handleActions, createAction } from 'redux-actions'
import { rest } from '../utils/rest'

// Action
export const CO_QUAN_CHU_TRI = 'CO_QUAN_CHU_TRI'
export const CO_QUAN_CHU_TRI_EDITING = 'CO_QUAN_CHU_TRI_EDITING'

// Action Creator
export const getCoQuanChuTris = () => dispatch => {
  rest
    .get('common/api/chi-tieus')
    .then(res => {
      dispatch(getCoQuanChuTriRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

export const getCoQuanChuTriEditing = id => dispatch => {
  rest
    .get(`quytrinhdonvi/api/co-quan-hanh-chinhs/${id}`)
    .then(res => {
      dispatch(getCoQuanChuTriEditingRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

export const editCoQuanChuTri = form => dispatch => {
  rest
    .put(`quytrinhdonvi/api/co-quan-hanh-chinhs/`)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}

export const addCoQuanChuTri = form => dispatch => {
  rest
    .post('common/api/nhom-chi-tieus')
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}

export const deleteCoQuanChuTri = id => dispatch => {
  rest
    .delete(`common/api/nhom-chi-tieus/${id}`)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}

const getCoQuanChuTriRequest = createAction(CO_QUAN_CHU_TRI)
const getCoQuanChuTriEditingRequest = createAction(CO_QUAN_CHU_TRI_EDITING)

// Initial State
const initialState = {
  coQuanChuTriList: [],
  coQuanChuTriEditing: {}
}

// reducer
export default handleActions(
  {
    [CO_QUAN_CHU_TRI]: (state, { payload }) => ({
      ...state,
      coQuanChuTriList: payload
    }),
    [CO_QUAN_CHU_TRI_EDITING]: (state, { payload }) => ({
      ...state,
      coQuanChuTriEditing: payload
    })
  },
  initialState
)
