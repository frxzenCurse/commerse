import { ADD_CART_ITEM, REMOVE_CART_ITEM } from "./actions";


const cartActionCreators = {
  addItem: (item) => ({type: ADD_CART_ITEM, payload: item}),
  removeItem: (id) => ({type: REMOVE_CART_ITEM, payload: id}),
}

export default cartActionCreators