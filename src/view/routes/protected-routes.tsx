import { RouteObject } from 'react-router-dom';
import { NotFound, ProtectedApp } from '@/view/pages';

import { AppRedirectionHandler } from '../components';
import { HomeRoute, MarketRoute, NewMarketRoute } from './pages';

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
      {
        path: '/market/new',
        element: <NewMarketRoute />,
      },
    ],
  },
  { path: '/login', element: <AppRedirectionHandler redirectTo="/" /> },
  { path: '', element: <AppRedirectionHandler redirectTo="/" /> },
  { path: '/*', element: <NotFound /> },
];
