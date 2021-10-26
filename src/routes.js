import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Products from "./pages/Products";
import { CART, LOGIN, PRODUCTS, POSTS, POST, PAGE404 } from "./data/pages";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import Page404 from "./pages/Page404";
import { Redirect } from "react-router";


export const ROUTES = [
  {
    path: '/',
    render: () => <Redirect to={PRODUCTS} />
  },
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
    path: POST + '/:id',
    component: Post,
  },
  {
    path: PAGE404,
    component: Page404,
  },
]