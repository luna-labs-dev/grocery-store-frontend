import { publicRoutes } from './public-routes';
import { protectedRoutes } from './protected-routes';
import { useFirebase } from '../providers/firebase/firebase-context';

export const useRoutes = () => {
  const { context } = useFirebase();

  const routes = context.userLoggedIn ? protectedRoutes : publicRoutes;
  // const routes = publicRoutes;

  return { routes };
};
