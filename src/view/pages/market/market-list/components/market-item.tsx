import type { MarketListItem } from '@/domain';
import { useStartShoppingEventMutation } from '@/infrastructure';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/view/components';
import { Link, useNavigate } from 'react-router-dom';

import { UpdateMarketDialog } from '../../update-market/update-market-dialog';

export interface MarketItemParams {
  market: MarketListItem;
}

export const MarketItem = ({ market }: MarketItemParams) => {
  const { mutateAsync } = useStartShoppingEventMutation();
  const navigate = useNavigate();
  return (
    <Card>
      <CardHeader>
        <CardTitle>{market.name}</CardTitle>
        <CardDescription>{market.code}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-end gap-2">
          <div>
            <UpdateMarketDialog
              options={{
                triggerName: 'Editar',
                marketId: market.id,
              }}
            />
            <Link to={`/market/update/${market.id}`} className="block md:hidden">
              <Button size={'sm'}>Editar</Button>
            </Link>
          </div>
          <div>
            <Button
              size={'sm'}
              variant="secondary"
              onClick={async () => {
                const shoppingEvent = await mutateAsync({ marketId: market.id });
                navigate(`/shopping-event/ongoing/${shoppingEvent.id}`, { replace: true });
              }}
            >
              Iniciar compra
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
