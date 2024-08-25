import { Pagination } from '@/components';
import { useGetMarketListQuery } from '@/features/market/infrastructure';

import { useMarketListContext } from '../market-list-context';
import { MarketItem } from './market-item';

export const MarketList = () => {
  const { paginationParams, setPaginationParams } = useMarketListContext();
  const { data, status, isFetching } = useGetMarketListQuery(paginationParams);

  if (status === 'error') {
    return <div>Error</div>;
  }

  return (
    <div>
      <Pagination
        paginationProps={{
          paginationParams,
          setPaginationParams,
          listTotal: data?.total,
          isFetching,
        }}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data?.items.map((item) => (
          <MarketItem key={item.id} market={item} />
        ))}
      </div>
    </div>
  );
};
