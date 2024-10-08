import { Family } from '@/domain';
import { httpClient } from '@/main/clients';
import { isAxiosError } from 'axios';

export const httpGetFamily = async (): Promise<Family> => {
  try {
    const response = await httpClient.get('api/grocery-shopping/v1/family');

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error.response?.data;
    }

    throw error;
  }
};
