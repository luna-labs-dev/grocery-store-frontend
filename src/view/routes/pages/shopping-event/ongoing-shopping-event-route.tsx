import { useBreadCrumbs } from '@/view/hooks';
import { OngoingShoppingEventPage } from '@/view/pages';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const OngoingShoppingEventRoute = () => {
  const { shoppingEventId } = useParams();

  const { addBreadcrumbs } = useBreadCrumbs();
  useEffect(() => {
    addBreadcrumbs(
      [
        {
          label: 'Evento de compras',
          to: '/shopping-event',
        },
        {
          label: 'Detalhes',
          to: `/shopping-event/ongoing/${shoppingEventId}`,
        },
      ],
      {
        title: 'Evento de compras',
        // subTitle: 'Supermercado da familia Brasileira',
      },
    );
  }, [addBreadcrumbs, shoppingEventId]);

  return <OngoingShoppingEventPage />;
};
