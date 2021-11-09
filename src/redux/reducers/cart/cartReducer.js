import {  ADD_CART_ITEM, REMOVE_CART_ITEM } from "./actions"

const initialState = {
  items: [],
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART_ITEM: {
      const arr = [...state.items, action.payload]
      localStorage.setItem('cartItems', JSON.stringify(arr))

      return {...state, items: arr}
    }
    case REMOVE_CART_ITEM: {
      const arr = [...state.items].filter(item => item.id !== action.payload)
      localStorage.setItem('cartItems', JSON.stringify(arr))

      return {...state,items: [...state.items].filter(item => item.id !== action.payload)}
    }
    default:
      return state
  }
}

export default cartReducer