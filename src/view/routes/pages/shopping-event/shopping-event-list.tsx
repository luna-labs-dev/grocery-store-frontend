import { useEffect } from 'react';
import { useBreadCrumbs } from '@/view/hooks';
import { ShoppingEventListPage } from '@/view/pages';

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

  return <ShoppingEventListPage />;
};
