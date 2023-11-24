import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

const Home = lazy(() => import('@/pages/home'));
const Category = lazy(() => import('@/pages/category'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="home" />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/category',
    element: <Category />
  }
];

export default routes;
