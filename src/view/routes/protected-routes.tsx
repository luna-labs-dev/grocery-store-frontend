import { RouteObject } from 'react-router-dom';
import { NotFound, ProtectedApp } from '@/view/pages';

import { HomeRoute, MarketRoute } from './pages';
import { AppRedirectionHandler } from '../components';

export const protectedRoutes: RouteObject[] = [
  {
    path: '/',
    element: <ProtectedApp />,
    children: [
      {
        path: '/',
        element: <HomeRoute />,
      },
      {
        path: '/market',
        element: <MarketRoute />,
      },
    ],
  },
  { path: '/login', element: <AppRedirectionHandler redirectTo="/" /> },
  { path: '', element: <AppRedirectionHandler redirectTo="/" /> },
  { path: '/*', element: <NotFound /> },
];
