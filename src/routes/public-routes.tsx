import { AppRedirectionHandler } from '@/components';
import { LoginRoutes } from '@/features/authentication';
import { PublicApp } from '@/pages';
import { RouteObject } from 'react-router-dom';

export const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <PublicApp />,
    children: [
      {
        path: '/',
        element: <AppRedirectionHandler redirectTo="/login" />,
      },
      ...LoginRoutes,
    ],
  },

  {
    path: '*',
    element: <AppRedirectionHandler redirectTo="/login" />,
  },
];
