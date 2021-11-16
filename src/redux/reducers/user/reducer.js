import { SET_ERROR, SET_USER, SET_IS_LOADING } from "./actions"


const initialState = {
  user: {},
  isLoading: false,
  error: '',
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {...state, user: action.payload, isLoading: false}
    case SET_IS_LOADING: 
      return {...state, isLoading: action.payload}
    case SET_ERROR:
      return {...state, error: action.payload}
    default:
      return state
  }
}