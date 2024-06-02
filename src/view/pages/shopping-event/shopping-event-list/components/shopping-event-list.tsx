import { useState } from 'react';
import { Pagination } from '@/view/components';
import { FetchShoppingEventListParams } from '@/domain';
import { useGetShoppingEventListQuery } from '@/infrastructure';

import { ShoppingEventItem } from './shopping-event-item';

export const ShoppingEventList = () => {
  const [paginationParams, setPaginationParams] = useState<FetchShoppingEventListParams>({
    pageIndex: 0,
    pageSize: 4,
    orderBy: 'createdAt',
    orderDirection: 'asc',
  });

  const { data, status, isFetching } = useGetShoppingEventListQuery(paginationParams);

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
        {data?.items.map((se) => <ShoppingEventItem key={se.id} shoppingEvent={se} />)}
      </div>
    </div>
  );
};
