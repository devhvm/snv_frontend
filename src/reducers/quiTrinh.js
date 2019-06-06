import { handleActions, createAction } from 'redux-actions'
import { rest } from '../utils/rest'

// Action
export const QUI_TRINH = 'QUI_TRINH'
export const QUI_TRINH_EDITING = 'QUI_TRINH_EDITING'

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

export const editCoQuanHanhChinh = form => dispatch => {
  rest
    .put(`quytrinhdonvi/api/co-quan-hanh-chinhs/`)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}

export const addCoQuanHanhChinh = form => dispatch => {
  rest
    .post(`quytrinhdonvi/api/co-quan-hanh-chinhs/`)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}

const getQuyTrinhsRequest = createAction(QUI_TRINH)
const getQuyTrinhEditingRequest = createAction(QUI_TRINH_EDITING)

// Initial State
const initialState = {
  quyTrinhList: [],
  quyTrinhEditing: {}
}

// reducer
export default handleActions(
  {
    [QUI_TRINH]: (state, { payload }) => ({
      ...state,
      quyTrinhList: payload
    }),
    [QUI_TRINH_EDITING]: (state, { payload }) => ({
      ...state,
      quyTrinhEditing: payload
    })
  },
  initialState
)
