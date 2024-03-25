import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { MainLayout } from '../components';

export const ProtectedApp = () => {
  return (
    <MainLayout>
      <Suspense fallback={<h1>Loading</h1>}>
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};

export const PublicApp = () => {
  return <Outlet />;
};
