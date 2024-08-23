import { httpClient } from '@/config/clients';
import { GetMarketByIdParams, Market } from '@/features/market';
import { isAxiosError } from 'axios';

export const httpGetMarketById = async ({ marketId }: GetMarketByIdParams): Promise<Market> => {
  const response = await httpClient.get(`api/grocery-shopping/v1/market/${marketId}`);

  if (isAxiosError(response)) {
    console.error(response);
    throw response.response?.data;
  }

  return response.data;
};
