import { NotFound, ProtectedApp } from '@/pages';
import { RouteObject } from 'react-router-dom';

import { familyRoutes } from '@/features/family';
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
      ...familyRoutes,

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
