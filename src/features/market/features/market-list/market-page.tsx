import { Button } from '@/components';
import { GetMarketListParams } from '@/features/market';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NewMarketDialog } from '../new-market/new-market-dialog';
import { MarketListFilter } from './components';
import { MarketList } from './components/market-list';
import { MarketListContext } from './market-list-context';

export const MarketPage = () => {
  const [paginationParams, setPaginationParams] = useState<GetMarketListParams>({
    search: '',
    pageIndex: 0,
    pageSize: 4,
    orderBy: 'createdAt',
    orderDirection: 'asc',
  });

  return (
    <MarketListContext.Provider
      value={{
        paginationParams,
        setPaginationParams,
      }}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col justify-between items-end gap-2 pt-4 lg:flex-row">
          <MarketListFilter />
          <NewMarketButtonWrapper />
        </div>
        <MarketList />
      </div>
    </MarketListContext.Provider>
  );
};

const NewMarketButtonWrapper = () => {
  return (
    <div className="w-full lg:w-fit">
      <NewMarketDialog
        options={{
          triggerName: 'Novo Mercado',
        }}
      />
      <Link to={'/market/new'} replace className="md:hidden">
        <Button className="w-full">Novo Mercado</Button>
      </Link>
    </div>
  );
};
