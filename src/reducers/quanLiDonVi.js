import { handleActions, createAction } from 'redux-actions'
import { rest } from '../utils/rest'

// Action
export const CO_QUAN_HANH_CHINH = 'CO_QUAN_HANH_CHINH'
export const CO_QUAN_HANH_CHINH_EDITING = 'CO_QUAN_HANH_CHINH_EDITING'

// Action Creator
export const getCoQuanHanhChinh = () => dispatch => {
  rest
    .get('common/api/co-quan-chu-tris')
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
  console.log(id)
}

const getCoQuanHanhChinhRequest = createAction(CO_QUAN_HANH_CHINH)
const getCoQuanHanhChinhEditingRequest = createAction(
  CO_QUAN_HANH_CHINH_EDITING
)

// Initial State
const initialState = {
  coQuanHanhChinh: [],
  coQuanHanhChinhEditing: {}
}

// reducer
export default handleActions(
  {
    [CO_QUAN_HANH_CHINH]: (state, { payload }) => ({
      ...state,
      coQuanHanhChinh: payload
    }),
    [CO_QUAN_HANH_CHINH_EDITING]: (state, { payload }) => ({
      ...state,
      coQuanHanhChinhEditing: payload
    })
  },
  initialState
)
