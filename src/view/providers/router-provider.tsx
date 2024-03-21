import { routeTree } from '@/view/config/routes/routeTree.gen';
import { createRouter, RouterProvider } from '@tanstack/react-router';

import { useFirebase } from './firebase';

const router = createRouter({ routeTree, context: { firebaseContext: undefined! } });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export const ConfiguredRouterProvider = () => {
  const { context } = useFirebase();
  return (
    <RouterProvider
      router={router}
      context={{
        firebaseContext: context,
      }}
    />
  );
};
