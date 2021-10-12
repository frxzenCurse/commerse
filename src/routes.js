import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Products from "./pages/Products";
import { CART, LOGIN, PRODUCT, PRODUCTS } from "./data/pages";


export const PUBLIC_ROUTES = [
  {
    path: PRODUCTS,
    component: Products,
  },
  {
    path: PRODUCT + '/:id',
    component: Product,
  },
  {
    path: LOGIN,
    component: Login,
  },
  {
    path: CART,
    component: Cart,
  },
]