import { RouteObject } from 'react-router-dom';
import { Login, PublicApp } from '@/view/pages';
import { AppRedirectionHandler } from '@/view/components';

export const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <PublicApp />,
    children: [
      {
        path: '/',
        element: <AppRedirectionHandler redirectTo="/login" />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },

  {
    path: '*',
    element: <AppRedirectionHandler redirectTo="/login" />,
  },
];
