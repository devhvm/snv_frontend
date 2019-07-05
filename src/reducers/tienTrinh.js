import { handleActions, createAction } from 'redux-actions'
import { rest } from '../utils/rest'

// Action
export const TIEN_TRINH = 'TIEN_TRINH'
export const TIEN_TRINH_EDITING = 'TIEN_TRINH_EDITING'

// Action Creator
export const getTienTrinhs = () => dispatch => {
  rest
    .get('quanlyquytrinh/api/tien-trinhs')
    .then(res => {
      dispatch(getTienTrinhsRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

export const getTienTrinhEditing = id => dispatch => {
  rest
    .get(`quytrinhdonvi/api/co-quan-hanh-chinhs/${id}`)
    .then(res => {
      dispatch(getTienTrinhEditingRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

export const editTienTrinh = form => dispatch => {
  rest
    .put(`quytrinhdonvi/api/co-quan-hanh-chinhs/`)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}

export const addTienTrinh = form => dispatch => {
  rest
    .post(`quytrinhdonvi/api/co-quan-hanh-chinhs/`)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}

export const deleteTienTrinh = id => dispatch => {
  rest
    .delete(`quytrinhdonvi/api/co-quan-hanh-chinhs/`)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}

const getTienTrinhsRequest = createAction(TIEN_TRINH)
const getTienTrinhEditingRequest = createAction(TIEN_TRINH_EDITING)

// Initial State
const initialState = {
  tienTrinhList: [],
  TienTrinhEditing: {}
}

// reducer
export default handleActions(
  {
    [TIEN_TRINH]: (state, { payload }) => ({
      ...state,
      quyTrinhList: payload
    }),
    [TIEN_TRINH_EDITING]: (state, { payload }) => ({
      ...state,
      quyTrinhEditing: payload
    })
  },
  initialState
)
