import { useGetFamilyQuery } from '@/infrastructure';

import { FamilyDetails, FamilyOnboarding } from './components';

export const FamilyOnboardingPage = () => {
  const { isFamilyMember } = useGetFamilyQuery();

  if (isFamilyMember) {
    return <FamilyDetails />;
  }

  return <FamilyOnboarding />;
};
