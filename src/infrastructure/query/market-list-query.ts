import { toast } from 'sonner';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  HttpError,
  errorMapper,
  MarketResponse,
  FetchListParams,
  NewMarketParams,
  useQueryFactory,
  MarketListResponse,
  UpdateMarketParams,
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
  const mutation = useMutation<MarketResponse, HttpError, NewMarketParams>({
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

export const useUpdateMarketMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation<MarketResponse, HttpError, UpdateMarketParams>({
    mutationFn: async (payload: UpdateMarketParams) => httpNewMarket(payload),
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
