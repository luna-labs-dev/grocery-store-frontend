import { Input, Label } from '@/components';
import { useGetMarketListQuery } from '@/features/market/infrastructure';
import { useDebouncedCallback } from '@mantine/hooks';
import { useState } from 'react';
import { useMarketListContext } from '../market-list-context';

export const MarketListFilter = () => {
  const [search, setSearch] = useState<string>('');
  const { paginationParams, setPaginationParams } = useMarketListContext();

  const { refetch } = useGetMarketListQuery(paginationParams);

  const handleRefetch = useDebouncedCallback(async (value: string) => {
    setPaginationParams({ ...paginationParams, search: value });
    refetch();
  }, 500);

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="search" className="font-semibold">
        Busca por nome
      </Label>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          id="search"
          placeholder="digite aqui o nome do mercado"
          className="h-9"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            handleRefetch(e.target.value);
          }}
        />
      </div>
    </div>
  );
};
