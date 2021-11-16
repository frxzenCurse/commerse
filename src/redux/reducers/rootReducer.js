import {combineReducers} from 'redux'
import cartReducer from './cart/cartReducer'
import loginReducer from './login/loginReducer'
import productsReducer from './products/productsReducer'
import { userReducer } from './user/reducer'


const rootReducers = combineReducers({
  login: loginReducer,
  products: productsReducer,
  cart: cartReducer,
  user: userReducer,
})

export default rootReducers