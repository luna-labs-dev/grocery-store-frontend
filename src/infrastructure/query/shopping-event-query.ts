import { toast } from 'sonner';
import { format } from 'date-fns';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  HttpError,
  errorMapper,
  ShoppingEvent,
  useQueryFactory,
  StartShoppingEventParams,
  StartShoppingEventResult,
  ShoppingEventListResponse,
  GetShoppingEventByIdParams,
  FetchShoppingEventListParams,
} from '@/domain';

import { httpStartShoppingEvent, httpGetShoppingEventList } from '../http';
import { httpGetShoppingEventById } from '../http/shopping-event/http-get-shopping-event-by-id';

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

export const useGetShoppingEventByIdQuery = (params: GetShoppingEventByIdParams) => {
  const query = useQueryFactory<GetShoppingEventByIdParams, ShoppingEvent>({
    queryKey: 'get-shopping-event-by-id',
    queryFunction: {
      fn: httpGetShoppingEventById,
      params,
    },
    staleTime: 1000 * 30,
    enabled: !!params.shoppingEventId,
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
