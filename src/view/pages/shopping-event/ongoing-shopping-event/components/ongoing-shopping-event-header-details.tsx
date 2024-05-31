import { format } from 'date-fns';
import { Icon } from '@iconify/react';
import { ptBR } from 'date-fns/locale';
import { getStatus, ShoppingEvent } from '@/domain';

interface OngoingShoppingEventHeaderDetailsProps {
  shoppingEvent: ShoppingEvent;
}

export const OngoingShoppingEventHeaderDetails = ({
  shoppingEvent,
}: OngoingShoppingEventHeaderDetailsProps) => {
  return (
    <section>
      <div className="flex flex-col gap-2 md:flex-row md:gap-6">
        <div className="flex items-center gap-1">
          <Icon icon="mingcute:shop-line" />
          <p className="text-sm">{shoppingEvent.market.name}</p>
        </div>
        <div className="flex items-center gap-1">
          <Icon icon="mingcute:calendar-2-line" />
          <p className="text-sm">
            {format(shoppingEvent.createdAt, 'EEEEEE - dd/MM/yyyy HH:mm:ss ', { locale: ptBR })}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <Icon icon="mingcute:tag-line" />
          <p className="text-sm">{getStatus(shoppingEvent.status)}</p>
        </div>
      </div>
    </section>
  );
};
