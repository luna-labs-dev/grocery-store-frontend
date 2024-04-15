import { useEffect } from 'react';
import { HomePage } from '@/view/pages';
import { useBreadCrumbs } from '@/view/hooks';

export const HomeRoute = () => {
  const { addBreadcrumbs } = useBreadCrumbs();
  useEffect(() => {
    addBreadcrumbs([
      {
        label: 'Home page',
        to: '/',
      },
    ]);
  }, [addBreadcrumbs]);
  return <HomePage />;
};
