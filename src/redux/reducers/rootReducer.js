import {combineReducers} from 'redux'
import cartReducer from './cart/cartReducer'
import loginReducer from './login/loginReducer'
import productsReducer from './products/productsReducer'


const rootReducers = combineReducers({
  login: loginReducer,
  products: productsReducer,
  cart: cartReducer,
})

export default rootReducers