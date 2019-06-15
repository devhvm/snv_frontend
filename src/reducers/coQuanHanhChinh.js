import { handleActions, createAction } from 'redux-actions'
import { rest } from '../utils/rest'

// Action
export const CO_QUAN_HANH_CHINH = 'CO_QUAN_HANH_CHINH'
export const CO_QUAN_HANH_CHINH_EDITING = 'CO_QUAN_HANH_CHINH_EDITING'

// Action Creator
export const getCoQuanHanhChinh = () => dispatch => {
  rest
    .get('quytrinhdonvi/api/co-quan-hanh-chinhs')
    .then(res => {
      dispatch(getCoQuanHanhChinhRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

export const getCoQuanHanhChinhEditing = id => dispatch => {
  rest
    .get(`quytrinhdonvi/api/co-quan-hanh-chinhs/${id}`)
    .then(res => {
      dispatch(getCoQuanHanhChinhEditingRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

export const editCoQuanHanhChinh = form => dispatch => {
  rest
    .put(`quytrinhdonvi/api/co-quan-hanh-chinhs/`, form)
    .then(res => {
      dispatch(getCoQuanHanhChinh())
    })
    .catch(err => {
      console.log(err)
    })
}

export const addCoQuanHanhChinh = form => dispatch => {
  rest
    .post('quytrinhdonvi/api/co-quan-hanh-chinhs/', form)
    .then(() => {
      dispatch(getCoQuanHanhChinh())
    })
    .catch(err => {
      console.log(err)
    })
}

export const deleteCoQuanHanhChinh = id => dispatch => {
  rest
    .delete(`quytrinhdonvi/api/co-quan-hanh-chinhs/${id}`)
    .then(() => {
      dispatch(getCoQuanHanhChinh())
    })
    .catch(err => {
      console.log(err)
    })
}

const getCoQuanHanhChinhRequest = createAction(CO_QUAN_HANH_CHINH)
const getCoQuanHanhChinhEditingRequest = createAction(
  CO_QUAN_HANH_CHINH_EDITING
)

// Initial State
const initialState = {
  coQuanHanhChinhList: [],
  coQuanHanhChinhEditing: {}
}

// reducer
export default handleActions(
  {
    [CO_QUAN_HANH_CHINH]: (state, { payload }) => ({
      ...state,
      coQuanHanhChinhList: payload
    }),
    [CO_QUAN_HANH_CHINH_EDITING]: (state, { payload }) => ({
      ...state,
      coQuanHanhChinhEditing: payload
    })
  },
  initialState
)
