import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';

import { useFirebase, FirebaseContextState } from '../providers/firebase';
import { MainLayout } from '../components/layout/main-layout/main-layout';

type RouterContext = {
  firebaseContext: FirebaseContextState;
};

const Wrapper = () => {
  const { context } = useFirebase();

  if (context.userLoggedIn) {
    return (
      <MainLayout>
        <Outlet />
      </MainLayout>
    );
  }
  return <Outlet />;
};

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => <Wrapper />,
});
