import { Outlet, createRootRoute } from '@tanstack/react-router';

import { MainLayout } from '../components/layout/main-layout/main-layout';

export const Route = createRootRoute({
  component: () => (
    <MainLayout>
      <Outlet />
    </MainLayout>
  ),
});
