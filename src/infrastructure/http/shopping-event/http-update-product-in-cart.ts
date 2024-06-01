import { isAxiosError } from 'axios';
import { httpClient } from '@/main/clients';
import { UpdateProductInCartParams } from '@/domain';

export const httpUpdateProductInCart = async ({
  shoppingEventId,
  productId,
  params,
}: UpdateProductInCartParams): Promise<void> => {
  try {
    await httpClient.put(
      `/api/grocery-shopping/v1/shopping-event/${shoppingEventId}/cart/${productId}`,
      params,
    );
  } catch (error) {
    console.error(error);
    if (isAxiosError(error)) {
      throw error.response?.data;
    }
    throw error;
  }
};
