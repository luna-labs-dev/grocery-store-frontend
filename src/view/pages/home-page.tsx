import { useEffect } from 'react';
import { useBreadCrumbs } from '@/view/hooks';

export const HomePage = () => {
  const { addBreadcrumbs } = useBreadCrumbs();
  useEffect(() => {
    addBreadcrumbs([
      {
        label: 'Home page',
        to: '/',
      },
    ]);
  }, [addBreadcrumbs]);
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};
