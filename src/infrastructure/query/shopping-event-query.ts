import { toast } from 'sonner';
import { format } from 'date-fns';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  HttpError,
  errorMapper,
  useQueryFactory,
  StartShoppingEventParams,
  StartShoppingEventResult,
  ShoppingEventListResponse,
  FetchShoppingEventListParams,
} from '@/domain';

import { httpStartShoppingEvent, httpGetShoppingEventList } from '../http';

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

export const useStartShoppingEventMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation<StartShoppingEventResult, HttpError, StartShoppingEventParams>({
    mutationFn: httpStartShoppingEvent,
    onError: (error, params) => {
      const { title, description } = errorMapper(error.code ?? '')(params);

      toast.error(title, {
        description,
      });
    },
    onSuccess: (success) => {
      toast.success('Evento de compra iniciado', {
        description: `O evento de compra foi iniciado às ${format(success.createdAt, 'HH:mm:ss')}`,
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['get-shopping-event-list'],
      });
    },
  });

  return { ...mutation };
};
