import { handleActions, createAction } from 'redux-actions'
import { rest } from '../utils/rest'

// Action
export const QUY_TRINH = 'QUY_TRINH'
export const QUY_TRINH_EDITING = 'QUY_TRINH_EDITING'

// Action Creator
export const getQuyTrinhs = () => dispatch => {
  rest
    .get('quanlyquytrinh/api/quy-trinhs')
    .then(res => {
      dispatch(getQuyTrinhsRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

export const getQuyTrinhEditing = id => dispatch => {
  rest
    .get(`quytrinhdonvi/api/co-quan-hanh-chinhs/${id}`)
    .then(res => {
      dispatch(getQuyTrinhEditingRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

export const editQuyTrinh = form => dispatch => {
  rest
    .put(`quytrinhdonvi/api/co-quan-hanh-chinhs/`)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}

export const addQuyTrinh = form => dispatch => {
  rest
    .post(`quytrinhdonvi/api/co-quan-hanh-chinhs/`)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}

export const deleteQuyTrinh = id => dispatch => {
  rest
    .delete(`quytrinhdonvi/api/co-quan-hanh-chinhs/`)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}

const getQuyTrinhsRequest = createAction(QUY_TRINH)
const getQuyTrinhEditingRequest = createAction(QUY_TRINH_EDITING)

// Initial State
const initialState = {
  quyTrinhList: [],
  quyTrinhEditing: {}
}

// reducer
export default handleActions(
  {
    [QUY_TRINH]: (state, { payload }) => ({
      ...state,
      quyTrinhList: payload
    }),
    [QUY_TRINH_EDITING]: (state, { payload }) => ({
      ...state,
      quyTrinhEditing: payload
    })
  },
  initialState
)
