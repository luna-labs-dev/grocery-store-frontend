import { Link } from 'react-router-dom';
import { MarketListItem } from '@/domain';
import {
  Card,
  Button,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from '@/view/components';

import { UpdateMarketDialog } from '../../update-market/update-market-dialog';

export interface MarketItemParams {
  market: MarketListItem;
}

export const MarketItem = ({ market }: MarketItemParams) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{market.name}</CardTitle>
        <CardDescription>{market.code}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-end gap-2">
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
      </CardContent>
    </Card>
  );
};
