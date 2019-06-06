import { handleActions, createAction } from 'redux-actions'
import { rest } from '../utils/rest'

// Action
export const CO_QUAN_HANH_CHINH = 'CO_QUAN_HANH_CHINH'

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

const getCoQuanHanhChinhRequest = createAction(CO_QUAN_HANH_CHINH)

// Initial State
const initialState = {
  coQuanHanhChinh: []
}

// reducer
export default handleActions(
  {
    [CO_QUAN_HANH_CHINH]: (state, { payload }) => ({
      ...state,
      coQuanHanhChinh: payload
    })
  },
  initialState
)
