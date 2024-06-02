import { RemoveProductFromCartParams } from '@/domain';
import { httpClient } from '@/main/clients';
import { isAxiosError } from 'axios';

export const httpRemoveProductFromCart = async ({
  shoppingEventId,
  productId,
}: RemoveProductFromCartParams): Promise<void> => {
  try {
    await httpClient.delete(
      `/api/grocery-shopping/v1/shopping-event/${shoppingEventId}/cart/${productId}`,
    );
  } catch (error) {
    console.error(error);

    if (isAxiosError(error)) {
      throw error.response?.data;
    }

    throw error;
  }
};
