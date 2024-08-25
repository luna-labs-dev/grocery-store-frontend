import { httpClient } from '@/config/clients';
import { GetMarketListParams, MarketListResponse } from '@/features/market';
import { isAxiosError } from 'axios';

export const httpGetMarketList = async (
  params: GetMarketListParams,
): Promise<MarketListResponse> => {
  const response = await httpClient.get('api/grocery-shopping/v1/market', {
    params,
  });

  if (isAxiosError(response)) {
    console.error(response);
    throw response.response?.data;
  }

  return response.data;
};
