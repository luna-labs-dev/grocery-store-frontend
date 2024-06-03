import type { EndShoppingEventParams, EndShoppingEventResult } from '@/domain';
import { httpClient } from '@/main/clients';
import { isAxiosError } from 'axios';

export const httpEndShoppingEvent = async ({
  shoppingEventId,
  params,
}: EndShoppingEventParams): Promise<EndShoppingEventResult> => {
  try {
    const response = await httpClient.put(
      `api/grocery-shopping/v1/shopping-event/end/${shoppingEventId}`,
      params,
    );

    return response.data;
  } catch (error) {
    console.error(error);
    if (isAxiosError(error)) {
      throw error.response?.data;
    }
    throw error;
  }
};
