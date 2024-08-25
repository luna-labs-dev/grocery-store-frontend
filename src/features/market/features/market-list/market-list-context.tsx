import { GetMarketListParams } from '@/features/market';
import { createContext, useContext } from 'react';

interface ContextProps {
  paginationParams: GetMarketListParams;
  setPaginationParams: React.Dispatch<React.SetStateAction<GetMarketListParams>>;
}

export const MarketListContext = createContext<ContextProps | null>(null);

export const useMarketListContext = () => {
  const context = useContext(MarketListContext);

  if (!context) {
    throw new Error('MarketListContext must be used within a MarketListProvider');
  }

  return context;
};
