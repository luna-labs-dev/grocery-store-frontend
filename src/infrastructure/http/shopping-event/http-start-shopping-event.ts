import { StartShoppingEventParams, StartShoppingEventResult } from '@/domain';
import { httpClient } from '@/main/clients';
import { isAxiosError } from 'axios';

export const httpStartShoppingEvent = async ({
  marketId,
}: StartShoppingEventParams): Promise<StartShoppingEventResult> => {
  try {
    const response = await httpClient.post('api/grocery-shopping/v1/shopping-event/start', {
      marketId,
    });

    return response.data;
  } catch (error) {
    console.error(error);

    if (isAxiosError(error)) {
      throw error.response?.data;
    }

    throw error;
  }
};
