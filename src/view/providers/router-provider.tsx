import { RouterProvider as Router, createBrowserRouter } from 'react-router-dom';

import { useRoutes } from '../routes';

export const RouterProvider = () => {
  const { routes } = useRoutes();

  const router = createBrowserRouter(routes);

  return <Router router={router} />;
};
