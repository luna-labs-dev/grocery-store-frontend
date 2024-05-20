import { useQueryFactory, ShoppingEventListResponse, FetchShoppingEventListParams } from '@/domain';

import { httpGetShoppingEventList } from '../http';

export const useGetShoppingEventListQuery = (params: FetchShoppingEventListParams) => {
  const query = useQueryFactory<FetchShoppingEventListParams, ShoppingEventListResponse>({
    queryKey: 'get-shopping-event-list',
    queryFunction: {
      fn: httpGetShoppingEventList,
      params,
    },
  });

  return { ...query };
};
