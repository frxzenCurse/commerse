import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Products from "./pages/Products";
import { CART, LOGIN, PRODUCTS, POSTS, POST } from "./data/pages";
import Posts from "./pages/Posts";
import Post from "./pages/Post";


export const PUBLIC_ROUTES = [
  {
    path: PRODUCTS,
    component: Products,
  },
  {
    path: LOGIN,
    component: Login,
  },
  {
    path: CART,
    component: Cart,
  },
  {
    path: POSTS,
    component: Posts,
  },
  {
    path: POST,
    component: Post,
  },
]