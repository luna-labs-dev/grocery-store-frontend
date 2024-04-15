import { useEffect } from 'react';
import { useBreadCrumbs } from '@/view/hooks';
import { MarketPage } from '@/view/pages/market';

export const MarketRoute = () => {
  const { addBreadcrumbs } = useBreadCrumbs();
  useEffect(() => {
    addBreadcrumbs([
      {
        label: 'Mercados',
        to: '/market',
      },
    ]);
  }, [addBreadcrumbs]);

  return <MarketPage />;
};
