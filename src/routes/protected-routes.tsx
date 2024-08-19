import { NotFound, ProtectedApp } from '@/pages';
import { RouteObject } from 'react-router-dom';

import { familyRoutes } from '@/features/family';
import { marketRoutes } from '@/features/market';
import { shoppingEventRoutes } from '@/features/shopping-event';
import { AppRedirectionHandler } from '../components';
import { HomeRoute } from './home-route';

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
      ...shoppingEventRoutes,
    ],
  },
  { path: '/login', element: <AppRedirectionHandler redirectTo="/" /> },
  { path: '', element: <AppRedirectionHandler redirectTo="/" /> },
  { path: '/*', element: <NotFound /> },
];
