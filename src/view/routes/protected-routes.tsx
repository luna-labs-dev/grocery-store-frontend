import { RouteObject } from 'react-router-dom';
import { NotFound, ProtectedApp } from '@/view/pages';

import { AppRedirectionHandler } from '../components';
import {
  HomeRoute,
  MarketRoute,
  NewMarketRoute,
  UpdateMarketRoute,
  ShoppingEventListRoute,
  OngoingShoppingEventRoute,
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
        element: <OngoingShoppingEventRoute />,
      },
    ],
  },
  { path: '/login', element: <AppRedirectionHandler redirectTo="/" /> },
  { path: '', element: <AppRedirectionHandler redirectTo="/" /> },
  { path: '/*', element: <NotFound /> },
];
