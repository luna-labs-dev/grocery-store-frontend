import { Link } from 'react-router-dom';
import { Button } from '@/view/components';

import { MarketList } from './components/market-list';
import { NewMarketDialog } from '../new-market/components/new-market-dialog';

export const MarketPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col justify-end gap-2 pt-2 sm:gap-0 sm:flex-row">
        <div>
          <NewMarketDialog triggerName="Novo Mercado" />
          <Button className="w-full md:hidden">
            <Link to={'/market/new'} replace>
              Novo Mercado
            </Link>
          </Button>
        </div>
      </div>
      <MarketList />
    </div>
  );
};
