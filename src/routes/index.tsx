import { useFirebase } from '@/providers';
import { protectedRoutes } from './protected-routes';
import { publicRoutes } from './public-routes';

export const useRoutes = () => {
  const { context } = useFirebase();

  const routes = context.userLoggedIn ? protectedRoutes : publicRoutes;
  // const routes = publicRoutes;

  return { routes };
};
