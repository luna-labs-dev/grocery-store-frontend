import { isAxiosError } from 'axios';
import { httpClient } from '@/main/clients';
import { MarketResponse, UpdateMarketParams } from '@/domain';

export const httpUpdateMarket = async ({
  marketId,
  marketName,
}: UpdateMarketParams): Promise<MarketResponse> => {
  try {
    const response = await httpClient.put(`/api/grocery-shopping/v1/market/${marketId}`, {
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
