import { Projects } from "../../../API/PostService";
import { SET_PRODUCTS, PRODUCTS_ERROR, PRODUCTS_LOADING, SET_TOTAL, LOAD_MORE } from "./actions";

export const productsActionCreators = {
  setLoading: (boolean) => ({ type: PRODUCTS_LOADING, payload: boolean }),
  setError: (payload) => ({ type: PRODUCTS_ERROR, payload: payload }),
  setTotal: (payload) => ({type: SET_TOTAL, payload: payload}),
  loadMore: (payload) => ({type: LOAD_MORE, payload: payload}),
  setProducts: (payload) => ({ type: SET_PRODUCTS, payload: payload }),
  fetchProducts: (params) => async (dispatch) => {
    dispatch(productsActionCreators.setLoading(true))
    try {
      const response = await Projects.getProjects(params)

      console.log(response);
      dispatch(productsActionCreators.setProducts(response.data.data.data))
      dispatch(productsActionCreators.setTotal(response.data.data.total))
    } catch (e) {
      dispatch(productsActionCreators.setError(`Произошла обшибка: ${e}`))
    }
  },
  loadMoreProducts: (params) => async (dispatch) => {
    // dispatch(productsActionCreators.setLoading(true))
    try {
      const response = await Projects.getProjects(params)

      console.log(response)
      dispatch(productsActionCreators.loadMore(response.data.data.data))
    } catch (e) {
      dispatch(productsActionCreators.setError(console.log(e)))
    }
  }
}

