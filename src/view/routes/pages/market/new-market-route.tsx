import { useBreadCrumbs } from '@/view/hooks';
import { NewMarketPage } from '@/view/pages/market';
import { useEffect } from 'react';

export const NewMarketRoute = () => {
  const { addBreadcrumbs } = useBreadCrumbs();
  useEffect(() => {
    addBreadcrumbs(
      [
        {
          label: 'Mercados',
          to: '/market',
        },
        {
          label: 'Novo Mercado',
          to: '/market/new',
        },
      ],
      {
        title: 'Novo Mercado',
        // subTitle: 'Supermercado da familia Brasileira',
      },
    );
  }, [addBreadcrumbs]);

  return <NewMarketPage />;
};
