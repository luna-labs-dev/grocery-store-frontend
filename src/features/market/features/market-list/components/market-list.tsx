import { Pagination } from '@/components';
import { useGetMarketListQuery } from '@/features/market/infrastructure';

import NoDataSvg from '@/assets/images/adventure-map.svg';

import { useMarketListContext } from '../market-list-context';
import { MarketItem } from './market-item';

export const MarketList = () => {
  const { paginationParams, setPaginationParams } = useMarketListContext();
  const { data, status, isFetching, isLoading } = useGetMarketListQuery(paginationParams);

  if (status === 'error') {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (data && data.total === 0) {
    return (
      <div className="w-full flex flex-col gap-4 mt-8 justify-center items-center">
        <img src={NoDataSvg} alt="No data" className="w-40" />
        <h2>Nenhum mercado encontrado</h2>
      </div>
    );
  }

  return (
    <div>
      <Pagination
        paginationProps={{
          paginationParams,
          setPaginationParams,
          listTotal: data?.total,
          isFetching,
        }}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data?.items.map((item) => (
          <MarketItem key={item.id} market={item} />
        ))}
      </div>
    </div>
  );
};
