import { MarketPage } from '@/features/market';
import { useBreadCrumbs } from '@/hooks';
import { useEffect } from 'react';

export const MarketRoute = () => {
  const { addBreadcrumbs } = useBreadCrumbs();
  useEffect(() => {
    addBreadcrumbs(
      [
        {
          label: 'Mercados',
          to: '/market',
        },
      ],
      {
        title: 'Mercados',
        // subTitle: 'Supermercado da familia Brasileira',
      },
    );
  }, [addBreadcrumbs]);

  return <MarketPage />;
};
