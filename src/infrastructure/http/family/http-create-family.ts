import { CreateFamilyParams } from '@/domain';
import { httpClient } from '@/main/clients';
import { isAxiosError } from 'axios';

export const httpCreateFamily = async (params: CreateFamilyParams) => {
  try {
    const response = await httpClient.post('api/grocery-shopping/v1/family', params);

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error.response?.data;
    }

    throw error;
  }
};
