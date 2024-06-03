import { NotFound, ProtectedApp } from '@/view/pages';
import type { RouteObject } from 'react-router-dom';

import { AppRedirectionHandler } from '../components';
import {
  HomeRoute,
  MarketRoute,
  NewMarketRoute,
  ShoppingEventDetailsRoute,
  ShoppingEventListRoute,
  UpdateMarketRoute,
} from './pages';

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
      {
        path: '/market/update/:marketId',
        element: <UpdateMarketRoute />,
      },
      {
        path: '/shopping-event',
        element: <ShoppingEventListRoute />,
      },
      {
        path: '/shopping-event/ongoing/:shoppingEventId',
        element: <ShoppingEventDetailsRoute />,
      },
    ],
  },
  { path: '/login', element: <AppRedirectionHandler redirectTo="/" /> },
  { path: '', element: <AppRedirectionHandler redirectTo="/" /> },
  { path: '/*', element: <NotFound /> },
];
