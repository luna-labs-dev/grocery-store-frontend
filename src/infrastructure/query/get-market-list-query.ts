import { toast } from 'sonner';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  HttpError,
  errorMapper,
  FetchListParams,
  NewMarketParams,
  useQueryFactory,
  NewMarketResponse,
  MarketListResponse,
} from '@/domain';

import { httpGetMarketList } from '../http';
import { httpNewMarket } from '../http/http-new-market';

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

export const useNewMarketMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation<NewMarketResponse, HttpError, NewMarketParams>({
    mutationFn: async (payload: NewMarketParams) => httpNewMarket(payload),
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['get-market-list'],
      });
    },
    onError: (error, params) => {
      const { title, description } = errorMapper(error.code)(params);

      toast.error(title, {
        description,
      });
    },
  });

  return { ...mutation };
};
