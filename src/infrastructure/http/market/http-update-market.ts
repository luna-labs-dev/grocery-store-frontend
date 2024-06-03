import type { MarketResponse, UpdateMarketParams } from '@/domain';
import { httpClient } from '@/main/clients';
import { isAxiosError } from 'axios';

export const httpUpdateMarket = async ({
  marketId,
  marketName,
}: UpdateMarketParams): Promise<MarketResponse> => {
  try {
    const response = await httpClient.put(`api/grocery-shopping/v1/market/${marketId}`, {
      name: marketName,
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
