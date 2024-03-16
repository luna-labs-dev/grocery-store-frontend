import { routeTree } from '@/view/config/routes/routeTree.gen';
import { createRouter, RouterProvider } from '@tanstack/react-router';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
export const ConfiguredRouterProvider = () => {
  return <RouterProvider router={router} />;
};
