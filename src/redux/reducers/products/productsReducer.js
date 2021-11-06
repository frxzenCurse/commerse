import { SET_PRODUCTS, PRODUCTS_ERROR, PRODUCTS_LOADING } from "./actions";


const initialState = {
  isLoading: false,
  error: '',
  products: [], 
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {...state, products: action.payload, isLoading: false}
    case PRODUCTS_ERROR:
      return {...state, error: action.payload, isLoading: false}
    case PRODUCTS_LOADING:
      return {...state, isLoading: action.payload}
    default: 
      return state;
  }
}

export default productsReducer