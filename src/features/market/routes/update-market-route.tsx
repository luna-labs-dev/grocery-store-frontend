import { UpdateMarketPage } from '@/features/market/features';
import { useBreadCrumbs } from '@/hooks';
import { useEffect } from 'react';

export const UpdateMarketRoute = () => {
  const { addBreadcrumbs } = useBreadCrumbs();
  useEffect(() => {
    addBreadcrumbs(
      [
        {
          label: 'Mercados',
          to: '/market',
        },
        {
          label: 'Atualizar Mercado',
          to: '',
        },
      ],
      {
        title: 'Atualizar Mercado',
      },
    );
  }, [addBreadcrumbs]);

  return <UpdateMarketPage />;
};
