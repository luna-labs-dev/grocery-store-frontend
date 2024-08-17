import { httpClient } from '@/config/clients';
import { JoinFamilyParams } from '@/features/family';
import { isAxiosError } from 'axios';

export const httpJoinFamily = async (params: JoinFamilyParams) => {
  try {
    const response = await httpClient.post('api/grocery-shopping/v1/family/join', params);

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error.response?.data;
    }

    throw error;
  }
};
