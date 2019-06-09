import { handleActions, createAction } from 'redux-actions'
import { rest } from '../utils/rest'

// Action
export const MA_DINH_DANH = 'MA_DINH_DANH'
export const CHI_TIEU_EDITING = 'NHOM_CHI_TIEU_EDITING'

// Action Creator
export const getMaDinhDanhs = () => dispatch => {
  rest
    .get('common/api/ma-dinh-danh-don-vis')
    .then(res => {
      dispatch(getMaDinhDanhRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

export const getMaDinhDanhEditing = id => dispatch => {
  rest
    .get(`quytrinhdonvi/api/co-quan-hanh-chinhs/${id}`)
    .then(res => {
      dispatch(getChiTieuEditingRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

export const editMaDinhDanh = form => dispatch => {
  rest
    .put(`quytrinhdonvi/api/co-quan-hanh-chinhs/`)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}

export const addMaDinhDanh = form => dispatch => {
  rest
    .post('common/api/nhom-chi-tieus')
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}

export const deleteMaDinhDanh = id => dispatch => {
  rest
    .delete(`common/api/nhom-chi-tieus/${id}`)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}

const getMaDinhDanhRequest = createAction(MA_DINH_DANH)
const getChiTieuEditingRequest = createAction(CHI_TIEU_EDITING)

// Initial State
const initialState = {
  maDinhDanhList: [],
  maDinhDanhEditing: {}
}

// reducer
export default handleActions(
  {
    [MA_DINH_DANH]: (state, { payload }) => ({
      ...state,
      maDinhDanhList: payload
    }),
    [CHI_TIEU_EDITING]: (state, { payload }) => ({
      ...state,
      maDinhDanhEditing: payload
    })
  },
  initialState
)
