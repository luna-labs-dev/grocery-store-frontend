import { MarketListItem } from '@/domain';
import {
  Card,
  Button,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from '@/view/components';

import { UpdateMarketDialog } from '../../new-market/components/update-market-dialog';

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
          <UpdateMarketDialog triggerName="Editar" marketId={market.id} />
          <Button size={'sm'}>Editar</Button>
          <Button variant={'destructive'} size={'sm'}>
            excluir
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
