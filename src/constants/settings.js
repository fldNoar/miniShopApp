import Store from "../react/pages/Store";
import ShoppingCart from "../react/pages/ShoppingCart";
import ErrorPage from "../react/pages/ErrorPage";

export const routes = [
    {path: '/', element: <Store />, exact: true},
    {path: '/shop-cart', element: <ShoppingCart />, exact: true},
    {path: '/store', element: <Store />, exact: true},
    {path: '*', element: <ErrorPage />, exact: true},
];