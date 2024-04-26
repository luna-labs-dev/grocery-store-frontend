import { FetchListParams, useQueryFactory, MarketListResponse } from '@/domain';

import { httpGetMarketList } from '../http';

export const useGetMarketListQuery = (params: FetchListParams) => {
  const query = useQueryFactory<FetchListParams, MarketListResponse>({
    queryKey: 'get-market-list',
    queryFunction: {
      fn: httpGetMarketList,
      params,
    },
  });

  return { ...query };
};
