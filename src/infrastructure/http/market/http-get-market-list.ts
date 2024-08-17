import { httpClient } from '@/config/clients';
import { FetchListParams, MarketListResponse } from '@/domain';
import { isAxiosError } from 'axios';

export const httpGetMarketList = async (params: FetchListParams): Promise<MarketListResponse> => {
  const response = await httpClient.get('api/grocery-shopping/v1/market', {
    params,
  });

  if (isAxiosError(response)) {
    console.error(response);
    throw response.response?.data;
  }

  return response.data;
};
