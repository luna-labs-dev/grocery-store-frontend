import { format } from 'date-fns';
import { Icon } from '@iconify/react';
import { ptBR } from 'date-fns/locale';
import { useParams } from 'react-router-dom';
import { fCurrency, getStatus } from '@/domain';
import { KeyValueWithIcon } from '@/view/components';
import { useGetShoppingEventByIdQuery } from '@/infrastructure';

export const OngoingShoppingEventPage = () => {
  const { shoppingEventId } = useParams();

  const { data } = useGetShoppingEventByIdQuery({ shoppingEventId });

  if (!data) {
    return <div>No data</div>;
  }

  return (
    <div className="flex flex-col pt-2">
      <section>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <Icon icon="mingcute:shop-line" />
            <p className="text-sm">{data.market.name}</p>
          </div>
          <div className="flex items-center gap-1">
            <Icon icon="mingcute:calendar-2-line" />
            <p className="text-sm">
              {format(data.createdAt, 'dd-MM-yyyy HH:mm:ss', { locale: ptBR })}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <Icon icon="mingcute:tag-line" />
            <p className="text-sm">{getStatus(data.status)}</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-2 p-4">
        <h3 className="text-xl font-bold ">Totais</h3>

        <div className="grid grid-cols-3 gap-4">
          <KeyValueWithIcon
            props={{
              title: 'Varejo',
              text: fCurrency(data.calculatedTotals.retailTotal),
              iconName: 'mingcute:shopping-cart-2-line',
            }}
          />
          <KeyValueWithIcon
            props={{
              title: 'Atacado',
              text: fCurrency(data.calculatedTotals.wholesaleTotal),
              iconName: 'mingcute:truck-line',
            }}
          />

          <KeyValueWithIcon
            props={{
              title: 'Economia',
              text: fCurrency(data.calculatedTotals.wholesaleSavingValue),
              iconName: 'mingcute:wallet-3-line',
            }}
          />

          <KeyValueWithIcon
            props={{
              title: 'Dif. Varejo',
              text: fCurrency(data.calculatedTotals.retailPaidDifferenceValue),
              iconName: 'mingcute:chart-bar-line',
            }}
          />

          <KeyValueWithIcon
            props={{
              title: 'Dif. Atacado',
              text: fCurrency(data.calculatedTotals.wholesalePaidDifferenceValue),
              iconName: 'mingcute:chart-bar-2-line',
            }}
          />

          <KeyValueWithIcon
            props={{
              title: 'Pago',
              text: fCurrency(data.calculatedTotals.paidValue),
              iconName: 'mingcute:currency-dollar-line',
            }}
          />
        </div>
      </section>
      <section className="flex flex-col gap-2">
        <div>
          <h3>Produtos</h3>
        </div>
        <div>
          {data.products.map((product) => {
            console.log(product);
            return (
              <div key={product.id} className="p-1 border-b">
                <div className="flex justify-between ">
                  <p className="text-sm">{product.name}</p>
                  <p className="text-sm">{format(product.addedAt, 'HH:mm:ss', { locale: ptBR })}</p>
                </div>
                <div className="text-xs">
                  <p>{product.amount}</p>
                  <p>{product.wholesaleMinAmount}</p>
                  <p>{fCurrency(product.price)}</p>
                  <p>{fCurrency(product.whosalePrice)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
