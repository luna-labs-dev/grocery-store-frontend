import { RouteObject } from 'react-router-dom';
import { NotFound, ProtectedApp } from '@/view/pages';

import { HomeRoute } from './pages';
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
    ],
  },
  { path: '/login', element: <AppRedirectionHandler redirectTo="/" /> },
  { path: '', element: <AppRedirectionHandler redirectTo="/" /> },
  { path: '/*', element: <NotFound /> },
];
