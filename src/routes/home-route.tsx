import { useBreadCrumbs } from '@/hooks';
import { HomePage } from '@/pages';
import { useEffect } from 'react';

export const HomeRoute = () => {
  const { addBreadcrumbs } = useBreadCrumbs();
  useEffect(() => {
    addBreadcrumbs(
      [
        {
          label: 'Home page',
          to: '/',
        },
      ],

      {
        title: 'Home Page',
      },
    );
  }, [addBreadcrumbs]);
  return <HomePage />;
};
