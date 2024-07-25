import { useGetFamilyQuery } from '@/infrastructure';
import { useEffect, useState } from 'react';
import { FamilyDetails, FamilyOnboarding } from './components';

export const FamilyOnboardingPage = () => {
  const { data, error, isFetching, isLoading } = useGetFamilyQuery();
  const [isFamilyMember, setIsFamilyMember] = useState<boolean>(false);

  useEffect(() => {
    if (error?.code === 'USER_NOT_A_FAMILY_MEMBER_ERROR') {
      setIsFamilyMember(false);
    }
    if (!error) {
      setIsFamilyMember(true);
    }
  }, [error]);

  if (isFetching || isLoading) {
    return <div>Carregando...</div>;
  }

  if (isFamilyMember && data) {
    return <FamilyDetails />;
  }

  return <FamilyOnboarding />;
};
