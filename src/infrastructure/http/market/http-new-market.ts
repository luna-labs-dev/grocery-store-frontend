import { httpClient } from '@/config/clients';
import { MarketResponse, NewMarketParams } from '@/domain';
import { isAxiosError } from 'axios';

export const httpNewMarket = async ({ marketName }: NewMarketParams): Promise<MarketResponse> => {
  try {
    const response = await httpClient.post('api/grocery-shopping/v1/market', {
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
