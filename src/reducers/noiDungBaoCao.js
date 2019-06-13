import { handleActions, createAction } from 'redux-actions'
import { rest } from '../utils/rest'

// Action
export const NOI_DUNG_BAO_CAO = 'NOI_DUNG_BAO_CAO'
export const NOI_DUNG_BAO_CAO_EDITING = 'NOI_DUNG_BAO_CAO_EDITING'

// Action Creator
export const getNoiDungBaoCaos = () => dispatch => {
  rest
    .get('common/api/noi-dungs?size=100')
    .then(res => {
      dispatch(getNoiDungBaoCaoRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

export const getNoiDungBaoCaoEditing = id => dispatch => {
  rest
    .get(`common/api/noi-dungs/${id}`)
    .then(res => {
      dispatch(getNoiDungBaoCaoEditingRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

export const editNoiDungBaoCao = form => dispatch => {
  rest
    .put(`common/api/noi-dungs/`)
    .then(res => {
      dispatch(getNoiDungBaoCaos())
    })
    .catch(err => {
      console.log(err)
    })
}

export const addNoiDungBaoCao = form => dispatch => {
  rest
    .post('common/api/noi-dungs')
    .then(res => {
      dispatch(getNoiDungBaoCaos())
    })
    .catch(err => {
      console.log(err)
    })
}

export const deleteNoiDungBaoCao = id => dispatch => {
  rest
    .delete(`common/api/noi-dungs/${id}`)
    .then(res => {
      dispatch(getNoiDungBaoCaos())
    })
    .catch(err => {
      console.log(err)
    })
}

const getNoiDungBaoCaoRequest = createAction(NOI_DUNG_BAO_CAO)
const getNoiDungBaoCaoEditingRequest = createAction(NOI_DUNG_BAO_CAO_EDITING)

// Initial State
const initialState = {
  noiDungBaoCaoList: [],
  noiDungBaoCaoEditing: {}
}

// reducer
export default handleActions(
  {
    [NOI_DUNG_BAO_CAO]: (state, { payload }) => ({
      ...state,
      noiDungBaoCaoList: payload
    }),
    [NOI_DUNG_BAO_CAO_EDITING]: (state, { payload }) => ({
      ...state,
      noiDungBaoCaoEditing: payload
    })
  },
  initialState
)
