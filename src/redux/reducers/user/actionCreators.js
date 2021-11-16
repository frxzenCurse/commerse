import { User } from "../../../API/PostService";
import { SET_ERROR, SET_IS_LOADING } from "../login/actions";
import { SET_USER } from "./actions";


export const userActionCreators = {
  setUser: (payload) => ({type: SET_USER, payload: payload}),
  setLoading: (boolean) => ({type: SET_IS_LOADING, payload: boolean}),
  setError: (payload) => ({type: SET_ERROR, payload: payload}),
  fetchUser: (token) => async (dispatch) => {
    try {
      dispatch(userActionCreators.setLoading(true))
      const response = await User.getUser(token)

      console.log(response);
      dispatch(userActionCreators.setUser(response.data.data.user))
    } catch(e) {
      dispatch(userActionCreators.setError(e))
      console.log(e);
    }
  }
}