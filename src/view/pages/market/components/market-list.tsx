import { useState } from 'react';
import { cn } from '@/view/lib/utils';
import { FetchListParams } from '@/domain';
import { Button } from '@/view/components';
import { usePagination } from '@mantine/hooks';
import { useGetMarketListQuery } from '@/infrastructure';

import { MarketItem } from './market-item';

export const MarketList = () => {
  const [paginationParams, setPaginationParams] = useState<FetchListParams>({
    pageIndex: 0,
    pageSize: 4,
    orderBy: 'createdAt',
    orderDirection: 'asc',
  });

  const { data, status, isFetching } = useGetMarketListQuery(paginationParams);

  const total = data ? Math.ceil(data.total / paginationParams.pageSize) : 0;

  const pagination = usePagination({
    total: total,
    initialPage: 1,

    onChange: (page) => {
      setPaginationParams({
        ...paginationParams,
        pageIndex: page - 1,
      });
    },
  });

  if (status === 'error') {
    return <div>Error</div>;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div className="flex justify-between pb-2">
        <div className="flex gap-2">
          <Button disabled={isFetching || pagination.active === 1} onClick={pagination.previous}>
            {'<'}
          </Button>
          <Button disabled={isFetching || pagination.active === total} onClick={pagination.next}>
            {'>'}
          </Button>
        </div>
        <div className="flex">
          {pagination.range.map((page, index) => {
            return (
              <div key={index} className={'flex items-center'}>
                <span
                  onClick={() => {
                    if (!isNaN(page as number)) {
                      pagination.setPage(page as number);
                    }
                  }}
                  className={cn(
                    pagination.active === page ? 'bg-primary text-white rounded-md' : '',
                    'px-[.6rem] py-[.2rem]',
                  )}
                >
                  {isNaN(page as number) ? '...' : page}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      {data?.items.map((item) => <MarketItem key={item.id} market={item} />)}
    </div>
  );
};
