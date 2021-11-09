import { ADD_CART_ITEM, GET_TOTAL_SUM, REMOVE_CART_ITEM } from "./actions";


const cartActionCreators = {
  addItem: (item) => ({type: ADD_CART_ITEM, payload: item}),
  removeItem: (id) => ({type: REMOVE_CART_ITEM, payload: id}),
}

export default cartActionCreators