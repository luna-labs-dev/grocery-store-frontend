import { useBreadCrumbs } from '@/view/hooks';
import { HomePage } from '@/view/pages';
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
