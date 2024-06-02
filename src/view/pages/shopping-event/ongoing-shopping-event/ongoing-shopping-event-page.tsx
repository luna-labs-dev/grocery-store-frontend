import { useGetShoppingEventByIdQuery } from '@/infrastructure';
import { useParams } from 'react-router-dom';

import {
  OngoingShoppingEventHeaderDetails,
  OngoingShoppingEventProducts,
  OngoingShoppingEventTotals,
} from './components';

export const OngoingShoppingEventPage = () => {
  const { shoppingEventId } = useParams();

  const { data } = useGetShoppingEventByIdQuery({ shoppingEventId });

  if (!data) {
    return <div>No data</div>;
  }

  return (
    <div className="flex flex-col gap-4 pt-2">
      <OngoingShoppingEventHeaderDetails shoppingEvent={data} />
      <div className="flex flex-col gap-4 md:flex-row">
        <OngoingShoppingEventTotals calculatedTotals={data.calculatedTotals} />
        <OngoingShoppingEventProducts
          products={data.products}
          shoppingEventId={data.id}
          shoppingEventStatus={data.status}
        />
      </div>
    </div>
  );
};
