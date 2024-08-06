import { RemoveFamilyMemberParams } from '@/domain';
import { httpClient } from '@/main/clients';
import { isAxiosError } from 'axios';

export const httpRemoveFamilyMember = async ({
  userToBeRemovedId,
}: RemoveFamilyMemberParams): Promise<void> => {
  try {
    await httpClient.put<void>('api/grocery-shopping/v1/family/remove', {
      userToBeRemovedId,
    });
  } catch (error) {
    if (isAxiosError(error)) {
      throw error.response?.data;
    }

    throw error;
  }
};
