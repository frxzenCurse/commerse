import { Projects } from "../../../API/PostService";
import { SET_PRODUCTS, PRODUCTS_ERROR, PRODUCTS_LOADING } from "./actions";

export const productsActionCreators = {
  setLoading: (boolean) => ({ type: PRODUCTS_LOADING, payload: boolean }),
  setError: (payload) => ({ type: PRODUCTS_ERROR, payload: payload }),
  setProducts: (payload) => ({ type: SET_PRODUCTS, payload: payload }),
  fetchProducts: (params) => async (dispatch) => {
    dispatch(productsActionCreators.setLoading(true))
    try {

      const response = await Projects.getProjects(params)
      console.log(response);
      dispatch(productsActionCreators.setProducts(response.data.data.data))
    } catch (e) {
      dispatch(productsActionCreators.setError(`Произошла обшибка: ${e}`))
    }
  }
}

