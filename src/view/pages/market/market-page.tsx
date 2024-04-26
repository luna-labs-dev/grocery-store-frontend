import { Button } from '@/view/components';

import { MarketList } from './components/market-list';

export const MarketPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col justify-between gap-2 pt-2 sm:gap-0 sm:flex-row">
        <h1 className="text-2xl font-bold">Mercados</h1>
        <div>
          <Button className="w-full">Novo</Button>
        </div>
      </div>
      <MarketList />
    </div>
  );
};
