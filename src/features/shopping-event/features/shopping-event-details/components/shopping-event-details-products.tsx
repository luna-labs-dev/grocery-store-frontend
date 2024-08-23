import { Button, KeyValue } from '@/components';
import { fCurrency } from '@/domain';

import { Icon } from '@iconify/react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Product, ShoppingEventStatus } from '@/features/shopping-event/domain';
import { cn } from '@/lib/utils';
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';
import {
  AddProductToCartSheet,
  RemoveProductFromCartDialog,
  UpdateProductInCartSheet,
} from './cart';

interface ShoppingEventDetailsProductsProps {
  products: Product[];
  shoppingEventId: string;
  shoppingEventStatus: ShoppingEventStatus;
  refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<any, any>>;
  isFetching: boolean;
}

export const ShoppingEventDetailsProducts = ({
  products,
  shoppingEventId,
  shoppingEventStatus,
  refetch,
  isFetching,
}: ShoppingEventDetailsProductsProps) => {
  return (
    <section className="flex flex-col gap-2">
      <div className="flex justify-between">
        <h3 className="text-xl font-bold ">Produtos</h3>
        {shoppingEventStatus === 'ONGOING' && (
          <div className="flex gap-1">
            <Button variant={'ghost'} onClick={() => refetch()}>
              <Icon
                icon={'material-symbols:refresh'}
                fontSize={20}
                className={cn(isFetching && 'animate-spin')}
              />
            </Button>
            <AddProductToCartSheet shoppingEventId={shoppingEventId}>
              <Button variant={'ghost'}>
                <Icon icon="fa:cart-plus" fontSize={20} />
              </Button>
            </AddProductToCartSheet>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2">
        {products.map((product) => {
          return (
            <div key={product.id} className="flex flex-col p-4 border rounded-lg md:w-[32rem]">
              <div className="flex justify-between ">
                <p className="text-sm">{product.name}</p>
                <p className="text-sm">{format(product.addedAt, 'HH:mm:ss', { locale: ptBR })}</p>
              </div>
              <div className="grid grid-cols-3">
                <KeyValue
                  props={{
                    title: 'Quantidade',
                    text: (product.amount ?? 0).toString(),
                  }}
                />

                <KeyValue
                  props={{
                    title: 'Mín. atacado',
                    text: (product.wholesaleMinAmount ?? 0).toString(),
                  }}
                />

                <KeyValue
                  props={{
                    title: 'Preço',
                    text: fCurrency(product.price ?? 0),
                  }}
                />

                <KeyValue
                  props={{
                    title: 'Preço atacado',
                    text: fCurrency(product.wholesalePrice ?? 0),
                  }}
                />

                <KeyValue
                  props={{
                    title: 'Total',
                    text: fCurrency(product.amount * product.price),
                  }}
                />
              </div>
              {shoppingEventStatus === 'ONGOING' && (
                <div className="flex justify-end gap-2">
                  <UpdateProductInCartSheet shoppingEventId={shoppingEventId} product={product}>
                    <Button size="sm">
                      <Icon icon="mingcute:edit-2-line" />
                    </Button>
                  </UpdateProductInCartSheet>
                  <RemoveProductFromCartDialog shoppingEventId={shoppingEventId} product={product}>
                    <Button size="sm" variant="destructive">
                      <Icon icon="mingcute:delete-2-line" />
                    </Button>
                  </RemoveProductFromCartDialog>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
