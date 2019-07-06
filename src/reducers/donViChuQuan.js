import { handleActions, createAction } from 'redux-actions'
import { rest } from '../utils/rest'

// Action
export const DON_VI_CHU_QUAN = 'DON_VI_CHU_QUAN'
export const DON_VI_CHU_QUAN_EDITING = 'DON_VI_CHU_QUAN_EDITING'

// Action Creator
export const getCoQuanChuTris = () => dispatch => {
  rest
    .get('common/api/co-quan-chu-tris')
    .then(res => {
      dispatch(getCoQuanChuTriRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

export const getCoQuanChuTriEditing = id => dispatch => {
  rest
    .get(`common/api/co-quan-chu-tris/${id}`)
    .then(res => {
      dispatch(getCoQuanChuTriEditingRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

export const editCoQuanChuTri = form => dispatch => {
  rest
    .put('common/api/co-quan-chu-tris', form)
    .then(() => {
      dispatch(getCoQuanChuTris())
    })
    .catch(err => {
      console.log(err)
    })
}

export const addCoQuanChuTri = form => dispatch => {
  rest
    .post('common/api/co-quan-chu-tris')
    .then(() => {
      dispatch(getCoQuanChuTris())
    })
    .catch(err => {
      console.log(err)
    })
}

export const deleteCoQuanChuTri = id => dispatch => {
  rest
    .delete(`common/api/co-quan-chu-tris/${id}`)
    .then(() => {
      dispatch(getCoQuanChuTris())
    })
    .catch(err => {
      console.log(err)
    })
}

const getCoQuanChuTriRequest = createAction(DON_VI_CHU_QUAN)
const getCoQuanChuTriEditingRequest = createAction(DON_VI_CHU_QUAN_EDITING)

// Initial State
const initialState = {
  coQuanChuTriList: [],
  coQuanChuTriEditing: {}
}

// reducer
export default handleActions(
  {
    [DON_VI_CHU_QUAN]: (state, { payload }) => ({
      ...state,
      coQuanChuTriList: payload
    }),
    [DON_VI_CHU_QUAN_EDITING]: (state, { payload }) => ({
      ...state,
      coQuanChuTriEditing: payload
    })
  },
  initialState
)
