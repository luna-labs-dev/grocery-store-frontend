import { isAxiosError } from 'axios';
import { httpClient } from '@/main/clients';
import { NewMarketParams, NewMarketResponse } from '@/domain';

export const httpNewMarket = async ({
  marketName,
}: NewMarketParams): Promise<NewMarketResponse> => {
  try {
    const response = await httpClient.post('/api/grocery-shopping/v1/market', {
      marketName,
    });

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error);
      throw error.response?.data;
    }
    throw error;
  }
};
