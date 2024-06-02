import { GetMarketByIdParams, Market } from '@/domain';
import { httpClient } from '@/main/clients';
import { isAxiosError } from 'axios';

export const httpGetMarketById = async ({ marketId }: GetMarketByIdParams): Promise<Market> => {
  const response = await httpClient.get(`/api/grocery-shopping/v1/market/${marketId}`);

  if (isAxiosError(response)) {
    console.error(response);
    throw response.response?.data;
  }

  return response.data;
};
