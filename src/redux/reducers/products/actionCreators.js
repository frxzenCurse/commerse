import axios from "axios";
import { SET_PRODUCTS, PRODUCTS_ERROR, PRODUCTS_LOADING } from "./actions";

export const productsActionCreators = {
  setLoading: (boolean) => ({ type: PRODUCTS_LOADING, payload: boolean }),
  setError: (payload) => ({ type: PRODUCTS_ERROR, payload: payload }),
  setProducts: (payload) => ({ type: SET_PRODUCTS, payload: payload }),
  fetchProducts: () => async (dispatch) => {
    try {
      dispatch(productsActionCreators.setLoading(true))

      setTimeout(async () => {
        const response = await axios.get('./products.json')
        dispatch(productsActionCreators.setProducts(response.data))
      }, 400);
    } catch (e) {
      dispatch(productsActionCreators.setError(`Произошла обшибка: ${e}`))
    }
  }
}

