import { SET_AUTH, SET_ERROR, SET_IS_LOADING, SET_USER } from "./actions";
import axios from 'axios'

export const AuthActionCreators = {
  setUser: (user) => ({ type: SET_USER, payload: user }),
  setAuth: (auth) => ({ type: SET_AUTH, payload: auth }),
  setIsLoading: (payload) => ({ type: SET_IS_LOADING, payload: payload }),
  setError: (payload) => ({ type: SET_ERROR, payload: payload }),
  login: (username, password) => async (dispatch) => {
    try {
      dispatch(AuthActionCreators.setIsLoading(true))
      setTimeout(async () => {
        const response = await axios.get('./users.json')
        const mockUser = response.data.find(user => user.username === username && user.password === password)
        if (mockUser) {
          localStorage.setItem('auth', 'true')
          localStorage.setItem('username', mockUser.username)
          dispatch(AuthActionCreators.setAuth(true))
          dispatch(AuthActionCreators.setUser(mockUser))
        } else {
          dispatch(AuthActionCreators.setError('Неверный логин или пароль!'))
        }
      }, 1000);
    } catch (e) {
      dispatch(AuthActionCreators.setError('Произошла ошибка'))
    }
  },
  logout: () => (dispatch) => {
    localStorage.removeItem('auth')
    localStorage.removeItem('username')
    dispatch(AuthActionCreators.setAuth(false))
    dispatch(AuthActionCreators.setUser({}))
  }
}