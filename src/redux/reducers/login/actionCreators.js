import { SET_AUTH, SET_ERROR, SET_IS_LOADING } from "./actions";

export const AuthActionCreators = {
  setAuth: (auth) => ({ type: SET_AUTH, payload: auth }),
  setIsLoading: (payload) => ({ type: SET_IS_LOADING, payload: payload }),
  setError: (payload) => ({ type: SET_ERROR, payload: payload }),
  logout: () => (dispatch) => {
    localStorage.removeItem('auth')
    dispatch(AuthActionCreators.setAuth(false))
  }
}