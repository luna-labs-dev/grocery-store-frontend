import { format } from 'date-fns';
import { Icon } from '@iconify/react';
import { ptBR } from 'date-fns/locale';
import { Product, fCurrency } from '@/domain';
import { Button, KeyValue } from '@/view/components';

import { AddProductToCartSheet } from './add-product-to-cart-sheet';

interface OngoingShoppingEventProductsProps {
  products: Product[];
  shoppingEventId: string;
}

export const OngoingShoppingEventProducts = ({
  products,
  shoppingEventId,
}: OngoingShoppingEventProductsProps) => {
  return (
    <section className="flex flex-col gap-2">
      <div className="flex justify-between">
        <h3 className="text-xl font-bold ">Produtos</h3>
        <AddProductToCartSheet shoppingEventId={shoppingEventId}>
          <Button variant={'ghost'}>
            <Icon icon="fa:cart-plus" fontSize={20} />
          </Button>
        </AddProductToCartSheet>
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
                    text: fCurrency(product.whosalePrice ?? 0),
                  }}
                />

                <KeyValue
                  props={{
                    title: 'Total',
                    text: fCurrency(product.amount * product.price ?? 0),
                  }}
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button size="sm">
                  <Icon icon="mingcute:edit-2-line" />
                </Button>
                <Button size="sm" variant="destructive">
                  <Icon icon="mingcute:delete-2-line" />
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
