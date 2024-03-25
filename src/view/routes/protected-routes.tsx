import { RouteObject } from 'react-router-dom';
import { HomePage, NotFound, ProtectedApp } from '@/view/pages';

import { AppRedirectionHandler } from '../components';

export const protectedRoutes: RouteObject[] = [
  {
    path: '/',
    element: <ProtectedApp />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
  { path: '', element: <AppRedirectionHandler redirectTo="/" /> },
  { path: '/*', element: <NotFound /> },
];
