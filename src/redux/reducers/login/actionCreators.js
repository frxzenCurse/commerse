import { SET_AUTH, SET_ERROR, SET_IS_LOADING, SET_USERNAME } from "./actions";
import axios from 'axios'

export const AuthActionCreators = {
  setUsername: (user) => ({ type: SET_USERNAME, payload: user }),
  setAuth: (auth) => ({ type: SET_AUTH, payload: auth }),
  setIsLoading: (payload) => ({ type: SET_IS_LOADING, payload: payload }),
  setError: (payload) => ({ type: SET_ERROR, payload: payload }),
  login: (username, password) => async (dispatch) => {
    dispatch(AuthActionCreators.setIsLoading(true))
    try {
      
      const response = await axios.post('https://api.d4u.dev.dterra.eu/oauth/token', {
        grant_type: "password",
        client_id: 2,
        client_secret: "64f2h5RwqflA5FKBCFwhuXlPhtHibpAyxgviS3WX",
        username: username,
        password: password,
      })

      localStorage.setItem('auth', response.data.access_token)
      dispatch(AuthActionCreators.setAuth(true))
      dispatch(AuthActionCreators.setUsername(username))
    } catch (e) {
      dispatch(AuthActionCreators.setError('Неверный логин или пароль!'))
    }
  },
  logout: () => (dispatch) => {
    localStorage.removeItem('auth')
    localStorage.removeItem('username')
    dispatch(AuthActionCreators.setAuth(false))
    dispatch(AuthActionCreators.setUsername(''))
  }
}