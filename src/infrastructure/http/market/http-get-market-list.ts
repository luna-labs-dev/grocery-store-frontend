import { isAxiosError } from 'axios';
import { httpClient } from '@/main/clients';
import { FetchListParams, MarketListResponse } from '@/domain';

export const httpGetMarketList = async (params: FetchListParams): Promise<MarketListResponse> => {
  const response = await httpClient.get('/api/grocery-shopping/v1/market', {
    params,
  });

  if (isAxiosError(response)) {
    console.error(response);
    throw response.response?.data;
  }

  return response.data;
};
