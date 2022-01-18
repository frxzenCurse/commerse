import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Products from "./pages/Products";
import { CART, LOGIN, PRODUCTS, POSTS, POST, PAGE404, PROFILE } from "./data/pages";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import Page404 from "./pages/Page404";
import { Redirect } from "react-router";
import ProjectDetail from "./pages/ProjectDetail";
import Profile from "./pages/Profile";

export const publicRoutes = [
  {
    path: '/',
    render: () => <Redirect to={PRODUCTS} />
  },
  {
    path: PRODUCTS,
    component: Products,
  },
  {
    path: PRODUCTS + '/:id',
    component: ProjectDetail,
  },
  {
    path: LOGIN,
    component: Login,
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
    render: () => <Redirect to={PRODUCTS} />
  },
]

export const privateRoutes = [
  {
    path: '/',
    render: () => <Redirect to={PRODUCTS} />
  },
  {
    path: PRODUCTS,
    component: Products,
  },
  {
    path: PRODUCTS + '/:id',
    component: ProjectDetail,
  },
  {
    path: CART,
    component: Cart,
  },
  {
    path: PROFILE,
    component: Profile,
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
    render: () => <Redirect to={PRODUCTS} />
  },
]