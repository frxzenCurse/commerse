import { SET_PRODUCTS, PRODUCTS_ERROR, PRODUCTS_LOADING } from "./actions";


const initialState = {
  loading: false,
  error: '',
  products: [], 
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {...state, products: action.payload, loading: false}
    case PRODUCTS_ERROR:
      return {...state, error: action.payload, loading: false}
    case PRODUCTS_LOADING:
      return {...state, loading: action.payload}
    default: 
      return state;
  }
}

export default productsReducer