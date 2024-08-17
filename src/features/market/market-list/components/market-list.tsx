import { Pagination } from '@/components';
import { FetchListParams } from '@/domain';
import { useGetMarketListQuery } from '@/infrastructure';
import { useState } from 'react';

import { MarketItem } from './market-item';

export const MarketList = () => {
  const [paginationParams, setPaginationParams] = useState<FetchListParams>({
    pageIndex: 0,
    pageSize: 4,
    orderBy: 'createdAt',
    orderDirection: 'asc',
  });

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
