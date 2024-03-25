import { RouteObject } from 'react-router-dom';
import { App, HomePage, NotFound } from '@/view/pages';

import { AppRedirectionHandler } from '../components';

export const protectedRoutes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
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
