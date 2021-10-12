import {  ADD_CART_ITEM, GET_TOTAL_SUM, REMOVE_CART_ITEM } from "./actions"

const initialState = {
  items: [],
  totalPrice: 0,
}

const getTotalSum = (arr) => {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].price
  }
  return sum
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART_ITEM: {
      return {...state, items: [...state.items, action.payload]}
    }
    case GET_TOTAL_SUM:
      return {...state, totalPrice: getTotalSum(state.items)}
    case REMOVE_CART_ITEM:
      return {...state,items: [...state.items].filter(item => item.id !== action.payload)}
    default:
      return state
  }
}

export default cartReducer