import { NotFound, ProtectedApp } from '@/view/pages';
import { RouteObject } from 'react-router-dom';

import { AppRedirectionHandler } from '../components';
import {
  FamilyRoute,
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
        path: '/family/',
        element: <FamilyRoute />,
      },
      {
        path: '/family/:familyAction',
        element: <FamilyRoute />,
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
