import { format } from 'date-fns';
import { Icon } from '@iconify/react';
import { ptBR } from 'date-fns/locale';
import { Button } from '@/view/components';
import { getStatus, ShoppingEvent } from '@/domain';

import { EndShoppingEventDialog } from './end-shopping-event-dialog';

interface OngoingShoppingEventHeaderDetailsProps {
  shoppingEvent: ShoppingEvent;
}

export const OngoingShoppingEventHeaderDetails = ({
  shoppingEvent,
}: OngoingShoppingEventHeaderDetailsProps) => {
  return (
    <section className="flex justify-between">
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
      <div>
        {shoppingEvent.status === 'ONGOING' && (
          <EndShoppingEventDialog shoppingEventId={shoppingEvent.id}>
            <Button variant="ghost" size={'sm'}>
              <Icon icon="gis:flag-finish-b-o" fontSize={20} />
            </Button>
          </EndShoppingEventDialog>
        )}
      </div>
    </section>
  );
};
