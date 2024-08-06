import { useGetShoppingEventByIdQuery } from '@/infrastructure';
import { useParams } from 'react-router-dom';

import {
  ShoppingEventDetailsHeader,
  ShoppingEventDetailsProducts,
  ShoppingEventDetailsTotals,
} from './components';

export const ShoppingEventDetailsPage = () => {
  const { shoppingEventId } = useParams();

  const { data, refetch, isFetching } = useGetShoppingEventByIdQuery({ shoppingEventId });

  if (!data) {
    return <div>No data</div>;
  }

  return (
    <div className="flex flex-col gap-4 pt-2">
      <ShoppingEventDetailsHeader shoppingEvent={data} />
      <div className="flex flex-col gap-4 md:flex-row">
        <ShoppingEventDetailsTotals calculatedTotals={data.calculatedTotals} />
        <ShoppingEventDetailsProducts
          products={data.products}
          shoppingEventId={data.id}
          shoppingEventStatus={data.status}
          refetch={refetch}
          isFetching={isFetching}
        />
      </div>
    </div>
  );
};
