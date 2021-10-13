import { ADD_CART_ITEM, GET_TOTAL_SUM, REMOVE_CART_ITEM } from "./actions";


const cartActionCreators = {
  addItem: (item) => ({type: ADD_CART_ITEM, payload: item}),
  removeItem: (id) => ({type: REMOVE_CART_ITEM, payload: id}),
  getSum: () => ({type: GET_TOTAL_SUM}),
  setCartItem: (item, items) => (dispatch) => {
    dispatch(cartActionCreators.addItem(item))
    dispatch(cartActionCreators.getSum())
    localStorage.setItem('cartItems', JSON.stringify(items))
  },
  removeCartItem: (item, items) => (dispatch) => {
    dispatch(cartActionCreators.removeItem(item))
    dispatch(cartActionCreators.getSum())
    localStorage.setItem('cartItems', JSON.stringify(items))
  }
}

export default cartActionCreators