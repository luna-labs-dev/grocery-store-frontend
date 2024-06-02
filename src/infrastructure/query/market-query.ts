import { toast } from 'sonner';
import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  Market,
  HttpError,
  errorMapper,
  MarketResponse,
  FetchListParams,
  NewMarketParams,
  useQueryFactory,
  MarketListResponse,
  UpdateMarketParams,
  GetMarketByIdParams,
} from '@/domain';

import { httpNewMarket } from '../http/market/http-new-market';
import { httpUpdateMarket, httpGetMarketById, httpGetMarketList } from '../http';

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

export const useGetMarketByIdQuery = (params: GetMarketByIdParams) => {
  const query = useQueryFactory<GetMarketByIdParams, Market>({
    queryKey: 'get-market-by-id',
    queryFunction: {
      fn: httpGetMarketById,
      params,
    },
    enabled: !!params.marketId,
  });

  return { ...query };
};

export const useNewMarketMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation<MarketResponse, AxiosError | HttpError, NewMarketParams>({
    mutationFn: (params: NewMarketParams) => httpNewMarket(params),

    onError: (error, params) => {
      const { title, description } = errorMapper(error.code ?? '')(params);

      toast.error(title, {
        description,
      });
    },
    onSuccess: (_, params) => {
      toast.success('Mercado Criado', {
        description: `o mercado "${params.marketName}" foi criado com sucesso`,
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['get-market-list'],
      });
    },
  });

  return { ...mutation };
};

export const useUpdateMarketMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation<MarketResponse, HttpError, UpdateMarketParams>({
    mutationFn: async (payload: UpdateMarketParams) => httpUpdateMarket(payload),
    onError: (error, params) => {
      const { title, description } = errorMapper(error.code)(params);

      toast.error(title, {
        description,
      });
    },
    onSuccess: (_, params) => {
      toast.success('Mercado atualizado', {
        description: `o novo nome do mercado agora é "${params.marketName}"`,
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['get-market-list'],
      });
    },
  });

  return { ...mutation };
};
