import { Button } from '@/view/components';

import { MarketList } from './components/market-list';

export const MarketPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col justify-end gap-2 pt-2 sm:gap-0 sm:flex-row">
        <div>
          <Button className="w-full">Novo</Button>
        </div>
      </div>
      <MarketList />
    </div>
  );
};
