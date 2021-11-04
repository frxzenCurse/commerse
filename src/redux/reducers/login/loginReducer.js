import { SET_AUTH, SET_ERROR, SET_IS_LOADING, SET_USERNAME } from "./actions"

const initialState = {
  isAuth: false,
  isLoading: false,
  error: '',
  username: '',
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return {...state, isAuth: action.payload, isLoading: false}
    case SET_USERNAME:
      return {...state, username: action.payload}
    case SET_ERROR:
      return {...state, error: action.payload, isLoading: false}
    case SET_IS_LOADING:
      return {...state, isLoading: action.payload}
    default: 
      return state
  }
}

export default loginReducer