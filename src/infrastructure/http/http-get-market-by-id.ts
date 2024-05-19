import { isAxiosError } from 'axios';
import { httpClient } from '@/main/clients';
import { Market, GetMarketByIdParams } from '@/domain';

export const httpGetMarketById = async ({ marketId }: GetMarketByIdParams): Promise<Market> => {
  const response = await httpClient.get(`/api/grocery-shopping/v1/market/${marketId}`);

  if (isAxiosError(response)) {
    console.error(response);
    throw response.response?.data;
  }

  return response.data;
};
