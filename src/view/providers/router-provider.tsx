import { RouterProvider as Router, createBrowserRouter } from 'react-router-dom';

import { history } from '@/domain/utils/history';
import { useRoutes } from '../routes';

export const RouterProvider = () => {
  const { routes } = useRoutes();

  const router = createBrowserRouter(routes);
  history.navigate = router.navigate;

  return <Router router={router} />;
};
