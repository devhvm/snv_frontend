import { handleActions, createAction } from 'redux-actions'
import { rest } from '../utils/rest'

// Action
export const USERS = 'USERS'
export const USERS_EDITING = 'USERS_EDITING'

// Action Creator
export const getUser = () => dispatch => {
  rest
    .get('common/api/co-quan-chu-tris')
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
  rest
    .post(`quytrinhdonvi/api/co-quan-hanh-chinhs/`)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}

const getUserRequest = createAction(USERS)
const getUserEditingRequest = createAction(USERS_EDITING)

// Initial State
const initialState = {
  user: [],
  userEditing: {}
}

// reducer
export default handleActions(
  {
    [USERS]: (state, { payload }) => ({
      ...state,
      user: payload
    }),
    [USERS_EDITING]: (state, { payload }) => ({
      ...state,
      userEditing: payload
    })
  },
  initialState
)
