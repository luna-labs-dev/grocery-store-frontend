import { useEffect } from 'react';
import { useBreadCrumbs } from '@/view/hooks';
import { UpdateMarketPage } from '@/view/pages/market';

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
