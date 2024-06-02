import { useBreadCrumbs } from '@/view/hooks';
import { ShoppingEventPage } from '@/view/pages';
import { useEffect } from 'react';

export const ShoppingEventListRoute = () => {
  const { addBreadcrumbs } = useBreadCrumbs();
  useEffect(() => {
    addBreadcrumbs(
      [
        {
          label: 'Evento de compras',
          to: '/shopping-event',
        },
      ],
      {
        title: 'Evento de compras',
        // subTitle: 'Supermercado da familia Brasileira',
      },
    );
  }, [addBreadcrumbs]);

  return <ShoppingEventPage />;
};
