import { handleActions, createAction } from 'redux-actions'
import { rest } from '../utils/rest'

// Action
export const USERS = 'USERS'
export const USERS_EDITING = 'USERS_EDITING'

// Action Creator
export const getUsers = () => dispatch => {
  rest
    .get('phanquyenchucnang/api/nguoiDungs')
    .then(res => {
      dispatch(getUserRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

export const getUserEditing = id => dispatch => {
  rest
    .get(`quytrinhdonvi/api/co-quan-hanh-chinhs/${id}`)
    .then(res => {
      dispatch(getUserEditingRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

export const editUser = form => dispatch => {
  rest
    .put(`quytrinhdonvi/api/co-quan-hanh-chinhs/`)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}

export const addUser = form => dispatch => {
  console.log(form)
  rest
    .post('phanquyenchucnang/api/nguoiDungs', form)
    .then(res => {
      dispatch(getUsers())
    })
    .catch(err => {
      console.log(err)
    })
}

export const deleteUser = id => dispatch => {
  rest
    .delete(`phanquyenchucnang/api/nguoiDungs/${id}`)
    .then(() => {
      dispatch(getUsers())
    })
    .catch(err => {
      console.log(err)
    })
}

const getUserRequest = createAction(USERS)
const getUserEditingRequest = createAction(USERS_EDITING)

// Initial State
const initialState = {
  usersList: [],
  userEditing: {}
}

// reducer
export default handleActions(
  {
    [USERS]: (state, { payload }) => ({
      ...state,
      usersList: payload
    }),
    [USERS_EDITING]: (state, { payload }) => ({
      ...state,
      userEditing: payload
    })
  },
  initialState
)
