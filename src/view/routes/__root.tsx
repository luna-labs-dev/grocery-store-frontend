import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';

import { FirebaseContextState } from '../providers/firebase';
import { MainLayout } from '../components/layout/main-layout/main-layout';

type RouterContext = {
  firebaseContext: FirebaseContextState;
};

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <MainLayout>
      <Outlet />
    </MainLayout>
  ),
});
