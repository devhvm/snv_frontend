import { handleActions, createAction } from 'redux-actions'
import { rest } from '../utils/rest'

// Action
export const KI_CONG_BO = 'KI_CONG_BO'
export const KI_CONG_BO_EDITING = 'KI_CONG_BO_EDITING'

// Action Creator
export const getKyCongBos = () => dispatch => {
  rest
    .get('common/api/ky-cong-bos')
    .then(res => {
      dispatch(getKyCongBoRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

export const getKyCongBoEditing = id => dispatch => {
  rest
    .get(`common/api/ky-cong-bos/${id}`)
    .then(res => {
      dispatch(getKyCongBoEditingRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

export const editKyCongBo = form => dispatch => {
  rest
    .put(`common/api/ky-cong-bos/`, form)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}

export const addKyCongBo = form => dispatch => {
  rest
    .post('common/api/ky-cong-bos', form)
    .then(res => {
      console.log(res)
      dispatch(getKyCongBos())
    })
    .catch(err => {
      console.log(err)
    })
}

export const deleteChiTieu = id => dispatch => {
  rest
    .delete(`common/api/ky-cong-bos/${id}`)
    .then(res => {
      console.log(res)
      dispatch(getKyCongBos())
    })
    .catch(err => {
      console.log(err)
    })
}

const getKyCongBoRequest = createAction(KI_CONG_BO)
const getKyCongBoEditingRequest = createAction(KI_CONG_BO_EDITING)

// Initial State
const initialState = {
  kyCongBoList: [],
  kyCongBoEditing: {}
}

// reducer
export default handleActions(
  {
    [KI_CONG_BO]: (state, { payload }) => ({
      ...state,
      kyCongBoList: payload
    }),
    [KI_CONG_BO_EDITING]: (state, { payload }) => ({
      ...state,
      kyCongBoEditing: payload
    })
  },
  initialState
)
