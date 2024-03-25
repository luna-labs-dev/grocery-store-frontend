import { protectedRoutes } from './protected-routes';

export const useRoutes = () => {
  const routes = protectedRoutes;

  return { routes };
};
