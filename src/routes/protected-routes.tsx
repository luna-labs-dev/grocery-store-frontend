import { NotFound, ProtectedApp } from '@/pages';
import { RouteObject } from 'react-router-dom';

import { familyRoutes } from '@/features/family';
import { marketRoutes } from '@/features/market';
import { AppRedirectionHandler } from '../components';
import { HomeRoute, ShoppingEventDetailsRoute, ShoppingEventListRoute } from './pages';

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
      ...marketRoutes,
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
