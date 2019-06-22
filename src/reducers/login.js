import { handleActions, createAction } from 'redux-actions'
import { rest } from '../utils/rest'

// Action
export const LOGIN = 'LOGIN'
export const COLLAPSED = 'COLLAPSED'

// Action Creator
export const login = form => {
  rest
    .post('http://vtools.xyz:9999/api/authenticate', form)
    .then(res => {
      localStorage.setItem('id_token', res.data.id_token)
      localStorage.setItem('loginStatus', true)
    })
    .then(() => {
      window.location.reload()
    })
    .catch(err => {
      alert('Sai username hay password, mời thử lại')
      console.log(err)
    })
}

export const logOut = () => {
  localStorage.removeItem('jwt_token')
  localStorage.removeItem('loginStatus')
  window.location.reload()
}

export const toggleSideBar = collapsed => dispatch => {
  dispatch(setToggleSideBar(collapsed))
}

const setToggleSideBar = createAction(COLLAPSED)

// Initial State
const initialState = {
  collapsed: false
}

// reducer
export default handleActions(
  {
    [LOGIN]: (state, { payload }) => ({
      ...state,
      login: payload
    }),
    [COLLAPSED]: (state, { payload }) => ({
      ...state,
      collapsed: payload
    })
  },
  initialState
)
