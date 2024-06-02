import {
  AddProductToCartParams,
  AddProductToCartSuccessResult,
  EndShoppingEventParams,
  EndShoppingEventResult,
  FetchShoppingEventListParams,
  GetShoppingEventByIdParams,
  HttpError,
  RemoveProductFromCartParams,
  ShoppingEventListResponse,
  StartShoppingEventParams,
  StartShoppingEventResult,
  UpdateProductInCartParams,
  errorMapper,
  useQueryFactory,
} from '@/domain';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { format } from 'date-fns';
import { toast } from 'sonner';

import {
  httpEndShoppingEvent,
  httpGetShoppingEventList,
  httpRemoveProductFromCart,
  httpStartShoppingEvent,
  httpUpdateProductInCart,
} from '../http';
import { httpAddProductToCart } from '../http/shopping-event/http-add-product-to-cart';
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
  const query = useQuery({
    queryKey: ['get-shopping-event-by-id', params],
    queryFn: ({ queryKey }) => httpGetShoppingEventById(queryKey[1] as GetShoppingEventByIdParams),
    staleTime: 1000 * 5,
    enabled: !!params.shoppingEventId,
    refetchInterval: 1000 * 60 * 2,
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

export const useEndShoppingEventMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation<EndShoppingEventResult, HttpError, EndShoppingEventParams>({
    mutationFn: httpEndShoppingEvent,
    onError: (error, params) => {
      const { title, description } = errorMapper(error.code ?? '')(params);

      toast.error(title, {
        description,
      });
    },
    onSuccess: (success) => {
      toast.success('Evento finalizado', {
        description: `O evento de compra foi finalizado às ${format(
          success.createdAt,
          'HH:mm:ss',
        )}`,
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['get-shopping-event-list'],
      });
      queryClient.invalidateQueries({
        queryKey: ['get-shopping-event-by-id'],
      });
    },
  });

  return { ...mutation };
};

export const useAddProductCartMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<AddProductToCartSuccessResult, HttpError, AddProductToCartParams>({
    mutationFn: httpAddProductToCart,
    onError: (error) => {
      const { title } = errorMapper(error.code ?? '')();
      toast.error(title);
    },
    onSuccess: (_, params) => {
      toast.success('Produto adicionado ao carrinho', {
        description: `O produto ${params.params.name} foi adicionado ao carrinho`,
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['get-shopping-event-by-id'],
      });
    },
  });

  return { ...mutation };
};

export const useUpdateProductInCartMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<void, HttpError, UpdateProductInCartParams>({
    mutationFn: httpUpdateProductInCart,
    onError: (error) => {
      const { title } = errorMapper(error.code ?? '')();
      toast.error(title);
    },
    onSuccess: (_, params) => {
      toast.success('Produto atualizado', {
        description: `O produto ${params.params.name} foi atualizado no carrinho`,
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['get-shopping-event-by-id'],
      });
    },
  });

  return { ...mutation };
};

export const useRemoveProductFromCartMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<void, HttpError, RemoveProductFromCartParams>({
    mutationFn: httpRemoveProductFromCart,
    onError: (error) => {
      const { title } = errorMapper(error.code ?? '')();
      toast.error(title);
    },
    onSuccess: () => {
      toast.success('Produto removido', {
        description: 'O produto foi removido no carrinho',
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['get-shopping-event-by-id'],
      });
    },
  });

  return { ...mutation };
};
