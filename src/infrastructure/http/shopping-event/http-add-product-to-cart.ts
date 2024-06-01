import { isAxiosError } from 'axios';
import { httpClient } from '@/main/clients';
import { AddProductToCartParams, AddProductSuccessResponse } from '@/domain';

export const httpAddProductToCart = async ({
  shoppingEventId,
  params,
}: AddProductToCartParams): Promise<AddProductSuccessResponse> => {
  try {
    const response = await httpClient.post(
      `/api/grocery-shopping/v1/shopping-event/${shoppingEventId}/cart`,
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
